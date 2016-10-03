(function() {
  'use strict'

  angular.module("mySite")
  .directive('footer', footer);

  function footer() {
    return {
      restrict: 'E',
      templateUrl: 'views/partials/footer.html'
    };
  };

})();
