softUni.factory('registrationService', function($http, $q, $window, $rootScope){

    function register(regUser, selected) {
        regUser['townId']=selected;
        var deferred = $q.defer();

        $http.post('http://softuni-ads.azurewebsites.net/api/user/register', regUser)
            .then(function(result) {
                $rootScope.userInfo = {
                    accessToken: result.data.access_token,
                    userName: result.data.username,
                    townId: selected
                };

                $window.sessionStorage["userInfo"] = JSON.stringify($rootScope.userInfo);
                deferred.resolve($rootScope.userInfo);
                $window.location='#/listAds';
            }, function(error) {
                deferred.reject(error);
                console.log("Registration error");
                $rootScope.regErrMsg="Registration error";
            });

        return deferred.promise;
    }

    return {
        register:register
    };

});

