angular.module('App.ActiveItemController', [])

.controller('ActiveItemController', ['$scope', 'PortfolioService', function($scope, portfolio) {
      $scope.lightbox = portfolio;
}]);
