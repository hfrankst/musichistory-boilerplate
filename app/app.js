"use strict";

var app = angular.module('MusicHistory', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.
	when('/', {
		templateURL: "/partials/song-details.html",
		controller: "SongDetailCtrl"
	}).
	when('/song-form', {
		templateURL: "/partials/song-form.html",
		controller: "SongFormCtrl"
	}).
	otherwise('/');
});