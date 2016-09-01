angular.module('App.LightboxElement', [])

.directive('lightbox', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/partials/lightbox.html',
    controller: 'ActiveItemController'
  };
});
