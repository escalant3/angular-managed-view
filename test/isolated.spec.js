describe('View with isolated scopes', function() {
	var $compile, $rootScope, element, text;

	beforeEach(module('handlebarsIsolated'));
	beforeEach(module('underscoreIsolated'));

	beforeEach(inject(function(_$compile_, _$rootScope_) {
		$compile = _$compile_;
		$rootScope = _$rootScope_;
		$rootScope.foo = 'bar';
		$rootScope.user = {
			name: 'World'
		};
	}));
	
	it('should respect isolated scopes with handlebars', function() {
		var $scope = $rootScope.$new();
		element = $compile('<handlebars-isolated user="user"></handlebars-isolated>')($scope);
		text = element[0].innerHTML;
		expect(text.match(/Hello World!/)).toBeTruthy();
		expect(element.isolateScope().user).toBeTruthy();
		expect(element.isolateScope().bar).toBeFalsy();
	});

	it('should respect isolated scopes with underscore', function() {
		var $scope = $rootScope.$new();
		element = $compile('<underscore-isolated user="user"></underscore-isolated>')($scope);
		text = element[0].innerHTML;
		expect(text.match(/Hello World!/)).toBeTruthy();
		expect(element.isolateScope().user).toBeTruthy();
		expect(element.isolateScope().bar).toBeFalsy();
	});
});