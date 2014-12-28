softUni.factory('registrationService', function($http, $q, $window, $rootScope){

    function register(regUser, selected) {
        regUser['townId']=selected;
        var deferred = $q.defer();

        $http.post('http://softuni-ads.azurewebsites.net/api/user/register', regUser)
            .then(function(result) {
                $rootScope.regSccMsg="Registration successful. Please login.";
                regUser.username="";
                regUser.password="";
                regUser.confirmPassword="";
                regUser.email="";
                regUser.name="";
                regUser.phone="";
                selected='';
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

