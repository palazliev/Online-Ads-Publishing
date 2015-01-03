softUni.factory('publishNewAdService', function($http, $q, $window, $rootScope){

    function publish(publishData, img) {
        var accessToken = $rootScope.userInfo.accessToken;
        var accHeader = 'Bearer '+accessToken;
        var headers={Authorization: accHeader};
        publishData['ImageDataURL']=$rootScope.img;
        var deferred = $q.defer();
        $http({method:'POST', url:'http://softuni-ads.azurewebsites.net/api/user/ads', headers:headers, data:publishData})
            .then(function(result) {
                $rootScope.publishSccMsg="Advertisement submitted for approval. Once approved, it will be published.";
            }, function(error) {
                deferred.reject(error);
                $rootScope.publishErrMsg="Publish error.";

            });

        return deferred.promise;
    }

    return {
        publish:publish
    };

});
