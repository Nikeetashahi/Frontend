app.controller('friendcontroller',function($scope,$location,friendservice){
	
	
	$scope.suggestlist=function(){
		friendservice.suggestlist().then(function(response){
			$scope.friends=response.data;
			console.log($scope.friends);
		},function(response){
			alert(response.data.message);
			
		})
	}
	
	
	
	$scope.addfrnd=function(emailid){
		console.log(emailid);
		friendservice.addfrnd(emailid).then(function(response){
			alert("request sucessfully send");
			$scope.suggestlist();			
			
		},function(response){
			$scope.message=response.data.message;
		
		})
	}
	
	
	$scope.pendinglist=function(){
		friendservice.pendinglist().then(function(response){
			$scope.friends=response.data;
			console.log($scope.friends);
		},function(response){
			$scope.message=response.data.message;
			console.log(response.data.message);
			
		})
	}
	
	$scope.accept=function(fromid,status,name){
		friendservice.accept(fromid,"A").then(function(response){
			alert("now you and "+ name +" are friend");
			$location.path('/friendlist');
			
		},function(response){
			$scope.message=response.data.message;
			console.log(response.data.message);
		})
		
		
	}
	
	$scope.reject=function(fromid,status){
		friendservice.reject(fromid,"R").then(function(response){
			alert("Request deleted");
			$location.path('/friendlist');
		},function(response){
			$scope.message=response.data.message;
			console.log(response.data.message);
			
		})
	}
	
	
	
	$scope.friendlist=function(){
		
		console.log("HIii");
		friendservice.friendlist().then(function(response){
			console.log(response.data);
			$scope.friends=response.data;
			console.log("hiiiii");
			//console.log($scope.friends)
		},function(response){
			$scope.message=response.data.message;
			console.log(response.data.message);
		})
	}
	
	$scope.modal=false;
	$scope.open=function(frnd){
		$scope.modalfrnd=frnd;
		console.log($scope.modalfrnd);
		$scope.modal=true;
	}
	
	$scope.close=function(){
		$scope.modal=false;
	}
	
	
})
