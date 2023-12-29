'use strict';

const processBackend = require('../dist/@types/flash');
const assert = require('assert').strict;

assert.strictEqual(processBackend(), 'Hello from processBackend');
console.info('processBackend tests passed');
