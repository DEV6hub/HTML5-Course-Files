var APP = {
    name : 'My Application',
    version : 1,
    main : null,
    utils : null
};

APP.main = (function () {
    'use strict';
    var pub = {};

    console.log('Inside app.main()');

    pub.message = 'Initialized app.main';

    return pub;
}());
