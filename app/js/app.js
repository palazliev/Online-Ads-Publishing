var softUni = angular.module('softUniModule', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/register', {
            templateUrl: 'templates/register.html',
            controller:'registerController'
        });
        $routeProvider.when('/', {
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
        $routeProvider.when('/user/home', {
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
        $routeProvider.when('/user/ads', {
            templateUrl: 'templates/myAds.html'
        });
        $routeProvider.when('/user/ads/publish', {
            templateUrl: 'templates/publishNewAd.html',
            controller:'publishNewAdController'
        });
        $routeProvider.when('/user/ads/delete/', {
            templateUrl: 'templates/confirmDelete.html'
        });
        $routeProvider.otherwise({redirectTo:'/'});


    });

