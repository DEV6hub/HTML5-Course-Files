var app = {};
app.property = 'I\'m a simple property of the app object.';

var person = {
    firstName : 'Joe',
    lastName : 'Shmoe',
    whoAreYou : function () {
        return this.firstName + ' ' + this.lastName;
    }
}

function Person(firstName) {
    this.firstName = firstName;
    this.toString = function () {
        return 'Your name is ' + this.firstName;
    };
}



var filmWithSameLink = Films.findOne({title: filmAttributes.title, year: filmAttributes.year, director: filmAttributes.director});
if (filmWithSameLink) {
return {
    filmExists: true,
        _id: filmWithSameLink._id
    };
}


ownsDocument = function(userId, doc) {
    return doc && doc.userId === userId;
}


Films.allow({
    update: function(userId, film){return ownsDocument(userId, film);},
    remove: function(userId, film){return ownsDocument(userId, film);},
});



return Films.find({}, {sort: {submitted: -1}});


ownFilm: function() {
    return this.userId === Meteor.userId();
}


Errors = new Mongo.Collection(null);

throwError = function(message) {
    Errors.insert({message: message});
};


commentsCount: function() {
    return Comments.find({filmId: this._id}).count();
}




var requireLogin = function() {
    if (! Meteor.user()) {
        this.render('accessDenied');
    } else {
        this.next();
    }
}
Router.onBeforeAction(requireLogin, {only: 'filmSubmit'});

//

