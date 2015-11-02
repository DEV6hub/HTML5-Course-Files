   window.addEventListener("load", updateTable, false);

   function updateTable() {
    var tbody = document.getElementById("output");
    while (tbody.getElementsByTagName("tr").length > 0) {
        tbody.deleteRow(0);
    }
    var row;
    if (sessionStorage.length == 0) {
        row = tbody.insertRow(i);
        row = tbody.insertRow(0);
        cell = row.insertCell(0);
        cell.colSpan = "4";
        cell.innerHTML = "Nothing to Show";
    }
    for (var i = 0; i < sessionStorage.length; ++i) {
        row = tbody.insertRow(i);
        cell = row.insertCell(0);
        cell.innerHTML = i;
        cell = row.insertCell(1);
        cell.innerHTML = sessionStorage.key(i);
        cell = row.insertCell(2);
        cell.innerHTML = sessionStorage.getItem(sessionStorage.key(i));
        cell = row.insertCell(3);
        cell.innerHTML = "<img src='Images/delete.png' onclick='deleteItem(\"" + sessionStorage.key(i) + "\")'>";
    }
}

function deleteItem(key) {
    if (!confirm("Are you sure you want to delete this item?")) return;
    sessionStorage.removeItem(key);
    updateTable();
}

function clearStorage() {
    if (!confirm("Are you sure you want to delete all session storage for this domain?")) return;
    sessionStorage.clear();
    updateTable();
}


function save() {
    var key = document.getElementById("key").value;
    var value = document.getElementById("value").value;
    sessionStorage.setItem(key, value);
    updateTable();
}