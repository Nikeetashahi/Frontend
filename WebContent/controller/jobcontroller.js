app.controller('jobcontroller',function($scope,$location,jobservice){
	
	$scope.savejob=function(){
		jobservice.savejob($scope.job).then(function(response){
		$location.path('/getalljob')
		},function(response){
			$scope.message=response.data.message
			if(response.status==401)
				$location.path('/login')
			if(response.status==500)
				$location.path('/savejob')	
			
		})
	}
	
	$scope.getjobdetail=function(id){
		jobservice.getJobById(id).then(function(response){
			$scope.job=response.data;
			
		},function(response){
			console.log(response.status);
			
		})
	}
	
	$scope.jobs= {};	
	$scope.getAllJobs = function(){
		jobservice.getAllJobs().then(function(response){
			$scope.jobs=response.data;
			console.log($scope.jobs);
		},function(response){
			$scope.message=response.data.message;
			$location.path('/login');
			
		})
	}
	/*$scope.hide=false;
	$scope.updatejobs=function(job){
		
		$scope.hide=true;
		$scope.details=job;
		
	}*/
	
	$scope.updatejob=function(details){
		jobservice.updatejob($scope.details).then(function(response){
			alert("update successfully");
			$location.path('/getalljob')
			//$scope.hide=false;
		},function(response){
			
			$scope.message=response.data.message
			alert(response.data.message);
		})
	}
	
	
	$scope.modal=false
	$scope.updatejobs=function(job)
	{
		$scope.modal=true;
		$scope.details=job;
		
		
	}
	
	$scope.close=function(){
		
		$scope.modal=false;
	}
	
	
	
	
});


