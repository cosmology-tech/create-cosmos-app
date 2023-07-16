import * as shell from 'shelljs';
import * as c from 'ansi-colors';
import { prompt } from './prompt';
import { join, dirname, basename } from 'path';
import { sync as mkdirp } from 'mkdirp';
import { sync as glob } from 'glob';
import * as fs from 'fs';
import { cloneRepo, getPackageLicAndAccessInfo, getQuestionsAndAnswers, getTemplateFolder } from './utils';

export const createGitApp = (repo: string) => {
    return async argv => {
        if (!shell.which('git')) {
            shell.echo('Sorry, this script requires git');
            return shell.exit(1);
        }
        if (!shell.which('yarn')) {
            shell.echo('Sorry, this script requires yarn');
            return shell.exit(1);
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
        const dir = cloneRepo(argv, repo, name);

        // cd into the cloned repo from $dir
        shell.cd(name);

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
        shell.rm('-rf', dir);
        shell.cd(`./${name}`);

        // clean up lock-file business...
        const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
        delete pkg.scripts['locks:remove']
        delete pkg.scripts['locks:create']
        delete pkg.scripts['locks']
        delete pkg.devDependencies['generate-lockfile']
        fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2));

        // now yarn...
        shell.exec(`yarn`);
        shell.cd(currentDirectory);

        let cmd = `cd ./${name}`;
        if (!hasResults) {
            cmd += ' && yarn dev';
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
