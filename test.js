import test from 'ava';
import fn from './';

test.cb('should return an array', t => {
	t.is(Array.isArray(fn.all), true);
	t.end();
});

test.cb('should return a random string from the list', t => {
	t.is(typeof fn(), 'string');
	t.is(fn.all.indexOf(fn()) !== -1, true);
	t.end();
});
