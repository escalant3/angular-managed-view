describe('Basic View', function() {
	var $compile, $scope, element, text;

	beforeEach(module('handlebarsExample'));
	beforeEach(module('underscoreExample'));

	beforeEach(inject(function(_$compile_, $rootScope) {
		$compile = _$compile_;
		$scope = $rootScope.$new();
		$scope.name = 'World!';
	}));

	it('should render the name in the context without setting any watchers - handlebars', function() {
		element = $compile('<div basic-hbs></div>')($scope);
		text = element[0].innerHTML;
		expect(text.match(/Hello World!/)).toBeTruthy();
		expect($scope.$$watchers).toBeFalsy();

	});

	it('should render the name in the context without setting any watchers - underscore', function() {
		element = $compile('<div basic-underscore></div>')($scope);
		text = element[0].innerHTML;
		expect(text.match(/Hello World!/)).toBeTruthy();
		expect($scope.$$watchers).toBeFalsy();
	});
});
