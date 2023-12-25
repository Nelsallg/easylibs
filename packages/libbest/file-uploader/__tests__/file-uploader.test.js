'use strict';

const fileUploader = require('..');
const assert = require('assert').strict;

assert.strictEqual(fileUploader(), 'Hello from fileUploader');
console.info('fileUploader tests passed');
