softUni.controller('SoftUniController', function($scope, mainData, loginService, $q, $http, $window){
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
        $scope.showMyAds();
        $scope.deactivateErrMsg=null;
        $scope.deactivateSccMsg=null;
        var deferred = $q.defer();
        var url='http://softuni-ads.azurewebsites.net/api/user/ads';
        var accessToken = $scope.userInfo.accessToken;
        var accHeader = 'Bearer '+accessToken;
        var headers={Authorization: accHeader};
        $http({method:'GET', url:url, headers:headers})
            .then(function(result) {
                $scope.myAds=result.data;
                console.log(result.data)
            }, function(error) {
                deferred.reject(error);
            });
        return deferred.promise;
    };

    $scope.loadMyAdsInactive=function(){
        $scope.showMyAds();
        var deferred = $q.defer();
        var url='http://softuni-ads.azurewebsites.net/api/user/ads?status=inactive';
        var accessToken = $scope.userInfo.accessToken;
        var accHeader = 'Bearer '+accessToken;
        var headers={Authorization: accHeader};
        $http({method:'GET', url:url, headers:headers})
            .then(function(result) {
                $scope.myAds=result.data;
                console.log(result.data);
            }, function(error) {
                deferred.reject(error);
            });
        return deferred.promise;
    };

    $scope.loadMyAdsWaitingApproval=function(){
        $scope.showMyAds();
        var deferred = $q.defer();
        var url='http://softuni-ads.azurewebsites.net/api/user/ads?status=waitingapproval';
        var accessToken = $scope.userInfo.accessToken;
        var accHeader = 'Bearer '+accessToken;
        var headers={Authorization: accHeader};
        $http({method:'GET', url:url, headers:headers})
            .then(function(result) {
                $scope.myAds=result.data;
                console.log(result.data);
            }, function(error) {
                deferred.reject(error);
            });
        return deferred.promise;
    };

    $scope.loadMyAdsPublished=function(){
        $scope.showMyAds();
        var deferred = $q.defer();
        var url='http://softuni-ads.azurewebsites.net/api/user/ads?status=published';
        var accessToken = $scope.userInfo.accessToken;
        var accHeader = 'Bearer '+accessToken;
        var headers={Authorization: accHeader};
        $http({method:'GET', url:url, headers:headers})
            .then(function(result) {
                $scope.myAds=result.data;
                console.log(result.data);
            }, function(error) {
                deferred.reject(error);
            });
        return deferred.promise;
    };

    $scope.deactivateMyAd=function(myAdId){
        var deferred = $q.defer();
        var url='http://softuni-ads.azurewebsites.net/api/user/ads/deactivate/'+myAdId;
        var accessToken = $scope.userInfo.accessToken;
        var accHeader = 'Bearer '+accessToken;
        var headers={Authorization: accHeader};
        $http({method:'PUT', url:url, headers:headers})
            .then(function(result) {
                $scope.loadMyAds();
                $scope.deactivateSccMsg=result.data.message;
                console.log(result)
            }, function(error) {
                $scope.deactivateErrMsg=error.data.message;
                deferred.reject(error);
            });
        return deferred.promise;
    };

    $scope.publishAgainMyAd=function(myAdId){
        var deferred = $q.defer();
        var url='http://softuni-ads.azurewebsites.net/api/user/ads/publishagain/'+myAdId;
        var accessToken = $scope.userInfo.accessToken;
        var accHeader = 'Bearer '+accessToken;
        var headers={Authorization: accHeader};
        $http({method:'PUT', url:url, headers:headers})
            .then(function(result) {
                $scope.loadMyAds();
                $scope.deactivateSccMsg=result.data.message;
                console.log(result)
            }, function(error) {
                $scope.deactivateErrMsg=error.data.message;
                deferred.reject(error);
            });
        return deferred.promise;
    };

    $scope.deleteMyAd=function(myAdId){
        var deferred = $q.defer();
        var url='http://softuni-ads.azurewebsites.net/api/user/ads/'+myAdId;
        var accessToken = $scope.userInfo.accessToken;
        var accHeader = 'Bearer '+accessToken;
        var headers={Authorization: accHeader};
        $http({method:'DELETE', url:url, headers:headers})
            .then(function(result) {
                $window.location = '#/user/ads';
                $scope.deleteSccMsg=error.data.message;
                $scope.loadMyAds();

                console.log(result)
            }, function(error) {
                $scope.deleteErrMsg=error.data.message;
                deferred.reject(error);
            });
        return deferred.promise;
    };

    $scope.confirmDeleteMyAd=function(myAdId){
        var deferred = $q.defer();
        var url='http://softuni-ads.azurewebsites.net/api/user/ads/'+myAdId;
        var accessToken = $scope.userInfo.accessToken;
        var accHeader = 'Bearer '+accessToken;
        var headers={Authorization: accHeader};
        $http({method:'GET', url:url, headers:headers})
            .then(function(result) {
                $scope.adToDelete=result.data;
                console.log(result)
            }, function(error) {
                deferred.reject(error);
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
        $scope.hideMyAds();
        var deferred = $q.defer();
        $http({method:'GET', url:'http://softuni-ads.azurewebsites.net/api/ads'})
            .then(function(result) {
                $scope.data=result.data;
            }, function(error) {
                deferred.reject(error);
            });
        return deferred.promise;
    }
});
