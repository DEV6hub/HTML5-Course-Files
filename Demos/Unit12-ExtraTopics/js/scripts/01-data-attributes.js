var app = {};

$(document).ready(function () {
    $('#getDataBrandButton').click(function () {
        app.getDataBrand();
    });
    $('#getDataModelButton').click(function () {
        app.getDataModel();
    });
});

app.getDataBrand = function () {
    var dataDiv = document.getElementById('dataDiv');
    alert(dataDiv.dataset.brand);
};
app.getDataModel = function () {
    var dataDiv = document.getElementById('dataDiv');
    alert(dataDiv.dataset.model);
};