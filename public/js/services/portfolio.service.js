(function() {
  'use strict';

  angular.module("mySite")
  .factory('PortfolioService', PortfolioService);

  function PortfolioService() {
    const itemManager = {
      activeItem: null,
      index: null,
      list: null
    }
    function setActiveItem(e, item, i) {
      e.preventDefault();
      itemManager.index = i;
      itemManager.activeItem = item;
    }
    function resetActiveItem() {
      itemManager.activeItem = null;
    }
    function nextItem(d) {
      let i = itemManager.index+=d;
      if (itemManager.list[i]) {
        itemManager.activeItem = itemManager.list[i];
      }
      else {
        i--;
      }
    }

    return {
      itemManager: itemManager,
      setActiveItem: setActiveItem,
      resetActiveItem: resetActiveItem,
      nextItem: nextItem
    }
  }

})();
