softUni.controller('SoftUniController', function($scope, mainData, loginService, $q, $http){
    mainData.getAllAds(function(resp){
        $scope.data=resp;
    });
    mainData.getAllTowns(function(resp){
        $scope.allTowns=resp;
    });
    mainData.getAllCategories(function(resp){
        $scope.allCategories=resp;
    });
    $scope.logout=function(){
        loginService.logout();
    };
    $scope.filterAds=function(category){
            var deferred = $q.defer();
            var url='http://softuni-ads.azurewebsites.net/api/ads?categoryid=' + category.id;
            $http({method:'GET', url:url})
                .then(function(result) {
                    $scope.data=result.data;
                    console.log($scope.data)
                }, function(error) {
                    deferred.reject(error);
                });
            return deferred.promise;
    };

});
