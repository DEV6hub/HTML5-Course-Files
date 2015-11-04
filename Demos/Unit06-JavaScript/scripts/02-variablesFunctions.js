var expressionFunction,
utils,
myAppliedFunction;

function statementFunction() {
    console.log('statementFunction - ahhh, the good old days;)');
}
statementFunction();

// Block 1: Expression function
       expressionFunction = function (message) {
           alert(message);
       };
       expressionFunction('expressionFunction');

// Block 2: Anonymous immediate function
       (function (message) {
           console.log(message);
       }('anonymous immediate function'));

// Block 3: Object function
       utils = {
           appTitle : 'My Grand Application',
           appFunction : function () {
               console.log('appFunction');
           }
       };
       utils.appFunction();

// Block 4: Applied function
       myAppliedFunction = function () {
           console.log('myAppliedFunction');
       };
       myAppliedFunction.apply();
       myAppliedFunction.call();
