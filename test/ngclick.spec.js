describe('It should respond to defined ng-click handlers', function() {
	var $compile, $rootScope, called, Mock;

	beforeEach(module('underscoreExample'));
	beforeEach(module('programmable'));

	beforeEach(inject(function($window, _$compile_, _$rootScope_) {
		$compile = _$compile_;
		$rootScope = _$rootScope_;

		Mock = {
			foo: function() { console.log('foo'); }
		};

		$window.view = {
			viewCompiler: 'UnderscoreCompiler',
			restrict: 'E',
			template: '<a ng-click="foo()">Foo</a>',
			controller: function($scope) {
				$scope.foo = function() {
					Mock.foo();
				};
			}
		};
	}));

	xit('should call a user defined link function', function() {
		spyOn(Mock, 'foo');

		var $scope = $rootScope.$new();
		var element = $compile('<programmable-view></programmable-view>')($scope);
		var anchor = element.find('a');

		anchor.triggerHandler('click');
		expect(Mock.foo).toHaveBeenCalled();
	});
});