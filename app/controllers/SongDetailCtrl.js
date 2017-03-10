"use strict";

app.controller("SongDetailCtrl", function($scope, $window, AuthFactory, $location, SongStorage){
// console.log("SongDetailCtrl");
	
	$scope.songs = [];
    let user = AuthFactory.getUser();
	// console.log("user in SongDetailCtrl", user);


	
		SongStorage.getSongList(user)
		.then(function (songs) {
			console.log("songs", songs);
			$scope.songs = songs;
			console.log("$scope.songs", $scope.songs[0]);
		});
		
	

	//use a ng-repeat to populate the songs details

});