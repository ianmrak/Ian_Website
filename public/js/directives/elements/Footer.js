angular.module('App.FooterElement', [])

.directive('footer', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/partials/footer.html'
  };
});
