var softUni = angular.module('softUniModule', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/register', {
            templateUrl: 'templates/register.html',
            controller: 'SoftUniApp'
        });
        $routeProvider.when('/listAds', {
            templateUrl: 'templates/listAds.html'
        });
        $routeProvider.when('/login', {
            templateUrl: 'templates/login.html'
        });
        $routeProvider.otherwise({redirectTo:'/listAds'});

    });