angular.module('App.ProjectController', [])

.controller('ProjectController', ['$scope', 'ProjectService', function($scope, projects) {
  $scope.projects = projects;
}])
