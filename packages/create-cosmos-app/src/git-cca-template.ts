import * as shell from 'shelljs';
import * as c from 'ansi-colors';
import { prompt } from './prompt';
import { join, dirname } from 'path';
import { sync as mkdirp } from 'mkdirp';
import { tmpdir } from 'os'
import { sync as glob } from 'glob';
import * as fs from 'fs';

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

        let folderName: 'templates' | 'examples' = 'templates';
        if (argv.examples || argv.example || argv.ex) {
            folderName = 'examples';
        }
        const tempname = Math.random().toString(36).slice(2, 7);
        const dir = join(argv.tmpdir || tmpdir(), tempname);
        mkdirp(dir);
        const currentDirecotry = process.cwd();
        shell.cd(dir);
        shell.exec(`git clone --depth 1 ${repo} ${name}`);
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
        shell.cd(currentDirecotry);

        const cmd = `cd ./${name} && yarn dev`;

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
