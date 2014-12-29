softUni.controller('SoftUniController', function($scope, mainData, loginService, $q, $http){
    mainData.getAllAds(function(resp){
        $scope.data=resp;
        $scope.oldData=resp;
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

    $scope.filterAdsCat=function(category){
        var deferred = $q.defer();
        if($scope.currentTownId){
            url='http://softuni-ads.azurewebsites.net/api/ads?categoryid=' + category.id + '&townid=' + $scope.currentTownId;
        }else{
            url='http://softuni-ads.azurewebsites.net/api/ads?categoryid=' + category.id;
        }
        $scope.currentCatId=category.id;
            $http({method:'GET', url:url})
                .then(function(result) {
                    $scope.data=result.data;
                }, function(error) {
                    deferred.reject(error);
                });
            return deferred.promise;
    };

    $scope.filterAdsTown=function(town){
        var deferred = $q.defer();
        var url='';
        if($scope.currentCatId){
            url='http://softuni-ads.azurewebsites.net/api/ads?categoryid=' + $scope.currentCatId + '&townid=' + town.id;
        }else{
            url='http://softuni-ads.azurewebsites.net/api/ads?townid=' + town.id;
        }
        $scope.currentTownId=town.id;

        $http({method:'GET', url:url})
            .then(function(result) {
                $scope.data=result.data;
            }, function(error) {
                deferred.reject(error);
            });
        return deferred.promise;
    };

    $scope.loadMyAds=function(){
        var deferred = $q.defer();
        var url='http://softuni-ads.azurewebsites.net/api/user/ads';
        var accessToken = $scope.userInfo.accessToken;
        var accHeader = 'Bearer '+accessToken;
        var headers={Authorization: accHeader};
        $http({method:'GET', url:url, headers:headers})
            .then(function(result) {
                $scope.myAds=result.data;
                console.log($scope.myAds)
            }, function(error) {
                deferred.reject(error);
                console.log(error);
            });
        return deferred.promise;
    };

    $scope.showMyAds=function(){
        $scope.showMyAdsMenu=true;
    };
    $scope.hideMyAds=function(){
        $scope.showMyAdsMenu=false;
    };
    $scope.showAllAds=function(){
        $scope.data=$scope.oldData;
    };

    $scope.showAllAds=function(){
        var deferred = $q.defer();
        $http({method:'GET', url:'http://softuni-ads.azurewebsites.net/api/ads?PageSize=10&startpage=1'})
            .then(function(result) {
                console.log(result)
                $scope.data=result.data;
            }, function(error) {
                deferred.reject(error);
                console.log('error')
            });
        return deferred.promise;
    }

});
