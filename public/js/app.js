angular.module("mySite",
[
  'ui.router',
  'App.IllustrationsController',
  'App.ModelingController',
  'App.ResumeController',
  'App.ResumeDirective',
  'App.IllustrationsService',
  'App.ModelingService'
])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('resume', {
      controller: 'ResumeController',
      templateUrl: 'views/resume.html'
    })
    .state('illustrations', {
      controller: 'IllustrationsController',
      templateUrl: 'views/illustrations.html'
    })
    .state('modeling', {
      controller: 'ModelingController',
      templateUrl: 'views/modeling.html'
    })
    .state('aboutme', {
      templateUrl: 'views/aboutme.html'
    })
}]);
