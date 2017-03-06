"use strict";

var app = angular.module("MusicHistory", []);

app.config(function($routeProvider) {
	$routeProvider.
	when('/', {
		templateURL: "/partials/song-details.html",
		controller: "SongDetailCtrl"
	});
});