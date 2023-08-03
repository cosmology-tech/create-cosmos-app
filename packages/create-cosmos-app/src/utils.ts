import * as shell from 'shelljs';
import { prompt } from './prompt';
import { join } from 'path';
import { sync as mkdirp } from 'mkdirp';
import { tmpdir } from 'os'
import * as fs from 'fs';
const dargs = require('dargs');


type TemplateFolder = 'templates' | 'boilerplates' | 'examples';

export const getTemplateFolder = async (argv) => {

    let folderName: TemplateFolder = 'templates';

    // get example info
    if (argv.examples || argv.example || argv.ex) {
        folderName = 'examples';
        const example = argv.examples || argv.example || argv.ex;
        if (typeof example === 'string') {
            argv.template = example;
        }
    }

    // get boilerplate info
    if (argv.boilerplates || argv.boilerplate) {
        folderName = 'boilerplates';
        const boilerplate = argv.boilerplates || argv.boilerplate;
        if (typeof boilerplate === 'string') {
            argv.template = boilerplate;
        }
    }

    return folderName;
}

export const cloneRepo = (argv, repo, name, folderName) => {
    const tempDirPath = argv.tmpdir || tmpdir();
    const tempDirName = Math.random().toString(36).slice(2, 7);

    const baseDirPath = join(tempDirPath, tempDirName);
    mkdirp(baseDirPath);

    shell.cd(baseDirPath);
    shell.exec(`git clone -n --depth=1 --filter=tree:0 ${repo} ${name}`, { silent: true });

    shell.cd(name);
    const list = shell.exec(`git ls-tree -r --name-only HEAD ${folderName}`, { silent: true });

    const lsMap = {};
    (list?.split('\n')).forEach(path => {
        if (path.startsWith(`${folderName}/`)) {
            const tokens = path.split('/');
            if (tokens[1]) {
                lsMap[tokens[1]] = true;
            }
        }
    })

    return {
        dir: baseDirPath,
        repoDir: join(baseDirPath, name),
        templateList: Object.keys(lsMap)
    };
}

export const cloneTemplate = (folderName, template) => {
    const targetTemplatePath = join(folderName, template);
    const cmd = [
        'git config core.sparsecheckout true',
        `git sparse-checkout set --no-cone ${targetTemplatePath}`,
        'git read-tree -mu HEAD',
    ]
    shell.exec(cmd.join(' && '));
}

export const getQuestionsAndAnswers = async (
    argv,
    name,
    folderName: TemplateFolder
) => {
    const path = join(folderName, argv.template, '.questions.json')
    if (fs.existsSync(path)) {
        const questions = JSON.parse(fs.readFileSync(path, 'utf-8'));

        const fullname = shell
            .exec('git config --global user.name', { silent: true })
            .trim();
        const email = shell
            .exec('git config --global user.email', { silent: true })
            .trim();

        // @__USERNAME__/__MODULENAME__
        // __PACKAGE_IDENTIFIER__
        const args = dargs(
            {
                _: [],
                ...argv,
                __QUESTIONS_EXIST_: true,
                __MODULENAME__: name,
                __USERFULLNAME__: fullname,
                __USEREMAIL__: email,
            },
            { allowCamelCase: true }
        );

        const results = await prompt(questions, args);
        return results;
    } else {
        return {};
    }
}

export const getPackageLicAndAccessInfo = async (results) => {
    let scopedResults;

    const license = await prompt(
        [
            {
                name: '__LICENSE__',
                message: 'Which license?',
                choices: ['MIT', 'closed'],
                type: 'list',
                required: true,
            },
        ],
        []
    );

    if (results.__ACCESS__ === 'public') {
        scopedResults = await prompt(
            [
                {
                    type: 'confirm',
                    name: 'scoped',
                    message: 'use npm scopes?',
                    required: true,
                },
            ],
            []
        );
    }
    return {
        license,
        scopedResults
    };
}

