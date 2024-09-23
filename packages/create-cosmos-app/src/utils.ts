import * as shell from 'shelljs';
import { prompt } from './prompt';
import { join } from 'path';
import { sync as mkdirp } from 'mkdirp';
import { tmpdir } from 'os'
import { sync as globSync } from 'glob';
import * as fs from 'fs';

const posixPath = require('path').posix;
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

export const cloneRepo = (argv, repo, name) => {
    const tempname = Math.random().toString(36).slice(2, 7);
    const dir = join(argv.tmpdir || tmpdir(), tempname);
    mkdirp(dir);
    shell.cd(dir);

    // Initialize the command arguments in an array
    let gitCloneArgs = ['git', 'clone', '--depth', '1'];

    // Add the branch argument if argv.fromBranch is provided
    if (argv.fromBranch) {
        gitCloneArgs.push('-b', argv.fromBranch);
    }

    // Add the repository and name arguments
    gitCloneArgs.push(repo, name);

    // Join the arguments with spaces to form the command
    const gitCloneCommand = gitCloneArgs.join(' ');

    shell.exec(gitCloneCommand);
    return dir;
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

/**
 * Replace all \\ to / for windows support purpose
 * @param input
 * @param options
 * @returns
 */
export const crossGlob = (input: string, options?: object) => {
    return globSync(toPosixPath(input), options);
}

/**
 * Unify all the path to posixPath for windows support purpose
 * @param mixedPath
 * @returns
 */
export const toPosixPath = (mixedPath): string => {
    return mixedPath.replace(/\\/g, posixPath.sep);
}
