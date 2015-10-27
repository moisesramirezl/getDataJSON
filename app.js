(function() {
    var app = angular.module('tsApp', []);
    app.controller('TSController', function($scope, $http) {
        $scope.idSearch = '';
        $scope.searchData = function() {

            $scope.heading = [];
            $http({
                method: 'GET',
//                url: 'http://jsonplaceholder.typicode.com/users',
//                params: {id: $scope.idSearch}                
//                
                url: 'http://localhost:3000/api/cil/',
                params: {cil_id: $scope.idSearch}   

            }).success(function(data) {                
                $scope.heading = data; // response data 
            }).error(function(data) {
                console.log("failed");
                console.log(data);
            });
        };


    });
})();
