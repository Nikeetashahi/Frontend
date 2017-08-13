app.controller("blogcontroller",function($scope, $location,blogservice, $cookieStore){
	
	$scope.user = $cookieStore.get("user");
	
	
	$scope.postblog= function(){
	
	blogservice.postblog($scope.blog).then(function(response){
		alert("post sucessfully");
		$location.path('/blogadmin')
		
	},function(response){
		
		$scope.message=response.data.message;
		console.log(response.data.message);
	})
	
	
	}
	
	
	$scope.blogs= {};	
	$scope.bloglist = function(){
		//console.log("hiiii");
		blogservice.bloglist().then(function(response){
			$scope.blogs=response.data;
			console.log($scope.blogs);
		},function(response){
			$scope.message=response.data.message;
			$location.path('/login');
			
		})
	}
	

	$scope.enable=function(id){
		blogservice.enable(id,"Y").then(function(response){
			alert("approved successfully");
			$scope.bloglistadmin();
			$location.path('/bloglistdmin');
			
		},function(response){
			$scope.message=response.data.message
			console.log(response.data.message);
			
		})
		
	}
	
	
	$scope.blogs= {};	
	$scope.bloglistadmin = function(){
		console.log("hiiii");
		blogservice.bloglistadmin().then(function(response){
			$scope.blogs=response.data;
			console.log($scope.blogs);
		},function(response){
			$scope.message=response.data.message;
			$location.path('/login');
			
		})
	}
	
	$scope.update=function(modalBlog){
		blogservice.update($scope.modalBlog).then(function(response){
			alert("update sucessfully");
			$location('/bloglist');
		},function(response){
			$scope.error=response.data.message
			alert($scope.error);
			
			})
	}
		
		$scope.modal=false
		$scope.updateblog=function(blog)
		{
			console.log("hhgfffccf");
			$scope.modalBlog=blog;
			$scope.modal=true;
			
		}
		
		$scope.close=function(){
			
			$scope.modal=false;
		}
		
		
		$scope.commentonblog = {
				'blog_id': "",
				'comments' : ""
			}
			$scope.add=function(com , id){
			
				$scope.commentonblog.blog_id=id;
				$scope.commentonblog.comments =com;
				blogservice.add( $scope.commentonblog ).then(function(response){
					
				alert("comment is added");
				$location.path('/getbloglist')
				
				}),function(response){
					
					$scope.message=response.data.message;
					console.log(response.data.message);
					
				}
				
				
			}
		
		
		$scope.comment={};
		$scope.getComnt=function(id){
			blogservice.getComnt(id).then(function(response){
				
			},function(response){
				
				
			})
			
		}
		
	
	
})