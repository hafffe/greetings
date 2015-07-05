#!/usr/bin/env node
'use strict';
var meow = require('meow');
var hello = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ hello [input]',
		'',
		'Examples',
		'  $ hello',
		'  unicorns & rainbows',
		'',
		'  $ hello ponies',
		'  ponies & rainbows',
		'',
		'Options',
		'  --foo  Lorem ipsum. Default: false'
	]
});

console.log(cli.input[0]);
//console.log(hello(cli.input[0] || 'unicorns'));
