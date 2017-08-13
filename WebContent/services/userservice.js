/**
 * 
 */

app.factory('userservice',serv);
		
		
function serv($http){
	var userservice={}
	
	userservice.registeruser=function(user){
		
		return $http.post("http://localhost:8085/backend/registration",user)
	}
	
	userservice.log=function(user){
		
		return $http.post("http://localhost:8085/backend/login",user)
		
	}
	
	userservice.lout=function(){
		
		return $http.get("http://localhost:8085/backend/logout")
	}
	return userservice;
}