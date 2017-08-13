app.factory('friendservice', function($http){
	
	var friendservice={}
	
	friendservice.suggestlist=function(){
		
		return $http.get("http://localhost:8085/backend/listofsuggestedfriend");
	}
	
	friendservice.addfrnd=function(emailid){
		
		return $http.get("http://localhost:8085/backend/addfriend/"+emailid+"/");
	}
	
	friendservice.pendinglist=function(){
		
		return $http.get("http://localhost:8085/backend/pendingrequest");
	}
	
	friendservice.accept=function(fromid,status){
		
		return $http.get("http://localhost:8085/backend/updaterequest/"+fromid+"/"+status);
	}
	
	friendservice.reject=function(fromid,status){
		
		return $http.get("http://localhost:8085/backend/updaterequest/"+fromid+"/"+status);
	}
	
	friendservice.friendlist=function(){
		
		return $http.get("http://localhost:8085/backend/listoffriend");
	}
	
	
	return friendservice;
	
	
})