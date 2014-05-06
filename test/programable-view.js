angular.module('programmable', [])
.managedView('programmableView', function($window) {
	return $window.view;
});