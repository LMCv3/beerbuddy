angular.module('app',[]);

angular.module('app').controller('testCtrl', function($scope) {
	$scope.beers = [{
		title: 'Roy\'s Brown Porter',
		description: 'A delicious porter that wants to be a brown ale when it grows up. But I like you just the way you are.'
	}, {
		title: 'Pumpkin Pie Ale',
		description: 'Take a Pumpkin Pie, stuff it into a glass, make it a beer. That\'s what we\'ve done here. Limited Run'
	}]
});