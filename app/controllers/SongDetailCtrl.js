"use strict";

app.controller("SongDetailCtrl", function($scope, $window, $animate, AuthFactory, $location, SongStorage){
// console.log("SongDetailCtrl");
	
	$scope.songs = [];
	$scope.selected = {value: 0};
    let user = AuthFactory.getUser();
	
	//this function gets the song list by user
	SongStorage.getSongList(user)
	.then(function (songs) {
	$scope.songs = songs;
		// console.log("$scope.songs", $scope.songs[0]);
	});

	$scope.songDelete = (songId) => {
		console.log("song deleted", songId);
		SongStorage.deleteSong(songId)
		.then(function(response){
            SongStorage.getSongList(user).then(function(songCollection){
                $scope.songs = songCollection;
            });
        });
	};


});