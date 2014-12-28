var softUni = angular.module('softUniModule', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/register', {
            templateUrl: 'templates/register.html',
            controller:'registerController'
        });
        $routeProvider.when('/listAds', {
            templateUrl: 'templates/listAds.html'
            //resolve: {
            //    auth: ["$q", "loginService", function($q, loginService) {
            //        var userInfo = loginService.getUserInfo();
            //
            //        if (userInfo) {
            //            return $q.when(userInfo);
            //        } else {
            //            return $q.reject({ authenticated: false });
            //        }
            //    }]
            //}
        });
        $routeProvider.when('/login', {
            templateUrl: 'templates/login.html',
            controller:'loginController'
        });
        $routeProvider.when('/myAds', {
            templateUrl: 'templates/myAds.html'
        });
        $routeProvider.when('/publish', {
            templateUrl: 'templates/publishNewAd.html'
        });
        $routeProvider.otherwise({redirectTo:'/listAds'});


    });

