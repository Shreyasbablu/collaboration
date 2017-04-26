var app = angular.module('myApp', [ 'ngRoute','ngCookies' ]);
console.log("inside app js");

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'col/home/home.html'
  })

  .when('/blog', {
    templateUrl : 'col/blog/blog.html'
  })

  .when('/about', {
    templateUrl : 'col/about/about.html'
  })
  
  .when('/contact', {
    templateUrl : 'col/contact/contact.html'
  })
  
  .when('/chat', {
    templateUrl : 'col/chat/chat.html'
  })
  
  .when('/jobs', {
    templateUrl : 'col/jobs/jobs.html'
  })
  
  .when('/forum', {
    templateUrl : 'col/forum/forum.html'
  })
  
  
  
  .when('/login', {
    templateUrl : 'col/login/login.html',
    	controller  : 'LoginController'
  })
  
  .when('/logout', {
    templateUrl : 'col/logout/logout.html',
    	controller  : 'LogoutController'
  })
  
  .when('/register', {
	  
    templateUrl : 'col/register/register.html',
    controller  : 'RegisterController'
  })
  
  .otherwise({redirectTo: '/'});
});
