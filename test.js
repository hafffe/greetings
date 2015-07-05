'use strict';
var test = require('ava');
var greeting = require('./');

test(function (t) {
	t.assert(greeting.all.length > 0);
	t.assert(greeting.all.indexOf('Howdy') !== -1);
	t.assert(greeting.random());
	t.end();
});
