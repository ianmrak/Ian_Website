angular.module('App.ResumeDirective', [])

.directive('resume', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/resume.html'
  };
});
