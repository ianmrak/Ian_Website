angular.module('App.ResumeElement', [])

.directive('resume', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'views/partials/resume_full.html'
  };
});
