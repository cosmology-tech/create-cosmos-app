import * as shell from 'shelljs';
import semver from 'semver';
import * as c from 'ansi-colors';
import { prompt } from './prompt';
import { join, dirname, basename, sep, relative } from 'path';
import { sync as mkdirp } from 'mkdirp';
import { sync as glob } from 'glob';
import * as fs from 'fs';
import { cloneRepo, getPackageLicAndAccessInfo, getQuestionsAndAnswers, getTemplateFolder } from './utils';
import { CCA_URL } from './constants';
const requiredTools = ['git', 'yarn'];

export const createGitApp = (repo: string, version: string) => {
    return async argv => {

        // if --no-install is set, don't touch!
        if (!argv.hasOwnProperty('install')) argv.install = true;

        // check required tools
        for (const tool of requiredTools) {
            if (!shell.which(tool)) {
                shell.echo(`Sorry, this script requires ${tool}.`);
                return shell.exit(1);
            }
        }

        let { name } = await prompt([
            {
                name: 'name',
                message: 'Enter your new app name',
                required: true,
            }
        ], argv);
        name = name.replace(/\s/g, '-');

        const folderName = await getTemplateFolder(argv);
        const currentDirectory = process.cwd();
        const tempDir = cloneRepo(argv, repo, name);
        const clonedRepoDir = join(tempDir, name);
        // cd into the cloned repo from $dir
        shell.cd(name);

        // warn about upgrades
        if (repo === CCA_URL) {
            const rootPkgPath = join(clonedRepoDir, 'packages/create-cosmos-app/package.json');
            const rootPkg = JSON.parse(fs.readFileSync(rootPkgPath, 'utf-8'));
            if (semver.gt(rootPkg.version, version)) {
                console.warn(c.yellow(`⚠️ You are using create-cosmos-app version ${c.red(rootPkg.version)}, but version ${c.green(version)} is available. Run "${c.cyan('cca upgrade')}" or "${c.cyan('npm install -g create-cosmos-app@latest')}" to upgrade.`));
            }
        }

        // get template 
        const list = shell.ls(`./${folderName}`);
        const { template } = await prompt([
            {
                type: 'list',
                name: 'template',
                message: 'which template',
                required: true,
                choices: list
            }
        ], argv);
        argv.template = template;

        const results = await getQuestionsAndAnswers(argv, name, folderName);

        const hasResults = Object.keys(results).length > 0;

        // KEEP THIS CODE FOR BOILERPLATES!
        let license = {};
        let scopedResults = {};
        if (hasResults) {
            ({
                license,
                scopedResults
            } = await getPackageLicAndAccessInfo(results));
            const path = join(folderName, argv.template, '.questions.json')
            shell.rm('-rf', path);
        }

        const files = []
            .concat(glob(join(process.cwd(), folderName, template, '/**/.*')))
            .concat(glob(join(process.cwd(), folderName, template, '/**/*')));

        for (let i = 0; i < files.length; i++) {
            const templateFile = files[i];
            if (fs.lstatSync(templateFile).isDirectory()) continue;

            let content = fs.readFileSync(templateFile).toString();

            // LICENSE
            if (
                basename(templateFile) === 'LICENSE' &&
                // @ts-ignore
                license.__LICENSE__ === 'closed'
            ) {
                content = `Copyright (c) ${new Date().getFullYear()} __USERFULLNAME__ <__USEREMAIL__> - All Rights Reserved
    Unauthorized copying via any medium is strictly prohibited
    Proprietary and confidential`;
            }

            // swap out content from results!
            Object.keys(results).forEach(key => {
                if (/^__/.test(key)) {
                    content = content.replace(new RegExp(key, 'g'), results[key]);
                }
            });

            // access
            if (hasResults) {
                if (results.__ACCESS__ === 'public') {
                    // @ts-ignore
                    if (scopedResults.scoped) {
                        content = content.replace(
                            /__PACKAGE_IDENTIFIER__/g,
                            `@${results.__USERNAME__}/${results.__MODULENAME__}`
                        );
                    } else {
                        content = content.replace(
                            /__PACKAGE_IDENTIFIER__/g,
                            `${results.__MODULENAME__}`
                        );
                    }
                } else {
                    content = content.replace(
                        /__PACKAGE_IDENTIFIER__/g,
                        `@${results.__USERNAME__}/${results.__MODULENAME__}`
                    );
                }
            }


            // write stuff
            const localfile = templateFile.split(`${folderName}/` + template)[1];
            const localdir = dirname(localfile);
            const dirpath = join(currentDirectory, name, localdir);
            const filepath = join(currentDirectory, name, localfile);

            mkdirp(dirpath);
            fs.writeFileSync(filepath, content);

        }

        shell.cd(currentDirectory);
        shell.rm('-rf', tempDir);
        shell.cd(`./${name}`);

        const pkgJsons = []
            .concat(glob(join(currentDirectory, name, '/**/package.json')));

        let pkgJsonFound = true;
        let closestPkgJson = null;
        if (pkgJsons.length === 0) {
            console.log('No package.json file found');
            pkgJsonFound = false;
        } else {
            // Find the shortest path
            closestPkgJson = pkgJsons.reduce((shortest, current) => {
                return current.split(sep).length < shortest.split(sep).length ? current : shortest;
            });
        }


        let rel;
        if (pkgJsonFound) {
            // clean up lock-file business...
            const pkg = JSON.parse(fs.readFileSync(closestPkgJson, 'utf-8'));
            delete pkg.scripts['locks:remove']
            delete pkg.scripts['locks:create']
            delete pkg.scripts['locks']
            delete pkg.devDependencies['generate-lockfile']
            fs.writeFileSync(closestPkgJson, JSON.stringify(pkg, null, 2));

            // now yarn...
            if (argv.install) {
                shell.cd(dirname(closestPkgJson));
                shell.exec(`yarn`);
            }

            rel = relative(currentDirectory, dirname(closestPkgJson));
        }
        shell.cd(currentDirectory);


        let cmd = `cd ./${name}`;
        if (!hasResults && pkgJsonFound) {
            // if rel, then set manually
            cmd = `cd ./${rel}`;
            cmd += `\nyarn dev`
        }

        console.log(`
        
                 |              _   _
     ===         |.===.        '\\-//\`    
    (o o)        {}o o{}        (o o)     
ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-

✨ Have fun! Now you can start on your project ⚛️

Now, run this command: 

${c.bold.whiteBright(cmd)}
      `);
    };
};
