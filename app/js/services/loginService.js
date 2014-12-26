softUni.factory('loginService', function($http){
    return{
        login:function(user){
            var $promise=$http.post('http://softuni-ads.azurewebsites.net/api/user/login', user);
            $promise.then(function(data) {
                    console.log('success login');
                }, function(msg){
                    console.log('error login');
                }
            );
        }
    }
});