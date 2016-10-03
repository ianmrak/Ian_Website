(function() {
  'use strict';

angular.module("mySite")
.controller('ActiveItemController', ['$scope', 'PortfolioService', activeItemController]);

function activeItemController($scope, portfolio) {
  const vm = this;

  vm.lb = portfolio.itemManager;
  vm.resetActiveItem = portfolio.resetActiveItem;
  vm.nextItem = portfolio.nextItem;
}

})();
