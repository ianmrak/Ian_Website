angular.module('App.PortfolioService', [])

.factory('PortfolioService', function() {
  var activeItem;
  var index;


  return {
    activeItem: activeItem,
    index: index
  }
});
