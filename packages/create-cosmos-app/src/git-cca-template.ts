import * as shell from 'shelljs';
import semver from 'semver';
import * as c from 'ansi-colors';
import { prompt } from './prompt';
import { join, dirname, basename, sep, relative } from 'path';
import { sync as mkdirp } from 'mkdirp';
import { sync as glob } from 'glob';
import * as fs from 'fs';
import {
    cloneRepo,
    getPackageLicAndAccessInfo,
    getQuestionsAndAnswers,
    getTemplateFolder
} from './utils';
import { CCA_URL } from './constants';

const requiredTools = ['git', 'yarn'];

const motd = (cmd: string, printCmd: boolean) => {
    const commandSection = printCmd ? `Now, run this command:\n\n${c.bold.whiteBright(cmd)}` : '';
    return `
                 |              _   _
     ===         |.===.        '\\-//\`    
    (o o)        {}o o{}        (o o)     
ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-

✨ Have fun! Now you can start on your project ⚛️

${commandSection}
    `;
};


const checkRequiredTools = () => {
    for (const tool of requiredTools) {
        if (!shell.which(tool)) {
            shell.echo(`Sorry, this script requires ${tool}.`);
            return false;
        }
    }
    return true;
}


async function getAppName(argv) {
    let { name } = await prompt(
        [{
            name: 'name',
            message: 'Enter your new app name',
            required: true,
        }],
        argv
    );
    return name.replace(/\s/g, '-');
}


async function setupAppDirectory(repo, argv, name) {
    const folderName = await getTemplateFolder(argv);
    const currentDirectory = process.cwd();
    const tempDir = cloneRepo(argv, repo, name);

    shell.cd(name);
    return { folderName, currentDirectory, tempDir };
}


async function warnIfOutdated(repo, clonedRepoDir, version) {
    if (repo === CCA_URL) {
        const rootPkgPath = join(clonedRepoDir, 'packages/create-cosmos-app/package.json');
        const rootPkg = JSON.parse(fs.readFileSync(rootPkgPath, 'utf-8'));
        if (semver.lt(rootPkg.version, version)) {
            console.warn(c.yellow(`⚠️ You are using create-cosmos-app version ${c.red(rootPkg.version)}, but version ${c.green(version)} is available. Run "${c.cyan('cca upgrade')}" or "${c.cyan('npm install -g create-cosmos-app@latest')}" to upgrade.`));
        }
    }
}

export const createGitApp = (repo: string, version: string) => {
    return async argv => {

        // if --no-install is set, don't touch!
        if (!argv.hasOwnProperty('install')) argv.install = true;
        if (!argv.hasOwnProperty('printCmd')) argv.printCmd = true;

        // check required (git, yarn, etc...)
        if (!checkRequiredTools()) return shell.exit(1);

        // setup directories/repo
        const name = await getAppName(argv);
        const { folderName, currentDirectory, tempDir } = await setupAppDirectory(repo, argv, name);
        const clonedRepoDir = join(tempDir, name);

        // check version
        await warnIfOutdated(repo, clonedRepoDir, version);

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
        let scopedResults: any = {};
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
                // Determine the prefix based on the conditions
                let prefix = '';
                if (results.__ACCESS__ === 'public') {
                    prefix = scopedResults.scoped ? `@${results.__USERNAME__}/` : '';
                } else {
                    prefix = `@${results.__USERNAME__}/`;
                }

                // Replace __PACKAGE_IDENTIFIER__ with the determined prefix and module name
                content = content.replace(/__PACKAGE_IDENTIFIER__/g, `${prefix}${results.__MODULENAME__}`);
            }

            // Construct the file path
            const relativeFilePath = templateFile.split(join(folderName, template) + sep)[1];
            const targetDirPath = join(currentDirectory, name, dirname(relativeFilePath));
            const targetFilePath = join(targetDirPath, basename(relativeFilePath));

            // Ensure the target directory exists before writing the file
            mkdirp(targetDirPath);
            fs.writeFileSync(targetFilePath, content);

        }

        // Clean up and change directory
        shell.cd(currentDirectory);
        shell.rm('-rf', tempDir);
        shell.cd(name);


        const fakeLongPath = '/a/b/c/d/e/f/g/h/i/j/k/l/m/n/o/p';
        const closestPkgJson = []
            .concat(glob(join(currentDirectory, name, '**', 'package.json')))
            .reduce((shortest, current) => {
                return current.split(sep).length < shortest.split(sep).length ? current : shortest;
            }, fakeLongPath); // long string for kicks

        if (closestPkgJson === fakeLongPath) {
            console.log('No package.json file found');
        } else if (closestPkgJson) {
            // Read and update package.json
            const pkgPath = closestPkgJson;
            const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
            if (pkg.scripts) {
                ['locks:remove', 'locks:create', 'locks'].forEach(script => delete pkg.scripts[script]);
            }
            if (pkg.devDependencies) {
                delete pkg.devDependencies['generate-lockfile'];
            }
            fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

            // Change to package directory and run yarn if necessary
            const pkgDir = dirname(pkgPath);
            shell.cd(pkgDir);
            if (argv.install) {
                shell.exec('yarn');
            }

            // Build the command based on the presence of results and package.json
            const relPath = relative(currentDirectory, pkgDir);
            let cmd = `cd ./${relPath}`;
            if (!hasResults) {
                cmd += ' && yarn dev';
            }
            console.log(motd(cmd, argv.printCmd));

        } else {
            console.log('No package.json file found');
            console.log(motd(`cd ${name}`, argv.printCmd));
        }

        // Change back to the original directory
        shell.cd(currentDirectory);

    };
};
