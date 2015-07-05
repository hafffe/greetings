'use strict';
const hello = require('./hello.json');
const uniqueRandomArray = require('unique-random-array');

exports.random = uniqueRandomArray(hello);
