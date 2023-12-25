'use strict';

const dataTransformer = require('..');
const assert = require('assert').strict;

assert.strictEqual(dataTransformer(), 'Hello from dataTransformer');
console.info('dataTransformer tests passed');
