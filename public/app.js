angular.module("mySite",
[
  'ui.router',
  'App.IllustrationsController',
  'App.ModelingController',
  'App.ResumeController',
  'App.ResumeDirective',
  'App.IllustrationsService',
  'App.ModelingService',
  'App.Navbar',
  'App.Footer'
])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: ''
    })
    .state('resume', {
      url: '/resume',
      controller: 'ResumeController',
      templateUrl: 'views/resume.html'
    })
    .state('illustrations', {
      url: '/illustrations',
      controller: 'IllustrationsController',
      templateUrl: 'views/illustrations.html'
    })
    .state('modeling', {
      url: '/modeling',
      controller: 'ModelingController',
      templateUrl: 'views/modeling.html'
    })
    .state('aboutme', {
      url: '/aboutme',
      templateUrl: 'views/aboutme.html'
    })
}]);
