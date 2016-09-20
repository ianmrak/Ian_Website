angular.module('App.IllustrationController', [])

.controller('IllustrationController', ['$scope', 'IllustrationService', function($scope, illustrations) {
  $scope.items = illustrations;
}]);
