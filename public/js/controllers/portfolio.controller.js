(function() {
  'use strict';

angular.module("mySite")
.controller('PortfolioController', ['PortfolioService', 'items', portfolioController]);

function portfolioController(portfolio, items) {
  const vm = this;

  vm.items = items;
  vm.setActiveItem = portfolio.setActiveItem;
  portfolio.itemManager.list = vm.items;
}

})();
