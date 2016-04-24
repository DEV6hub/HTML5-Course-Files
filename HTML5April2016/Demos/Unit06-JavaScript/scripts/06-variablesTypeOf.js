// Show types of various objects

console.log('Number');
console.log('---------');
console.log('typeof (37): ' + (typeof (37)));
console.log('typeof (3.14): ' + (typeof (3.14)));
console.log('typeof (Math.LN2): ' + (typeof (Math.LN2)));
console.log('typeof (Infinity): ' + (typeof (Infinity)));
console.log('typeof (NaN): ' + (typeof (NaN)));
console.log('despite not Not-A-Number');
console.log('typeof Number(1): ' + (typeof Number(1)));
console.log('---------');

console.log('Strings');
console.log('---------');
console.log('typeof (""): ' + (typeof ("")));
console.log('typeof ("bla"): ' + (typeof ("bla")));
console.log('typeof (typeof 1): ' + (typeof (typeof 1)));
console.log('typeof ("abc"): ' + (typeof ("abc")));
console.log('---------');

console.log('Booleans');
console.log('---------');
console.log('typeof (true): ' + (typeof (true)));
console.log('typeof (false): ' + (typeof (false)));
console.log('typeof Boolean(true): ' + (typeof Boolean(true)));
console.log('---------');

console.log('Symbols');
console.log('---------');
console.log('typeof (Symbol()): ' + (typeof (Symbol())));
console.log('typeof (Symbol(foo)): ' + (typeof (Symbol('foo'))));
console.log('typeof (Symbol.iterator): ' + (typeof (Symbol.iterator)));
console.log('---------');

console.log('Objects');
console.log('---------');
console.log('typeof ({a:1}): ' + (typeof ({
  a: 1
})));
console.log('---------');
console.log('typeof ([1,2,4]): ' + (typeof ([1, 2, 4])));
console.log('---------');
console.log('typeof (new Date()): ' + (typeof (new Date())));
console.log('---------');

console.log('Null and Undefined');
console.log('---------');
console.log('typeof (null): ' + (typeof (null)));
console.log('typeof (undefined): ' + (typeof (undefined)));
console.log('---------');
console.log('How to test an Array?');
//        // Polyfill - in case not using ECMAScript 5:
if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) == '[object Array]';
  };
}
console.log(Array.isArray([]));
console.log(Array.isArray({}));