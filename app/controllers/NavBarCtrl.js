"use strict";

app.controller("NavBarCtrl", function($scope, $window, $location, $routeParams){
console.log("NavBarCtrl");

	$('#add-music').click(function() {
		$window.location.href = "#!/form";
	});

	
});
