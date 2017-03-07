"use strict";

var app = angular.module("MusicHistory", ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: 'partials/song-details.html',
		controller: "SongDetailCtrl"
	}).
	when('/song-form', {
		templateUrl: "partials/song-form.html",
		controller: "SongFormCtrl"
	}).
	otherwise('/');
});

app.run(function(){
// console.log("app.run");
});