'use strict';
var test = require('ava');
var assert = require('assert');
var hello = require('./');

test('hello', function (t) {
	t.plan(1);
	t.assert(typeof hello.random() === 'string');
});
