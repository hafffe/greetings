#!/usr/bin/env node
'use strict';
var meow = require('meow');
var greetings = require('./');
var chalk = require('chalk');

var cli = meow({
	help: [
		'Usage',
		'  $ greetings [input]',
		'',
		'Examples',
		'  $ greetings',
		'  Hello',
		'',
		'  $ greetings -- all',
		'  Hello',
		'  Howdy',
		'',
		'Options',
		'  --all  Get all greetings instead of a random'
	]
});

console.log(cli.flags.all ? chalk.blue(greetings.all.join('\n')) : chalk.green(greetings.random()));
