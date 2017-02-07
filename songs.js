"use strict";

var NewSong = function(oldnewsong){

var songs = [
	"Legs > by Z*ZTop on the album Eliminator",
	"The Logical Song > by Supertr@amp on the album Breakfast in America",
	"Another Brick in the Wall > by Pink Floyd on the album The Wall",
	"Welcome to the Jungle > by Guns & Roses on the album Appetite for Destruction",
	"Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill"
];
console.log("Songs to be added by loop: ", songs);
	//this loop will take out any incorrect characters in the song strings..so far it's not working
	function pushToDOM (){	
		for (var i = 0; i < songs.length; i++){
			var charReplace = songs[i].replace('>', '-').replace('*', '').replace('@', '').replace('!', '');
			// var songParagraph = document.createElement('p');
			// songParagraph.append(charReplace);
			document.getElementsByClassName('right-side')[0].append(charReplace);
			document.getElementsByClassName('right-side')[0].insertAdjacentHTML('beforeend', '<br>');
			console.log("Songs: ", charReplace);
		}
	};
	pushToDOM();

	//setting an event listener to the click of the 'Add Music' nav link, this is going to hide the index.html layout to switch with the addmusic layout
	document.getElementById('add-music').addEventListener('click', function{
		//hide 'big' and show 'userInput'

	});
return oldnewsong;

}(NewSong || {});
