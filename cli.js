#!/usr/bin/env node
'use strict';
var meow = require('meow');
var greetings = require('./');

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

console.log(cli.flags.all ? greetings.all.join('\n') : greetings.random());
//console.log(hello(cli.input[0] || 'unicorns'));
