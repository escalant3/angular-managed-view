describe('User defined link function', function() {
	var $compile, $rootScope, called;

	beforeEach(module('underscoreExample'));
	beforeEach(module('programmable'));

	var Mock = {
		link: function(scope, elem, attrs) {
			called = 1;
		}
	};

	beforeEach(inject(function($window, _$compile_, _$rootScope_) {
		$compile = _$compile_;
		$rootScope = _$rootScope_;
		called = 0;

		$window.view = {
			viewCompiler: 'UnderscoreCompiler',
			restrict: 'E',
			template: '<span>Foo</span>',
			link: Mock.link
		};
	}));

	it('should call a user defined link function', function() {
		var $scope = $rootScope.$new();
		expect(called).toBe(0);
		var element = $compile('<programmable-view></programmable-view>')($scope);
		expect(called).toBe(1);
	});
});