'use strict';

const dataTransformer = require('../lib/transformerest');
const assert = require('assert').strict;

assert.strictEqual(dataTransformer(), 'Hello from dataTransformer');
console.info('dataTransformer tests passed');
