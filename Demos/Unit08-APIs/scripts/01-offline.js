window.addEventListener("load", function () {
    document.getElementsByTagName("h1")[0].innerHTML = "Hello World";
}, false);

var appCache = window.applicationCache;

appCache.addEventListener("error", function () {
    alert("Cache failed to update");
    document.getElementById("output").innerHTML += "<li>a cache error has occurred</li>";
}, false);

appCache.addEventListener("updateready", function () {
    var refresh = confirm("An updated version is ready.  Press OK refresh your browser.");
    if (refresh) {
        location.reload();
    }
    document.getElementById("output").innerHTML += "<li>cache ready to be updated</li>";
}, false);

appCache.addEventListener("cached", function () {
    document.getElementById("output").innerHTML += "<li>application cached</li>";
}, false);

appCache.addEventListener("checking", function () {
    document.getElementById("output").innerHTML += "<li>checking cache</li>";
}, false);

appCache.addEventListener("downloading", function () {
    document.getElementById("output").innerHTML += "<li>cache downloading</li>";
}, false);

appCache.addEventListener("noupdate", function () {
    document.getElementById("output").innerHTML += "<li>no cache update</li>";
}, false);

appCache.addEventListener("obsolete", function () {
    document.getElementById("output").innerHTML += "<li>manifest file returned a 404 or 410</li>";
}, false);

appCache.addEventListener("progress", function () {
    document.getElementById("output").innerHTML += "<li>Resource being fetched from cache</li>";
}, false);
