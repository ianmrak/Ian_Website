angular.module('App.Navbar', [])

.directive('navigation', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/partials/navbar.html'
  };
});
