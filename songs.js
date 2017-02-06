var songs = [
	"Legs > by Z*ZTop on the album Eliminator",
	"The Logical Song > by Supertr@amp on the album Breakfast in America",
	"Another Brick in the Wall > by Pink Floyd on the album The Wall",
	"Welcome to the Jungle > by Guns & Roses on the album Appetite for Destruction",
	"Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill"
];
console.log("Songs to be added by loop: ", songs);
	//this loop will take out any incorrect characters in the song strings..so far it's not working
for (var i = 0; i < songs.length; i++){
	var charReplace = songs[i].replace('>', '-').replace('*', '').replace('@', '').replace('!', '');
	console.log("Songs: ", charReplace);
	document.getElementsByClassName('right-side')[0].innerHTML = charReplace[i];
	console.log("Adjusted song titles: ", charReplace);
};
	//the following will assign the corrected array of strings to a new variable that will be pushed to the main content area
// var updatedSongs = charReplace;