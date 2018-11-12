var foo = require('../src').foo;
var assert = require('console').assert;

assert(foo === 'bar', 'Foo should be bar');