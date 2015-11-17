var app = {};

$(document).ready(function () {
    $('#getLocationButton').click(function () {
        app.getLocation();
    });
});

app.getLocation = function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(app.success, app.error);
    } else {
        alert('Geolocation is not supported on your client.');
    }
};

app.success = function (position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var url = 'http://maps.google.com/maps?q=' + latitude + ',' + longitude;
    window.location = url;
};

app.error = function (message) {
    alert('Error getting Geolocation.');
};