'use strict';

angular.module('masterStumblefuzzApp', ['ngResource', 'ngRoute', 'ngCookies'])
.config(function($routeProvider, $locationProvider){
	
	$locationProvider.html5Mode(true);

	$routeProvider
	.when('/', {
		templateUrl: 'partials/main',
		controller: 'MainCtrl'
	})
	.when('/login', {
		templateUrl: 'partials/login',
		controller: 'LoginCtrl'
	})
	.when('/settings', {
		templateUrl: 'partials/settings',
		controller: 'SettingsCtrl'
	})
	.when('/signup', {
		templateUrl: 'partials/signup',
		controller: 'SignupCtrl'
	})
	.otherwise({
		rediretTo: '/'
	});
});