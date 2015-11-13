var director = "Alfred Hitchcock";
var data = [
    {"title":'North By Nothwest', "year":1959},
    {"title":'To Catch a Thief', "year":1955},
    {"title":'The Birds', "year":1963}
    ];
var consoleFunction = function(){
    data.forEach (function (movie){
        console.log(movie.title + " is a film directed by " + director);
    });
};
var listFunction = function(){
    document.getElementById("first").innerHTML = data[0].title + " (" + data[0].year + ") " + " was directed by " + director;
    document.getElementById("second").innerHTML = data[1].title + " (" + data[1].year + ") " + " was directed by " + director;
    document.getElementById("third").innerHTML = data[2].title + " (" + data[2].year + ") " + " was directed by " + director;
};

listFunction();
consoleFunction();
