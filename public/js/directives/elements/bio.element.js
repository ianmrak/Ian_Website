(function() {
  'use strict'

  angular.module("mySite")
  .directive('aboutMe', aboutMe);

  function aboutMe() {
    return {
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: 'views/partials/bio.html'
    };
  };

})();
