describe('User defined link function', function() {
	var $compile, $rootScope, called;

	beforeEach(module('underscoreExample'));
	beforeEach(module('programmable'));

	var Mock = {
		link: jasmine.createSpy('user link function')
	};

	beforeEach(inject(function($window, _$compile_, _$rootScope_) {
		$compile = _$compile_;
		$rootScope = _$rootScope_;

		$window.view = {
			viewCompiler: 'UnderscoreCompiler',
			restrict: 'E',
			template: '<span>Foo</span>',
			link: Mock.link
		};
	}));

	it('should call a user defined link function', function() {
		var $scope = $rootScope.$new();
		var element = $compile('<programmable-view></programmable-view>')($scope);
		expect(Mock.link).toHaveBeenCalled();
	});
});