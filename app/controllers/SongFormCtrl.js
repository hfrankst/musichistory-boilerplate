"use strict";

app.controller("SongFormCtrl", function($scope, $window, $routeParams, $location){
console.log("SongFormCtrl");	

	//focus on the first input field on page load, using this id id="song"
	$('#song').focus();
	
	let song = '';
	let artist = '';
	let album = '';
	
	//on button click, this function stores the new song info from the form
	let addNewSong = () => {
		let newSong = {
			song: $('#song').val(),
			artist: $('#singer').val(),
			album: $('#record').val()
		};
		let finishedSong = newSong.song + ' by ' + newSong.artist + ' on ' + newSong.album;
		$('.right-side').append(finishedSong);
		console.log("finishedSong", finishedSong);
		return newSong;
	};

	$('#addBtn').on('click', addNewSong);


});