softUni.controller('SoftUniController', function($scope, mainData){
    mainData.getAllAds(function(resp){
        $scope.data=resp;
    });
    mainData.getAllTowns(function(resp){
        $scope.allTowns=resp;
    });
    mainData.getAllCategories(function(resp){
        $scope.allCategories=resp;
    });

});
