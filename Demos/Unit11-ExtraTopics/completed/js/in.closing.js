com.newyyz.myApp.other = function () {

    var pub = {};

    pub.publicProperty = 'I\'m a public property of com.newyyz.myApp.other.';

    var hiddenProperty = 'I\'m a hidden property in com.newyyz.myApp.other.';

    pub.getHiddenProperty = function () {
        return hiddenProperty;
    };

    return pub;

}();
