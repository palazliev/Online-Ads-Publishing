softUni.controller('loginController', function ($scope, loginService) {
    $scope.currentUser={};
    $scope.login=function(user){
        loginService.login(user);
    }
});