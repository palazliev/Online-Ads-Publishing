softUni.controller('publishNewAdController', function ($scope, $q, $http) {
    $scope.obj = {};
    $scope.divLoaded = function() {
        // from now on, $scope.obj.flow will be defined
        console.log($scope.obj);
    };
    $scope.clog= function(){
        console.log($scope.obj);
    };

    $scope.publish=function publish(publishData, ImageDataURL) {
        var accessToken = $scope.userInfo.accessToken;
        var accHeader = 'Bearer '+accessToken;
        var headers={Authorization: accHeader};
        publishData['ImageDataURL']='data:image/jpeg;base64,'+ImageDataURL.base64;
        var deferred = $q.defer();
        $http({method:'POST', url:'http://softuni-ads.azurewebsites.net/api/user/ads', headers:headers, data:publishData})
            .then(function(result) {
                console.log(result);
                $scope.publishSccMsg=result.data.message;
            }, function(error) {
                deferred.reject(error);
                console.log(error);
                $scope.publishErrMsg=error.data.message;

            });

        return deferred.promise;
    };
    $scope.shower = function (yourModel) {
        console.log(yourModel);
    };

});