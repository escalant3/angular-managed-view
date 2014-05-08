describe('It should respond to defined ng-click handlers', function() {
	var $compile, $rootScope, called, Mock;

	beforeEach(module('underscoreExample'));
	beforeEach(module('programmable'));

	beforeEach(inject(function($window, _$compile_, _$rootScope_) {
		$compile = _$compile_;
		$rootScope = _$rootScope_;

		Mock = {
			foo: jasmine.createSpy('ng-click handler')
		};

		$window.view = {
			viewCompiler: 'UnderscoreCompiler',
			restrict: 'E',
			template: '<a ng-click="foo()">Foo</a>',
			controller: function($scope) {
				$scope.foo = Mock.foo;
			}
		};
	}));

	it('should call a user defined link function', function() {
		var $scope = $rootScope.$new();
		var element = $compile('<programmable-view></programmable-view>')($scope);

		element.find('a').click();
		expect(Mock.foo).toHaveBeenCalled();
	});
});