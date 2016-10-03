(function() {
  'use strict';

angular.module("mySite")
.controller('DemoReelController', ['PortfolioService', 'DemoReelService', activeItemController]);

function activeItemController(portfolio, shots) {
  const vm = this;

  vm.playIcon = "playIcon";
  vm.lb = portfolio.itemManager;
  vm.shots = shots;
}

})();
