(function() {
  'use strict'

  angular.module("mySite")
  .component('portfolioItem', {
    templateUrl: 'views/portfolio.html',
    controller: 'PortfolioController',
    controllerAs: 'vm'
  });

})();
