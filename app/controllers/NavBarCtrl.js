"use strict";

app.controller("NavBarCtrl", function($scope, $window, SearchTermData, AuthFactory){
// console.log("NavBarCtrl");

 $scope.searchText = SearchTermData;
    $scope.isLoggedIn = false;

    firebase.auth().onAuthStateChanged(function (user) {
    	if(user){
    		$scope.isLoggedIn = true;
    		console.log("currentUser logged in", $scope.isLoggedIn);
    	} else {
    		$scope.isLoggedIn = false;
    		console.log("currentUser logged in", $scope.isLoggedIn);
    		//$window.location forces the page to completely reload
    		$window.location.href = "#!/login";
    	}
    });

       $scope.loginGoogle = () => {
        console.log("you clicked login with Google");
        AuthFactory.authWithProvider()
        .then(function(result) {
            var user = result.user.uid;
            console.log("logged in user:", user);
            //Once logged in, go to another view
            $window.location.href = "#!/details";
            // $scope.$apply();
        }).catch(function(error) {
            // Handle the Errors.
            console.log("error with google login", error);
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            
        });
    };
	
});
