'use strict';
var greetings = require('./greetings.json');
var uniqueRandomArray = require('unique-random-array');

exports.all = greetings;
exports.random = uniqueRandomArray(greetings);
