app.factory('jobservice',function($http){
	
	var jobservice={}
	
	jobservice.savejob=function(job){
		return $http.post("http://localhost:8085/backend/savejob",job)
	}
	
	jobservice.getAllJobs=function(){
		return $http.get("http://localhost:8085/backend/alljobs")
	}
	
	jobservice.getJobById=function(id){
		return $http.get("http://localhost:8085/backend/getjobbyid",id)
	}
	
	jobservice.updatejob=function(job){
		return $http.post("http://localhost:8085/backend/updatejob",job)
	}
	
	return jobservice;
})