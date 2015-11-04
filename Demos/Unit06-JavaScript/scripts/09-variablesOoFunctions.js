    var Person = function () {
            this.firstName = '';
            this.lastName = '';

            var age = 32;

            this.getAge = function () {
                return 'Private age: ' + age;
            };

            this.getName = function () {
                return 'Expensive function: ' + this.firstName + ' ' + this.lastName +
                '\n*** Move it to the prototype object!***';
            };
            // "return this;" is implied
        };

//        Person.prototype.getName = function () {
//            return 'EFFICIENT function: ' + this.firstName + ' ' + this.lastName;
//        };

var person1 = new Person();
person1.firstName = 'Betty';
person1.lastName = 'Rubble';

var person2 = new Person();
person2.firstName = 'Wilma';

console.log('person1 === person2 ? ' + (person1 === person2));

console.log('--------------------');
console.log('person1: ');
console.log(person1);

console.log('--------------------');
console.log('person2: ');
console.log(person2);

console.log('--------------------');
console.log('person1.getName(): ' + person1.getName());
console.log('person1.age: ' + person1.age);
console.log('person1.getAge(): ' + person1.getAge());