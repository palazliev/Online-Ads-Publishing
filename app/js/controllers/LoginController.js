softUni.controller('loginController', function ($scope, loginService, $location) {
    $scope.login=function(user){
        loginService.login(user);
    };
});