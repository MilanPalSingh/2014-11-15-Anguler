function DestinationsCtrl($scope){
	$scope.setActive('destinations');

	$scope.sidebarURL = 'partials/airport.html'
	$scope.formURL = 'partials/form.html'
	$scope.currentAirport = null;

	$scope.setAirport = function(code){
		$scope.currentAirport = $scope.airports[code]; 
	};
}