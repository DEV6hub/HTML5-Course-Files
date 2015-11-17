var app = {};
app.property = 'I\'m a simple property of the app object.';

var person = {
    firstName : 'Joe',
    lastName : 'Shmoe',
    whoAreYou : function () {
        return this.firstName + ' ' + this.lastName;
    }
}

function Person(firstName) {
    this.firstName = firstName;
    this.toString = function () {
        return 'Your name is ' + this.firstName;
    };
}

$(document).ready(function () {
    $('#testButton1').click(function () {
        alert(person.whoAreYou());
    });
    $('#testButton2').click(function () {
        var me = new Person('Fred');
        alert(me.toString());
    });
    $('#testButton4').click(function () {
        alert(this);  // The button input element
    });
});

function testThis(obj) {
    alert(obj); // Put a breakpoint here in Chrome and inspect this (DOM window) and obj (the button input)
}