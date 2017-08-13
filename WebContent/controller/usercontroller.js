/**
 * 
 */
app.controller('usercontroller',main);
		
function main( $rootScope , $scope,$location,userservice , $cookieStore)
{
	
			$scope.register = function() {
			console.log("hiiiiiii")
		userservice.registeruser($scope.user).then(function(response){
			alert("You had registered sucessfully")
			$location.path('/login');

		}, function(response) {
			$scope.error = response.data;
			$location.path('/registration');
		})
	}
			
    
    console.log($rootScope.isLogin);
    
	$scope.user = {};
	$scope.log = function() {

		console.log($scope.user);
		userservice.log($scope.user).then(function(response) {
			console.log($rootScope.isLogin+ "in logoin");
			$rootScope.isLogin = true;
			console.log($rootScope.isLogin+ "in login");
			$scope.user = response.data;
			$rootScope.userDetail= response.data;
			$location.path('/home')
			$cookieStore.put("user", $scope.user);
		}, function(response) {

			$scope.error = response.data.message;
			alert("Invalid Id Or Password!");
		})
	}
			

				$scope.hideElement = false;
	$scope.showing = function(bool) {
		console.log("Hii");
		$scope.hideElement = bool;
	}

	$scope.msg = "Hihihihihih";

	/*	app.run(function($rootScope,$location,$cookieStore,userservice){
	    	
	    	if($rootScope.user==undefined)
	    		$rootScope.user=$cookieStore.get("user")*/

	$scope.lout = function() {

		userservice.lout().then(function(response) {
			console.log($rootScope.isLogin+ "in logout");
			$rootScope.isLogin = false;
			console.log($rootScope.isLogin+ "in logout");
			$cookieStore.remove("user")
			$location.path('/registration')
		}, function(response) {

			console.log(response.status)
			$scope.message = response.data.message
			$location.path('/login')
		})

	}
	        	
	        	
	        	
	        
			
}