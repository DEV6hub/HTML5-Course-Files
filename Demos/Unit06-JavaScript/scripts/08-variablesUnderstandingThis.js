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


// console.log('----------------');
// //Block 6
// // Applying a function allows you to set the value of 'this' inside the function
// APP.myAppliedFunction = function () {
//     console.log('APP.myAppliedFunction: this: ');
//     console.log(this);
// };
// APP.myAppliedFunction.apply(null);
// console.log('----------------');
// APP.myAppliedFunction.apply(that);
// console.log('----------------');
// APP.myAppliedFunction.apply(APP);
// console.log('----------------');
// APP.myAppliedFunction.apply({});
// console.log('----------------');