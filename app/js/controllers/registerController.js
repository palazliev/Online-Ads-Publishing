softUni.controller('registerController', function ($scope, registrationService) {
    $scope.register=function(regUser, selected){
        registrationService.register(regUser, selected);
    };
});
