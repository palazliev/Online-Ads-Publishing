softUni.factory('loginService', function($http, $q, $window){
    var userInfo;

    function login(user) {
        var deferred = $q.defer();

        $http.post('http://softuni-ads.azurewebsites.net/api/user/login', user)
            .then(function(result) {
            userInfo = {
                accessToken: result.data.access_token,
                userName: result.data.userName
            };
            $window.sessionStorage["userInfo"] = JSON.stringify(userInfo);
            deferred.resolve(userInfo);
        }, function(error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

    return {
        login: login
    };

});