"use strict";

/////////The following event listeners are watching the 'Add' button on the add music page

///grabbing all elements that are going to be watched.
var addBtn = document.getElementById('addBtn');
var userSong = document.getElementById('song');
var userArtist = document.getElementById('artist');
var userAlbum = document.getElementById('album');
	console.log("Here are the elements needed for the listeners: ", addBtn, userSong, userArtist, userAlbum);


var NewSong = function(oldnewsong){


		addBtn.addEventListener('click', function(){
			var songToAdd = {
				userSong: document.getElementById('song').value,
				userArtist: document.getElementById('singer').value,
				userAlbum: document.getElementById('record').value
			}
			//set the string value of the input to variables in preparation to build a string
			var finalSongPick = songToAdd.userSong.toString();
			var finalArtistPick = songToAdd.userArtist.toString();
			var finalAlbumPick = songToAdd.userAlbum.toString();

			var userStatement = finalSongPick + ` by ` + finalArtistPick + ` on the album ` + finalAlbumPick + `.`;

			document.getElementsByClassName('right-side')[0].append(userStatement);
			document.getElementsByClassName('right-side')[0].insertAdjacentHTML('beforeend', '<br>');

			console.log("The user's input: ", songToAdd);
		});



///I need to grab the button by its id, then put an event listener on it, looking for a button click
return oldnewsong;

}(NewSong || {});

