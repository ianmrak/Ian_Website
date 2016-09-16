angular.module('App.VideoAttribute', [])

.directive('videoCtrls',
function() {
  return {
    restrict: 'A',
    link: function($scope, e, attr) {
      $scope.status = 'paused';

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
    }
  }
});
