

var app=angular.module("mymodule",["ngRoute" , 'ngCookies']);

        app.config(function($routeProvider){
        	$routeProvider
        	
        	    .when('/',{
        	    templateUrl:'views/frontpage.html',
        	    controller:'usercontroller'
        		
        	})
        		.when('/login',{
        		templateUrl:'views/login.html',
        		  controller:'usercontroller'
        		
        	})
        		.when('/register',{
        		templateUrl:'views/registrationform.html',
        		  controller:'usercontroller'
        	})
        	
        	    .when('/savejob',{
        	    	templateUrl:'views/jobform.html',
        	    	controller:'jobcontroller'
        	    
        	    })
        	    
        	    .when('/getalljob',{
        	    	templateUrl:'views/AllJob.html',
        	    	controller:'jobcontroller'
        	    })
        	    
        	    /*.when('/profilepic',{
		            templateUrl:'views/profilepicture.html'
	            
        	    })*/
        	    
        	   .when('/profilepicture',{
		            templateUrl:'views/profilepicture.html'

        		   
        	   })
        	   
        	   .when('/blogpost',{
        		 templateUrl:'views/blogpost.html',
        		 controller:'blogcontroller'
        		   
        	   })
        	   
        	   .when('/getbloglist',{
        		 templateUrl:'views/bloglist.html',
        		 controller:'blogcontroller'
        		   
        	   })
        	   
        	   .when('/blogadmin',{
        		 templateUrl:'views/bloglistadmin.html',
        		 controller:'blogcontroller'
        		   
        	   })
        	   
        	   .when('/suggestfrnd',{
        		 templateUrl:'views/suggestedlist.html',
        		 controller:'friendcontroller'
        		   
        	   })
        	   
        	   .when('/listfrnd',{
        		 templateUrl:'views/friendlist.html',
        		 controller:'friendcontroller'
        		   
        	   })
        	   
        	   .when('/pendingrequest',{
        		 templateUrl:'views/pendinglist.html',
        		 controller:'friendcontroller'
        		   
        	   })
        	   
        	   .when('/chat',{
        		   	templateUrl:'views/chat.html',
        		   	controller:'ChatCtrl'
        	   })
        	   
        	   
        	    .when("/home" , {
        	    	templateUrl : "views/home.html",
        	    		  controller:'usercontroller'
        	    })
        })
        
        