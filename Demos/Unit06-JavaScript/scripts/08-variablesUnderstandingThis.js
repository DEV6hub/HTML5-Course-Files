var APP = {},
expressionFunction,
that
;

console.log('this: ');
console.log(this);

function statementFunction() {
    console.log('this: ');
    console.log(this);
}
statementFunction();

expressionFunction = function () {
    console.log('this: ');
    console.log(this);
}();

APP.utils = {
    appTitle : 'My Grand Application',
    appFunction : function () {
        console.log('this: ');
        console.log(this);
        return this.appTitle;
    }
};
APP.utils.appFunction();

// Embedded functions bug
APP.embeddedFunctions = {
    function1 : function () {
        console.log(this);
        var function2 = function () {
console.log(this);      //ECMAScript 3 bug: logs window, and will do so from this point on
var function3 = function () {
    console.log(this);
}();
}();
}
};
APP.embeddedFunctions.function1();

// Embedded functions bug - fixed!
APP.embeddedFunctionsFixed = {
    function1 : function () {
        that = this;
        console.log(this);
        var function2 = function () {
console.log(that);          // Use 'that' instead!
var function3 = function () {
console.log(that);      // Here too!
}();
}();
}
};
APP.embeddedFunctionsFixed.function1();

// Applying a function allows you to set the value of 'this' inside the function
APP.myAppliedFunction = function () {
    console.log('APP.myAppliedFunction: this: ');
    console.log(this);
};
APP.myAppliedFunction.apply(null);
APP.myAppliedFunction.apply(that);
APP.myAppliedFunction.apply(APP);
APP.myAppliedFunction.apply({});
