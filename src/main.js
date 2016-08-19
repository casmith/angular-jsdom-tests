'use strict';

(function () {
	console.log('bootstrapping');
	var angular = require('angular');

	var app = angular.module('app', []);

	app.controller('MainController', ['$scope', function ($scope) {
		console.log('controller');
		$scope.message = 'Hello';
	}]);

	//angular.bootstrap(window.document, ['app']);

	console.log('bootstrapped');
})();