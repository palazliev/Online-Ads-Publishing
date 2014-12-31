softUni.factory('loginService', function($http, $q, $window, $rootScope){
    var userInfo;

    function login(user) {
        var deferred = $q.defer();

        $http.post('http://softuni-ads.azurewebsites.net/api/user/login', user)
            .then(function(result) {
            $rootScope.userInfo = {
                accessToken: result.data.access_token,
                userName: result.data.username
            };

            $rootScope.isLoggedIn=true;
            $window.sessionStorage["userInfo"] = JSON.stringify($rootScope.userInfo);
            $window.sessionStorage["isLoggedIn"] = $rootScope.isLoggedIn;
            deferred.resolve($rootScope.userInfo);
                user.username='';
                user.password='';
            $window.location='#/';

        }, function(error) {
            deferred.reject(error);
                console.log(error.data.error_description);
                $rootScope.errMsg=error.data.error_description;
        });

        return deferred.promise;
    }

    function logout() {
        delete sessionStorage["userInfo"];
        sessionStorage["isLoggedIn"]=false;
        $rootScope.userInfo = null;
        $window.location = '#/';
    }

    function getUserInfo() {
        return userInfo;
    }

    function init() {
        if ($window.sessionStorage["userInfo"]) {
            userInfo = JSON.parse($window.sessionStorage["userInfo"]);
        }
    }

    init();


    return {
        login: login,
        logout: logout,
        getUserInfo: getUserInfo
    };

});
