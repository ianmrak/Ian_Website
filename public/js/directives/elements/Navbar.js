angular.module('App.NavbarElement', [])

.directive('navigation', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/partials/navbar.html'
  };
});
