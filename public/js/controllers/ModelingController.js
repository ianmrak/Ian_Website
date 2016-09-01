angular.module('App.ModelingController', [])

.controller('ModelingController', ['$scope', 'ModelingService', function($scope, models) {
  $scope.items = models;
}]);
