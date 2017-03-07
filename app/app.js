"use strict";

var app = angular.module("MusicHistory", ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: 'partials/song-details.html',
		controller: "SongDetailCtrl"
	}).
	when('/form', {
		templateUrl: "partials/song-form.html",
		controller: "SongFormCtrl"
	}).
	otherwise('/');
});

app.run(($location, FBCreds) => {
 let creds = FBCreds;
    let authConfig = {
        apiKey: creds.apiKey,
        authDomain: creds.authDomain,
        databaseURL: creds.databaseURL
    };
  firebase.initializeApp(authConfig);
});