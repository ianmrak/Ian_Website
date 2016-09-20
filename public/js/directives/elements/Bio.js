angular.module('App.BioElement', [])

.directive('aboutMe', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'views/partials/bio.html'
  };
});
