var app = angular.module("mySite", ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/resume', {
      controller: 'ResumeController',
      templateUrl: 'views/resume.html'
    })
    .when('/illustrations', {
      controller: 'IllustrationsController',
      templateUrl: 'views/illustrations.html'
    })
    .when('/modeling', {
      controller: 'ModelingController',
      templateUrl: 'views/modeling.html'
    })
    .when('/aboutme', {
      templateUrl: 'views/aboutme.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
