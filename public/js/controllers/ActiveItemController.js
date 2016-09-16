angular.module('App.ActiveItemController', [])

.controller('ActiveItemController', ['$scope', 'PortfolioService', function($scope, portfolio) {
  $scope.lightbox = portfolio;

  $scope.play = function(e) {
    const videoPlayer = e.target;
    if (!videoPlayer.paused) {
      videoPlayer.pause();
      videoPlayer.firstChild.nodeValue = 'Play';
    } else {
      videoPlayer.play();
      videoPlayer.firstChild.nodeValue = 'Pause';
    }
  }
}]);
