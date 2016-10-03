(function() {
  'use strict'
  
  angular.module("mySite")
  .component('activeItem', {
    templateUrl: 'views/partials/lightbox.html',
    controller: 'ActiveItemController',
    controllerAs: 'vm'
  });

})();
