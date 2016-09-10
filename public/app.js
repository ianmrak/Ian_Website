angular.module("mySite",
[
  'ui.router',
  // Controllers
  'App.IllustrationController',
  'App.ProjectController',
  'App.ModelingController',
  'App.ResumeController',
  'App.ActiveItemController',
  // Services
  'App.IllustrationService',
  'App.ProjectService',
  'App.ModelingService',
  'App.PortfolioService',
  // Elements
  'App.ResumeElement',
  'App.LightboxElement',
  'App.BioElement',
  'App.NavbarElement',
  'App.FooterElement',
  // Attributes
  'App.PortfolioAttribute',
])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('home');
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'views/home_page.html'
  })
  .state('illustrations', {
    url: '/illustrations',
    controller: 'IllustrationController',
    templateUrl: 'views/illustrations.html'
  })
  .state('modeling', {
    url: '/modeling',
    controller: 'ModelingController',
    templateUrl: 'views/modeling.html'
  })
  .state('projects', {
    url: '/projects',
    controller: 'ProjectController',
    templateUrl: 'views/projects.html'
  })
  .state('about', {
    url: '/about',
    templateUrl: 'views/about.html'
  })
  .state('demo_reel', {
    url: '/demo_reel',
    templateUrl: 'views/demo_reel.html'
  })
  .state('firefly', {
    url: '/firefly',
    templateUrl: 'views/firefly.html'
  })
}]);
