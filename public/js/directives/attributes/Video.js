angular.module('App.VideoAttribute', [])

.directive('videoCtrls',
function() {
  return {
    restrict: 'A',
    link: function($scope, e, attr) {
      $scope.playIcon = "playIcon playImage";

      $scope.play = function(e) {
        const videoPlayer = e.target;
        const playIcon = videoPlayer.nextElementSibling;
        if (!videoPlayer.paused) {
          videoPlayer.pause();
          videoPlayer.firstChild.nodeValue = 'Play';
          $scope.playIcon = "playIcon playImage";
        } else {
          videoPlayer.play();
          videoPlayer.firstChild.nodeValue = 'Pause';
          $scope.playIcon = "";
        }
      }
    }
  }
});
