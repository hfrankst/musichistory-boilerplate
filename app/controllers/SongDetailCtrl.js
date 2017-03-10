"use strict";

app.controller("SongDetailCtrl", function($scope, $window, AuthFactory, $location, SongStorage){
// console.log("SongDetailCtrl");
	
	$scope.songs = [];
    let user = AuthFactory.getUser();
	// console.log("user in SongDetailCtrl", user);
	
	//this function gets the song list by user
	SongStorage.getSongList(user)
	.then(function (songs) {
	$scope.songs = songs;
		console.log("$scope.songs", $scope.songs[0]);
	});



	let songDelete = (songId) => {
		SongStorage.deleteSong(songId);
	};

	$('.material-icons').on('click', songDelete);

});