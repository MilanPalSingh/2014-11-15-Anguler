angular.module('airline', [])
	.config(airlineRouter);

function airlineRouter ($routeProvider) {
	$routeProvider
		.when('/',{templateUrl: 'partials/destinations.html',
			controller: 'DestinationsCtrl'})
		.when('/flights',{template: '<h3>Flights</h3>',
			controller: 'FlightsCtrl'})
		.when('/reservations',{template: '<h3>Reservation</h3>',
			controller: 'ReservationsCtrl'});
		// .when('',{template: '<h2>Page Not Found</h2>'});
}