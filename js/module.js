var app = angular.module('myApp', ['ngMaterial', 'ngAnimate', 'duScroll']);

app.value('duScrollDuration', 1500);

app.controller('mainCtrl', function($scope) {
	console.log('main');
});

app.controller('portfolioCtrl', function($scope) {
  $scope.imagePath = '/images/pa.png';
});