var softUni = angular.module('softUniModule', ['ngRoute', 'naif.base64'])
    .config(function ($routeProvider) {
        $routeProvider.when('/register', {
            templateUrl: 'templates/register.html',
            controller:'registerController'
        });
        $routeProvider.when('/', {
            templateUrl: 'templates/listAds.html'
        });
        $routeProvider.when('/user/home', {
            templateUrl: 'templates/listAds.html',
            resolve: {
                auth: ["$q", "loginService", function($q, loginService) {
                    var userInfo = loginService.getUserInfo();

                    if (userInfo) {
                        return $q.when(userInfo);
                    } else {
                        return $q.reject({ authenticated: false });
                    }
                }]
            }
        });
        $routeProvider.when('/login', {
            templateUrl: 'templates/login.html',
            controller:'loginController'
        });
        $routeProvider.when('/user/ads', {
            templateUrl: 'templates/myAds.html',
            resolve: {
                auth: ["$q", "loginService", function($q, loginService) {
                    var userInfo = loginService.getUserInfo();

                    if (userInfo) {
                        return $q.when(userInfo);
                    } else {
                        return $q.reject({ authenticated: false });
                    }
                }]
            }
        });
        $routeProvider.when('/user/ads/publish', {
            templateUrl: 'templates/publishNewAd.html',
            controller:'publishNewAdController',
            resolve: {
                auth: ["$q", "loginService", function($q, loginService) {
                    var userInfo = loginService.getUserInfo();

                    if (userInfo) {
                        return $q.when(userInfo);
                    } else {
                        return $q.reject({ authenticated: false });
                    }
                }]
            }
        });
        $routeProvider.when('/user/ads/delete/', {
            templateUrl: 'templates/confirmDelete.html',
            resolve: {
                auth: ["$q", "loginService", function($q, loginService) {
                    var userInfo = loginService.getUserInfo();

                    if (userInfo) {
                        return $q.when(userInfo);
                    } else {
                        return $q.reject({ authenticated: false });
                    }
                }]
            }
        });
        $routeProvider.when('/user/profile', {
            templateUrl: 'templates/editProfile.html',
            resolve: {
                auth: ["$q", "loginService", function($q, loginService) {
                    var userInfo = loginService.getUserInfo();

                    if (userInfo) {
                        return $q.when(userInfo);
                    } else {
                        return $q.reject({ authenticated: false });
                    }
                }]
            }
        });
        $routeProvider.when('/user/ads/edit', {
            templateUrl: 'templates/editAd.html',
            resolve: {
                auth: ["$q", "loginService", function($q, loginService) {
                    var userInfo = loginService.getUserInfo();

                    if (userInfo) {
                        return $q.when(userInfo);
                    } else {
                        return $q.reject({ authenticated: false });
                    }
                }]
            }
        });
        $routeProvider.otherwise({redirectTo:'/'});


    });
softUni.run(["$rootScope", "$location", function($rootScope, $location) {
    $rootScope.$on("$routeChangeError", function(event, current, previous, eventObj) {
        if (eventObj.authenticated === false) {
            $location.path("/");
        }
    });

}]);

