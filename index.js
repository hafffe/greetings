'use strict';
const greetings = require('./greetings.json');
const uniqueRandomArray = require('unique-random-array');

exports.all = greetings;
exports.random = uniqueRandomArray(greetings);
