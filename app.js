(function() {
    var app = angular.module('tsApp', []);
    app.controller('TSController', function($scope, $http) {
        $scope.idSearch = '';
        $scope.searchData = function() {

            $scope.heading = [];
            $http({
                method: 'GET',
                url: 'http://jsonplaceholder.typicode.com/users',
                params: {id: $scope.idSearch}                
            }).success(function(data) {
                console.log("pass");
                $scope.heading = data; // response data 
            }).error(function(data) {
                console.log("failed");
            });
        };


    });
})();
