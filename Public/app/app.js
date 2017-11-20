angular.module("userApp", ['appRoutes','loginControllers', 'authServices'])
.config(function($httpProvider){
    $httpProvider.interceptors.push('AuthInterceptors');
});