var requireLogin = function() {
    ...
Router.onBeforeAction(requireLogin, {only: 'filmSubmit'});
    
Films = new Mongo.Collection('films');

Meteor.methods({
    filmInsert: function(filmAttributes){
        check(Meteor.userId(), String);
        check(filmAttributes, {
            title: String,
            year: String,
            director: String,
            plot: String
        });
        var user = Meteor.user();
        var film = _.extend(filmAttributes, {
            userId: user._id,
            author: user.username,
            submitted: new Date()
        });
        var filmId = Films.insert(film);
        return {
            _id: filmId
        };
    }
});
    
    
  return throwError(error.reason);
    
    
Template.filmSubmit.onCreated(function(){
    Session.set('filmSubmitErrors', {});
});

   

Films.deny({
    update: function(userId, film, fieldNames, modifier){
        var errors = validateFilm(modifier.$set);
        return errors.title || errors.year || errors.director || errors.plot;
    }
}
 
    
    
//
Comments.insert({
    filmId: jawsId,
    userId: leo._id,
    author: leo.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: "This is one of my favourite films!"
});

Comments.insert({
    filmId: jawsId,
    userId: frank._id,
    author: frank.profile.name,
    submitted: new Date(now - 20 * 1200 * 20),
    body: "This film rocks!"
});
//
    
    

waitOn: function() {
           return [Meteor.subscribe('posts'), Meteor.subscribe('comments')];
}
    
Template.commentItem.helpers({
    submittedText: function() {
        return this.submitted.toDateString();
    }
});
  
    
    
    
    
    
  
    
Template.filmSubmit.helpers({
    errorMessage: function(field){
        return Session.get('filmSubmitErrors')[field];
    },
    errorClass: function(field){
        return !!Session.get('filmSubmitErrors')[field]?'has-error': '';
    }
});
   

    Meteor.call('filmInsert', {title: '', year: '1975'});
    

Meteor.methods({
    ...
    var errors = validateFilm(filmAttributes);
    if (errors.title || errors.year || errors.director || errors.plot)
    throw new Meteor.Error('invalid-film', 'You must set a title, year, director, and a short plot for your film to be added.');
    ...
});
    
    validateFilm = function(film){
        var errors = {};
        if (!film.title)
            errors.title = "Please fill in a title";
    };
 
var errors = validateFilm(film);
if (errors.title || errors.year || errors.director || errors.plot)
    return Session.set('filmSubmitErrors', errors);
    
    
Films.allow({
    insert: function(userId, doc){
        return !! userId;
    }
});

$(document).ready(function () {
    $('#testButton1').click(function () {
        alert(person.whoAreYou());
    });
    $('#testButton2').click(function () {
        var me = new Person('Fred');
        alert(me.toString());
    });
    $('#testButton4').click(function () {
        alert(this);  // The button input element
    });
});

function testThis(obj) {
    alert(obj); // Put a breakpoint here in Chrome and inspect this (DOM window) and obj (the button input)
}

Meteor.subscribe(‘films’);

Router.route('/api/posts/:_id', {
    where: 'server',
    name: 'apiPost',
    action: function() {
        var post = Posts.findOne(this.params._id);
        if(post){
            this.response.write(JSON.stringify(post));
        } else {
            this.response.writeHead(404, {'Content-Type': 'text/html'});
            this.response.write("Post not found.");
        }
        this.response.end();
    }
});

waitOn: function() {
    return Metor.subscribe(‘films’);
}

data: function() {
    return Posts.findOne(this.params._id);
}


<ul class="nav navbar-nav">
    <li><a href="{{pathFor 'filmSubmit'}}">add a film</a></li>
</ul>

Template.filmSubmit.events({
    'submit form': function(e){
        e.preventDefault();
        var film = {
            title: $(e.target).find('[name=title]').val(),
            year: $(e.target).find('[name=year]').val(),
            director: $(e.target).find('[name=director]').val(),
            plot: $(e.target).find('[name=plot]').val()
        };
        film._id = Film.insert(film);
        Router.go('filmPage', film);
    }
});


Films.update(currentFilmId, {$set: filmProperties}, function(error){
    if (error){
        alert(error.reason);
    } else {
        Router.go('filmPage', {_id: currentFilmId});
    }
});

if (Films.find().count()===0){
    var now = new Date().getTime();
    //create two users
    var fzId = Meteor.users.insert({
        profile: { name: 'Frank Zappa' }
    });
    var frank = Meteor.users.findOne(fzId);
    var lbId = Meteor.users.insert({
        profile: { name: 'Leonard Bernstein'}
    });
    var leo = Meteor.users.findOne(lbId);

    var jawsId = Films.insert({
        title: "Jaws",
        year: "1975",
        userId: frank._id,
        author: frank.profile.name,
        director: "Steven Spielberg",
        plot:"When a gigantic great white shark begins to menace the small island community of Amity, a police chief, a marine scientist and grizzled fisherman set out to stop it.",
        submitted: new Date(now - 7 * 3600 * 1000)
    });

    var alienId = Films.insert({
        title: "Alien",
        year: "1979",
        userId: frank._id,
        author: frank.profile.name,
        director: "Ridley Scott",
        plot: "The commercial vessel Nostromo receives a distress call from an unexplored planet. After searching for survivors, the crew heads home only to realize that a deadly bioform has joined them",
        submitted: new Date(now - 7 * 3600 * 40)
    });

    var thingId = Films.insert({
        title: "The Thing",
        year: "1982",
        userId: leo._id,
        author: leo.profile.name,
        director: "John Carpenter",
        plot: "Scientists in the Antarctic are confronted by a shape-shifting alien that assumes the appearance of the people it kills.",
        submitted: new Date(now - 7 * 3600 * 20)
    });
}


var currentFilmId = this._id;


Router.route('/films/:_id/edit', {
    name: 'filmEdit',
    data: function() {
        return Films.findOne(this.params._id);
    }
});

Router.route('/submit', {name: 'filmSubmit'});

Router.onBeforeAction('dataNotFound', {only: 'filmPage'});

Router.route('/', {name: 'filmsList'});
Router.route('/films/:_id', {
    name: 'filmPage'
});

Router.configure({
    layoutTemplate: 'layout'
});
Router.route('/', {name: 'filmsList'});

Template.filmsList.helpers({
    films: function(){
        return Films.find();
    }
});

Template.filmsList.helper({ films:filmsData });
Films = new Mongo.Collection('films');

if (Films.find().count() === 0)

title: "Jaws",
year: "1975",
director: "Steven Spielberg",
plot:"When a gigantic great white shark begins to menace the small island community of Amity, a police chief, a marine scientist and grizzled fisherman set out to stop it."
title: "Alien",
year: "1979",
director: "Ridley Scott",
plot: "The commercial vessel Nostromo receives a distress call from an unexplored planet. After searching for survivors, the crew heads home only to realize that a deadly bioform has joined them"
title: "The Thing",
year: "1982",
director: "John Carpenter",
plot: "Scientists in the Antarctic are confronted by a shape-shifting alien that assumes the appearance of the people it kills."
           
Meteor.methods({
    commentInsert: function(commentAttributes) {
        check(this.userId, String);
        check(commentAttributes, {
            filmId: String,
            body: String
        });
        var user = Meteor.user();
        var film = Films.findOne(commentAttributes.filmId);
        if (!film)
        throw new Meteor.Error('invalid-comment', 'You must comment on a post');
        comment = _.extend(commentAttributes, {
            userId: user._id,
            author: user.username,
            submitted: new Date()
        });
        return Comments.insert(comment);
    }
});
         
Router.route('/films/:_id', {
    name: 'filmPage',
    waitOn: function(){
        return Meteor.subscribe('comments', this.params._id);
    },
    data: function(){
        return Films.findOne(this.params._id);
    }
});
           
Meteor.publish('comments', function(filmId){
    check(filmId, String);
    return Comments.find({filmId: filmId});
});
           
           
for (var i = 0; i < 10; i++){
    Films.insert({
        title: "Test film #" + i,
        year: "1955",
        director: "Alfred Hitchcock",
        plor: "this",
        author: frank.profile.name,
        userId: frank._id,
        submitted: new Date(now - i *3600 * 1000),
        commentsCount: 0
    });
}
           

Router.route('/:filmsLimit?', {
    name: 'filmsList',
});
           
           

waitOn: function(){
var limit = parseInt(this.params.postsLimit) ||5;
return Meteor.subscribe('films', {sort: {submitted: -1}, limit: limit});
}


Meteor.publish('films', function(){
    check(options,{
        sort: Object,
        limit: Number
    });
    return Films.find({}, options);
});
           
           
           
           
           
           
           
Template.filmEdit.onCreated(function() {
    Session.set('filmEditErrors', {});
});

Template.commentSubmit.helpers({
    errorMessage: function(field) {
        return Session.get('commentSubmitErrors')[field];
    },
    errorClass: function (field) {
        return !!Session.get('commentSubmitErrors')[field] ? 'has-error' : '';
    }
});

Template.commentSubmit.events({
    'submit form': function(e, template) {
        e.preventDefault();
        var $body = $(e.target).find('[name=body]');
        var comment = {
        body: $body.val(),
        filmId: template.data._id
    };
    var errors = {};
    if (! comment.body) {
        errors.body = "Please write some content";
        return Session.set('commentSubmitErrors', errors);
    }
    Meteor.call('commentInsert', comment, function(error, commentId) {
        if (error){
            throwError(error.reason);
        } else {
            $body.val('');
            }
        });
    }
});
           
           
           
           
           
           
           
           
           
           
           
           
Router.route('/:filmsLimit?', {
    name: 'filmsList',
    waitOn: function(){
        var limit = parseInt(this.params.filmsLimit) ||5;
        return Meteor.subscribe('films', {sort: {submitted: -1}, limit: limit});
    },
    data: function(){
        var limit = parseInt(this.params.filmsLimit) || 5;
        return {
            films: Films.find({}, {sort: {submitted: -1}, limit: limit})
        };
    }
});
           
           
           
           
data: function() {
    var hasMore = this.films().count() === this.filmsLimit();
    var nextPath = this.route.path({filmsLimit: this.filmsLimit() + this.increment});
    return {
        films: this.films(),
        nextPath: hasMore ? nextPath : null
    };
} 
          
           

Router.route('/films/:_id/edit', {
    name: 'filmEdit',
    waitOn: function() {
        return Meteor.subscribe('singlePost', this.params._id);
    },
    data: function() {
        return Films.findOne(this.params._id);
    }
});
         
           
           
           
           

FilmsListController = RouteController.extend({
    template: 'filmsList',
    increment: 5,
    filmsLimit: function() {
        return parseInt(this.params.filmsLimit) || this.increment;
    },
    findOptions: function() {
        return {sort: {submitted: -1}, limit: this.filmsLimit()};
    },
    waitOn: function() {
        return Meteor.subscribe('films', this.findOptions());
    },
    data: function() {
        return {posts: Films.find({}, this.findOptions())};
    }
});



