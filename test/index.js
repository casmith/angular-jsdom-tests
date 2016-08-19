'use strict';

var angular = require('angular');
require('angular-mocks');
require('../src/main');

describe('test', function () {
	beforeEach(angular.mock.module('app'));
	it ('should be defined', inject(function ($controller, $rootScope) {
		$controller('MainController', {$scope: $rootScope});
		expect($rootScope.message).toBe('Hello');
	}));
});