angular.module('App.Footer', [])

.directive('footer', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/partials/footer.html'
  };
});
