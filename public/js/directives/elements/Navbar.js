angular.module('App.NavbarElement', [])

.directive('navigation', function() {
  return {
    restrict: 'EA',
    templateUrl: 'views/partials/navbar.html',
    link: function($scope, e, attr) {
      $scope.responsive = "";
      const menu = document.getElementById('nav-toggle')
      $scope.toggle = function() {
        if (!$scope.responsive) {
          $scope.responsive = "responsive";
        } else {
          $scope.responsive = "";
        }
      }

      $scope.collapse = function() {
        console.log('got here!');
      }
    }
  };
});
