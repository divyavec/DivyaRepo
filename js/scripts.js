var app = angular.module('dummyApp', []);
app.controller('dummyController', function($scope, $http) {
    $http.get("baskets.json").then(function(response) {
        $scope.myData = response.data.products;
    });

$scope.simulatorEnabled = true;
$scope.optimizerEnabled = false;


$scope.enableSimulator = function() {
	$scope.optimizerEnabled = false;
	$scope.simulatorEnabled = true;
};

$scope.enableOptimizer = function() {
	$scope.optimizerEnabled = true;
	$scope.simulatorEnabled = false;
};

$scope.chartEnabled = false;
$scope.chartDisabled = true;


$scope.disableChart = function() {
	$scope.chartEnabled = false;
	$scope.chartDisabled = true;
};

$scope.enableChart = function() {
	$scope.chartEnabled = true;
	$scope.chartDisabled = false;
};

    
	
});