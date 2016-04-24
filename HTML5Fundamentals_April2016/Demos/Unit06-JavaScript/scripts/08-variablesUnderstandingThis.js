var APP = {},
  expressionFunction;

// Block 1
console.log('this: ');
console.log(this);
console.log('----------------');

// Block 2
function statementFunction() {
  console.log('this: ');
  console.log(this);
}
statementFunction();
console.log('----------------');

//Block 3
expressionFunction = function () {
  console.log('this: ');
  console.log(this);
}();
console.log('----------------');

//Block 4
APP.utils = {
  appTitle: 'My Grand Application',
  appFunction: function () {
    console.log('this: ');
    console.log(this);
    return this.appTitle;
  }
};
APP.utils.appFunction();
console.log('----------------');