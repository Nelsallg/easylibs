'use strict';

const processBackend = require('..');
const assert = require('assert').strict;

assert.strictEqual(processBackend(), 'Hello from processBackend');
console.info('processBackend tests passed');
