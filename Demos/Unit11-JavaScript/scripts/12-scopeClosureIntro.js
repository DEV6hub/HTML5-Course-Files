var getCounter = function () {
// First-class Object
var i = 0;
// Acts as a private, instance variable
return function () {
// Anonynmous function
    i += 1;
    console.log(i);
    };
};
var counter = getCounter();