'use strict';
var uniqueRandomArray = require('unique-random-array');
var greetings = require('./greetings.json');

module.exports = uniqueRandomArray(greetings);
module.exports.all = greetings;
