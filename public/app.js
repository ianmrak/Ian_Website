angular.module("mySite", ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('home');
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'views/home_page.html'
  })
  .state('illustrations', {
    url: '/illustrations',
    templateUrl: 'views/portfolio.html',
    controller: 'PortfolioController',
    controllerAs: 'vm',
    resolve: {
      items: ['IllustrationService',
      function(illustrations) {
        return illustrations;
      }]
    }
  })
  .state('modeling', {
    url: '/modeling',
    templateUrl: 'views/portfolio.html',
    controller: 'PortfolioController',
    controllerAs: 'vm',
    resolve: {
      items: ['ModelingService',
      function(models) {
        return models;
      }]
    }
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
    template: '<demo-reel>'
  })
  .state('firefly', {
    url: '/firefly',
    templateUrl: 'views/firefly.html'
  })
}]);
