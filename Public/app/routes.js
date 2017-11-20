angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider){
 
    $routeProvider

    .when('/',{
          templateUrl: 'app/view/login.html',
         
          
    })

    .when('/login',{
        templateUrl: 'app/view/login.html',
        
        
  })

    .when('/register',{
          templateUrl: 'app/view/register.html'
         
        })
     .otherwise({ redirectTo: '/'});   
     $locationProvider.html5Mode(true);

}); 