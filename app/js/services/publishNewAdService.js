softUni.factory('publishNewAdService', function($http, $q, $window, $rootScope){

    function publish(publishData) {
        var accessToken = $rootScope.userInfo.accessToken;
        var accHeader = 'Bearer '+accessToken;
        var headers={Authorization: accHeader};
        var deferred = $q.defer();
        $http({method:'POST', url:'http://softuni-ads.azurewebsites.net/api/user/ads', headers:headers, data:publishData})
            .then(function(result) {
                console.log('success')
            }, function(error) {
                deferred.reject(error);
                console.log('error')
            });

        return deferred.promise;
    }

    return {
        publish:publish
    };

});
