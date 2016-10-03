(function() {
  'use strict'

  angular.module("mySite")
  .directive('videoCtrls', videoCtrls);

  function videoCtrls() {
    return {
      restrict: 'A',
      link: function($scope, e, attr) {
        $scope.playIcon = "playIcon";
        $scope.play = function(e) {
          const videoPlayer = e.target;
          const playIcon = videoPlayer.nextElementSibling;
          if (!videoPlayer.paused) {
            videoPlayer.pause();
            videoPlayer.firstChild.nodeValue = 'Play';
            $scope.playIcon = "playIcon";
          } else {
            videoPlayer.play();
            videoPlayer.firstChild.nodeValue = 'Pause';
            $scope.playIcon = "";
          }
        }
      }
    }
  };

})();
