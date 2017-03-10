"use strict";

app.factory("SongStorage", ($q, $http, FBCreds, AuthFactory) => {
	

	let getSongList = () => {
		let songs = [];
		let user = AuthFactory.getUser();
		// console.log("bYqabDOIsBVCibtWl3YLhlk2LdF2", user);

		return $q((resolve, reject) => {
			// console.log("list url", `${FBCreds.databaseURL}/songs.json?orderBy="uid"&equalTo="${user}"`);
			$http.get(`${FBCreds.databaseURL}/songs.json?orderBy="uid"&equalTo="${user}"`)
			.then((songObject) => {
				let songCollection = songObject.data;
				// console.log("songObject", songObject);
				Object.keys(songCollection).forEach((key) => {
					songCollection[key].id = key;
					songs.push(songCollection[key]);
				});
				console.log("resolved songs", songs);
				resolve(songs);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	let postNewSong = (newSong) => {
		console.log("you've posted a new song");
		return $q((resolve, reject) => {
			$http.post(`${FBCreds.databaseURL}/songs.json`,
				JSON.stringify(newSong))
			.then((ObjectFromFirebase) => {
				resolve(ObjectFromFirebase);
			})
			.catch((error) => {
				reject(error);
			});
		});

	};

	let deleteSong = (songId) => {
		console.log("delete in factory", songId);
		return $q((resolve, reject) => {
			$http.delete(`${FBCreds.databaseURL}/songs/${songId}.json`)
			.then((ObjectFromFirebase) => {
				resolve(ObjectFromFirebase);
			});
		});

	};

	let getSingleSong = (songId) => {
		console.log("got a single song", songId);
		return $q(function(resolve, reject){
			$http.get(`${FBCreds.databaseURL}/songs/${songId}.json`)
			.then(function (songObject) {
				resolve(songObject.data);
			})
			.catch(function(error){
				reject(error);
			});
		});
	};

	let updateSong = (songId, editedSong) => {
		console.log("songId that was updated", songId);
		return $q(function(resolve, reject){
			$http.patch(`${FBCreds.databaseURL}/songs/${songId}.json`, 
				angular.toJson(editedSong))
			.then(function(ObjectFromFirebase) {
				resolve(ObjectFromFirebase);
			})
			.catch(function(error){
				reject(error);
			});
		});
	};


	return {getSongList, postNewSong, deleteSong, getSingleSong, updateSong};
});