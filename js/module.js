var app = angular.module('myApp', ['ngMaterial']);

app.controller('mainCtrl', function($scope) {
	console.log('main')
});

app.controller('portfolioCtrl', function($scope) {
  $scope.imagePath = '/images/pa.png';
});