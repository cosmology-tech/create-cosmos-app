#!/usr/bin/env node
import { cli } from './cli';
import pkg from '../package.json';
var argv = require('minimist')(process.argv.slice(2));

(async () => {
    if (argv._.includes('version')
        || (argv.hasOwnProperty('version') && argv.version)
        || (argv.hasOwnProperty('v') && argv.v)
    ) {
        console.log(pkg.version);
    } else {
        await cli(argv);
    }
})();
