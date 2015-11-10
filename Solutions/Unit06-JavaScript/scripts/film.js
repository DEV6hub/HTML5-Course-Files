var film = {
    director: "Alfred Hitchcock",
    data :[
    {title:'North By Nothwest', year:1959},
    {title:'To Catch a Thief', year:1955},
    {title:'The Birds', year:1963},
    ],
    consoleFunction: function(){
        var theFilmObject = this;
        this.data.forEach (function (movie){
            console.log(movie.title + " is a film directed by " + theFilmObject.director);
        });
    }
};
film.consoleFunction();