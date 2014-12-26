var softUni = angular.module('softUniModule', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/register', {
            templateUrl: 'templates/register.html'
        });
        $routeProvider.when('/listAds', {
            templateUrl: 'templates/listAds.html'
        });
        $routeProvider.when('/login', {
            templateUrl: 'templates/login.html',
            controller:'loginController'
        });
        $routeProvider.otherwise({redirectTo:'/listAds'});

    });
