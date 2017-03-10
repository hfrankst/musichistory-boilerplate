"use strict";

var app = angular.module("MusicHistory", ['ngRoute', 'ngAnimate']);

let isAuth = (AuthFactory) => new Promise ( (resolve, reject) => {
  // console.log("running isAuth");
    AuthFactory.isAuthenticated()
    .then ( (userExists) => {
    // console.log("userExists", userExists);
        if (userExists){
      console.log("Authenticated, go ahead.");
            resolve();
        }else {
      console.log("Authentication rejected, go away.");
            reject();
        }
    });
});

app.config(function($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: 'partials/login.html',
		controller: "UserCtrl"
    }).
	when('/details', {
		templateUrl: 'partials/song-details.html',
		controller: "SongDetailCtrl",
		resolve: {isAuth}
	}).
	when('/form', {
		templateUrl: "partials/song-form.html",
		controller: "SongFormCtrl",
		resolve: {isAuth}
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