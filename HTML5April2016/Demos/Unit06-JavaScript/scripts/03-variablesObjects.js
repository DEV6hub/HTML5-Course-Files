// Hoist all variable declarations to the top; the browser will do this regardless.
var animal,
  person,
  superbaby,
  makeSuperBaby,
  removeSuperPowers,
  getInfo,
  show;

// Object - verbose
animal = new Object();
animal.name = 'Cougar';
animal.color = 'brown';

//  Block 1: Object - literal
person = {
  firstName: 'Fred',
  lastName: 'Flintstone'
};

//  Block 2: Object - create: Object.create(proto [, propertiesObject ])
makeSuperBaby = function () {
  superbaby = Object.create(person);
  Object.defineProperty(superbaby,
    "hasSuperPowers", {
      value: true,
      writable: true, // allows assignment
      enumerable: true, // shows up in for...in loop
      configurable: true // property can be deleted (using "delete" syntax")
    }
  );
  console.log(superbaby); // note the __proto__ object

  superbaby.firstName = 'Pebbles';
  console.log('Super Baby name: ' + superbaby.firstName + ' ' + superbaby.lastName);
  console.log('Super powers? ' + (superbaby.hasSuperPowers ? 'You bet!' : 'No way!'));
};

//  Block 3: delete obj.property
removeSuperPowers = function () {
  delete superbaby['hasSuperPowers'];
  console.log(superbaby);
  console.log('Super powers? ' + (superbaby.hasSuperPowers ? 'You bet!' : 'No way!'));
};

//  Block 4: add a function to the prototype object
Object.prototype.getObjectInfo = function () {
  return 'I created this object!';
};
getInfo = function (obj) {
  console.log(obj.getObjectInfo());
};


show = function (value) {
  console.log(value);
};