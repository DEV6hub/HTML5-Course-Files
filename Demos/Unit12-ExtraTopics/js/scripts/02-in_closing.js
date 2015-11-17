var com = {};
com.newyyz = {};
com.newyyz.myApp = {}; // Put all functions and other objects under this object
com.newyyz.myApp.main = {};
com.newyyz.myApp.main.property = 'One million dollars!';

com.newyyz.myApp.main.testFunction = function () {
    alert('Hello from com.newyyz.myApp.main.testFunction()!\n\nThe property value is: ' + com.newyyz.myApp.main.property);
};

com.newyyz.myApp.other = function () {
    var pub = {};
    pub.publicProperty = 'I\'m a public property of com.newyyz.myApp.other.';
    var hiddenProperty = 'I\'m a hidden property in com.newyyz.myApp.other.';
    pub.getHiddenProperty = function () {
        return hiddenProperty;
    };
    return pub;
}();

$(document).ready(function () {
    $('#testButton1').click(function () {
        com.newyyz.myApp.main.testFunction();
    });
    $('#testButton2').click(function () {
        alert('Hidden property: ' + com.newyyz.myApp.other.getHiddenProperty());
    });
    $('#testButton3').click(function () {
        alert('Public property: ' + com.newyyz.myApp.other.publicProperty);
    });
});