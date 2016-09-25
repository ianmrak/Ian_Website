angular.module('App.IllustrationController', [])

.controller('IllustrationController', ['IllustrationService', function(illustrations) {
  const list = this;
  list.items = illustrations;
}]);
