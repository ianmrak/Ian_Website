angular.module('App.ProjectController', [])

.controller('ProjectController', ['$scope', 'ProjectService', function($scope, pService) {
  $scope.projects = pService.projects;
  $scope.gitIcon = pService.gitIcon;
  function prettyUrl(url) {
    return url.replace(/https?\/\//,'');
  }
}])
