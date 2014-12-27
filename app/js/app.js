var softUni = angular.module('softUniModule', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/register', {
            templateUrl: 'templates/register.html'
        });
        $routeProvider.when('/listAds', {
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
        $routeProvider.otherwise({redirectTo:'/listAds'});

        softUni.run(["$rootScope", "$location", function($rootScope, $location) {
            $rootScope.$on("$routeChangeSuccess", function(userInfo) {
                console.log(userInfo);
            });

            $rootScope.$on("$routeChangeError", function(event, current, previous, eventObj) {
                if (eventObj.authenticated === false) {
                    $location.path("/login");
                }
            });
        }]);
    });

