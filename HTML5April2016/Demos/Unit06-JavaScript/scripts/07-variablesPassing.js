var obj,
  a,
  b,
  startValue,
  x,
  valueChanger,
  propertyChanger;

// Assignments are by reference
obj = {};
a = obj;
b = obj;
console.log('Does a === b ? ' + (a === b));
console.log('------------------------');

// Block 1: Simple types are passed by value
startValue = 'Original value';
valueChanger = function (value) {
  return 'NEW value';
};
valueChanger(startValue);
console.log('After the function call, startValue is: ' + startValue);
console.log('------------------------');

// Block 2:
x = {
  name: 'value',
  inner: {
    variable: 'hey'
  }
};
propertyChanger = function (o) {
  o.name = 'CHANGED VALUE!';
  console.log('Does o === x ? ' + (o === x));
};
propertyChanger(x);
console.log('x.name is: ' + x.name);