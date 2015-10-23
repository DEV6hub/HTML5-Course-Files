APP.utils = (function () {
    'use strict';

    var pub = {};

    var userName = 'Barney';
    var userStatus = 'Administrator';

    pub.getUser = function () {
        return userName + ' is of type: ' + userStatus;
    };

//	with(this) {
//	}

    return pub;

}());
