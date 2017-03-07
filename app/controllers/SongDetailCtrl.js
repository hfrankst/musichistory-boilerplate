"use strict";

app.controller("SongDetailCtrl", function($scope, $window, $routeParams, $location){
console.log("SongDetailCtrl");

//I need a function that will direct the url to the song-details.html on page load
	let showSongDetails = () => {
		$window.location.url = '#!/';
		
	};

});