var app = angular.module('app',['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/Home")

    $stateProvider
    .state('Home',{
        url:'/Home',
        templateUrl:'html/home.html'
    })
        .state('Day',{
        url:'/Day',
        templateUrl:'html/day.html'
    })
});