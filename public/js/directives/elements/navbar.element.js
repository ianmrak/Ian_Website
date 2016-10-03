(function() {
  'use strict'

  angular.module("mySite")
  .directive('navigation', navigation);

  function navigation() {
    return {
      restrict: 'EA',
      templateUrl: 'views/partials/navbar.html',
      link: function($scope, e, attr) {
        const menu = document.getElementById('nav-toggle')

        $scope.responsive = "";
        $scope.toggle = function() {
          if (!$scope.responsive) {
            $scope.responsive = "responsive";
          } else {
            $scope.responsive = "";
          }
        }
      }
    };
  };

})();
