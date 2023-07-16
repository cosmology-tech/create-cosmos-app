import * as shell from 'shelljs';
import * as c from 'ansi-colors';
import { prompt } from './prompt';
import { join, dirname } from 'path';
import { sync as mkdirp } from 'mkdirp';
import { tmpdir } from 'os'
import { sync as glob } from 'glob';
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

export const cloneRepo = (argv, repo, name, folderName: TemplateFolder) => {
    const tempname = Math.random().toString(36).slice(2, 7);
    const dir = join(argv.tmpdir || tmpdir(), tempname);
    mkdirp(dir);
    const currentDirectory = process.cwd();
    shell.cd(dir);
    shell.exec(`git clone --depth 1 ${repo} ${name}`);
    return dir;
}

export const getQuestionsAndAnswers = async (argv) => {
    try {
        const questions = JSON.parse(fs.readFileSync(`.questions.json`, 'utf-8'));

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
    } catch (e) {
        return {}
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