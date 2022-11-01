#!/usr/bin/env node
import pkg from '../package.json';
import { cli } from './cli';
import * as shell from 'shelljs';

var argv = require('minimist')(process.argv.slice(2));

(async () => {
    if (argv._.includes('version')
        || (argv.hasOwnProperty('version') && argv.version)
        || (argv.hasOwnProperty('v') && argv.v)
    ) {
        console.log(pkg.version)
    } else if (argv._.includes('upgrade')
        || (argv.hasOwnProperty('upgrade') && argv.upgrade)
    ) {
        shell.exec(`npm install -g create-cosmos-app@latest`);
    } else {
        await cli(argv);
    }
})();
