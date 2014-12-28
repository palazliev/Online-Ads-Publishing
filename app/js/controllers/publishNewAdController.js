softUni.controller('publishNewAdController', function ($scope, publishNewAdService) {
    $scope.publish=function(publishData){
        publishNewAdService.publish(publishData);
    };
});