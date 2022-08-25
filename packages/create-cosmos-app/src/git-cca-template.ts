import * as shell from 'shelljs';
import { prompt } from './prompt';
import { join, dirname } from 'path';
import { sync as mkdirp } from 'mkdirp';
import { tmpdir } from 'os'
const dargs = require('dargs');
const glob = require('glob').sync;
const fs = require('fs');
const path = require('path');

export const createApp = (repo: string) => {
    return async argv => {
        const { name } = await prompt([
            {
                name: 'name',
                message: 'Enter your new module name',
                required: true,
            }
        ], argv);

        if (!shell.which('git')) {
            shell.echo('Sorry, this script requires git');
            return shell.exit(1);
        }

        let folderName: 'templates' | 'examples' = 'templates';
        if (argv.examples) {
            folderName = 'examples';
        }

        const tempname = Math.random().toString(36).slice(2, 7);
        const dir = join(argv.tmpdir || tmpdir(), tempname);
        mkdirp(dir);
        const currentDirecotry = process.cwd();
        shell.cd(dir);
        shell.exec(`git clone ${repo} ${name}`);
        shell.cd(name);
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

        const files = []
            .concat(glob(join(process.cwd(), folderName, template, '/**/.*')))
            .concat(glob(join(process.cwd(), folderName, template, '/**/*')));

        for (let i = 0; i < files.length; i++) {
            const templateFile = files[i];
            if (fs.lstatSync(templateFile).isDirectory()) continue;

            let content = fs.readFileSync(templateFile).toString();

            const localfile = templateFile.split(`${folderName}/` + template)[1];
            const localdir = dirname(localfile);
            const dirpath = join(currentDirecotry, name, localdir);
            const filepath = join(currentDirecotry, name, localfile);

            mkdirp(dirpath);
            fs.writeFileSync(filepath, content);

        }
        shell.cd(currentDirecotry);
        shell.rm('-rf', dir);
        console.log(`
        
                 |              _   _
     ===         |.===.        '\\-//\`    
    (o o)        {}o o{}        (o o)     
ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-

✨ Have fun! Now you can start on your project ⚛️

cd ./${name} && yarn && yarn dev
      `);
    };
};
