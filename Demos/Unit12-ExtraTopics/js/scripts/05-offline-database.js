 var app = {};
    app.database = null;

    $(document).ready(function () {

        app.database = app.getDatabase();

        $('#createDBButton').click(function () {
            if (app.database) {
                alert('Got database!');
            }
        });
        $('#createTableButton').click(function () {
            app.createTable(app.database);
        });
        $('#populateTableButton').click(function () {
            app.populateTable(app.database);
        });
        $('#getFirstRecordButton').click(function () {
            app.getFirstRecord(app.database);
        });
    });

    app.getDatabase = function () {
            var database = window.openDatabase('locations', '1.0', 'description', 5 * 1024 * 1024); // 5MB
            if (!database) {
                alert('Database connection failed.');
            }
            return database;
        };

        app.createTable = function (database) {

            var createSQL = 'CREATE TABLE location ( '
                + 'location_ID INTEGER PRIMARY KEY NOT NULL, '
                + 'name VARCHAR, ' + 'description TEXT, '
                + 'latitude NUMERIC NOT NULL, '
                + 'longitude NUMERIC NOT NULL, '
                + 'horizontalAccuracy NUMERIC NOT NULL DEFAULT (0), '
                + 'addDate DATETIME DEFAULT CURRENT_TIMESTAMP ' + ');';


database.transaction(function (tx) {
    tx.executeSql(createSQL, [], function (tx, result) {
        alert('Created table!');
    }, function (tx, error) {
        alert('Error creating location table:\n' + error.message);
    });
});

};

app.populateTable = function (database) {

    var currentTimeMillis = new Date().getTime();

    var populateSQL = "INSERT INTO 'location' "
    + "SELECT '1' AS 'location_ID', "
    + " 'Mississauga, ON, CA' AS 'name', "
    + " 'Where the fun begins' AS 'description', "
    + " '43.5972036' AS 'latitude', "
    + " '-79.636378' AS 'longitude', "
    + " '0' AS horizontalAccuracy, '" + currentTimeMillis + "' AS 'addDate' "
    + "UNION SELECT '2', 'Bermuda', 'Grotto Bay Beach Resort', '32.352939', '-64.712541', '1', '" + currentTimeMillis + "' "
    + "UNION SELECT '3', 'London, UK', 'Looks like rain...', '51.500148', '-0.126313', '10', '" + currentTimeMillis + "' "
    + "UNION SELECT '4', 'Paris, France', 'A nice place to spend the summer.', '48.858399', '2.294198', '20', '" + currentTimeMillis + "' "
    + "UNION SELECT '5', 'Waterloo, ON, CA', 'Home of the PlayBook', '43.480951', '-80.536115', '30', '" + currentTimeMillis + "'";

    database.transaction(function (tx) {
        tx.executeSql(populateSQL, [], function (tx, result) {
            alert('Added records!');
        }, function (tx, error) {
            alert('Error adding records:\n' + error.message);
        });
    });
};

app.getFirstRecord = function (database) {
    var selectSQL = 'SELECT * FROM location';

    database.transaction(function (tx) {
        tx.executeSql(selectSQL, [], function (tx, result) {
            var rows = result.rows;
            var location = rows.item(0);
            $('#record').html('Location: ' + location.name);

        }, function (tx, error) {
            alert('Error getting records:\n' + error.message);
        });
    });
};


limit = !!parameters.limit ? parseInt(parameters.limit) : 20,
data = Posts.find({}, {limit: limit, fields: {title: 1, author: 1, url: 1, submitted: 1, }}).fetch();

