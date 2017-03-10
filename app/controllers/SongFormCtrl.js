"use strict";

app.controller("SongFormCtrl", function($scope, $window, AuthFactory, $location, SongStorage){
console.log("SongFormCtrl");	


    let user = AuthFactory.getUser();

	//focus on the first input field on page load, using this id id="song"
	$('#song').focus();
	
	
	
	//on button click, this function stores the new song info from the form
	let addNewSong = () => {
		let newSong = {
			song: $scope.song.name,
			artist: $scope.song.artist,
			album: $scope.song.album,
			genre: $scope.song.genre,
			uid: user
		};
		// let finishedSong = newSong.song + ' by ' + newSong.artist + ' on ' + newSong.album;
		// $('.right-side').append(newSong);
		SongStorage.postNewSong(newSong);
		console.log("newSong", newSong);
		// console.log("finishedSong", finishedSong);
		$scope.song.name = ''; 
		$scope.song.artist = '';
		$scope.song.album = '';
		$scope.song.genre = '';
		return newSong;
	};

	$('#addBtn').on('click', addNewSong);


});