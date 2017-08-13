app.factory('blogservice',function($http){
	

	var blogservice={}
	
	blogservice.postblog=function(blog){
		
		return $http.post("http://localhost:8085/backend/addblog",blog)
	}
	
	blogservice.bloglist=function(){
		
		return $http.get("http://localhost:8085/backend/getbloguser")
	}
	
	blogservice.enable=function(id,status){
		
		return $http.get("http://localhost:8085/backend/enableblog/?blogid="+id+"&status="+status);
	}
	
	blogservice.bloglistadmin=function(){
		
		return $http.get("http://localhost:8085/backend/getblogadmin")
	}
	
	 blogservice.update=function(modalBlog){
	    	
	    	return $http.post("http://localhost:8085/backend/updateblog",modalBlog)
	    }
	 
	 blogservice.add=function(commentonblog){
		 
		 return $http.post("http://localhost:8085/backend/savecomment", commentonblog)
	 }
	
	return blogservice;
	
})