angular.module('App.ModelingController', [])

.controller('ModelingController', ['$scope', 'ModelingService', function($scope, models) {
  const list = this;
  list.items = models;
}]);
