(function() {
  'use strict'

  angular.module("mySite")
  .directive('resume', resume);

  function resume() {
    return {
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: 'views/partials/resume_full.html'
    };
  };

})();
