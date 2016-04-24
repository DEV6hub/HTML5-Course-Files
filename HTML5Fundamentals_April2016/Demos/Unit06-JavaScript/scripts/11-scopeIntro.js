var i = 1,
  myFunction, j;

myFunction = function () {
  // This function has its own scope
  var i = 99;
  console.log('Inside the function, i = ' + i);
};
console.log('After the function, i = ' + i);

j = 2;
for (; i < 20; i += 1) {
  // This block does not have its own scope
  var j = 33;
}
console.log('After the loop, j = ' + j + ' and i = ' + i);