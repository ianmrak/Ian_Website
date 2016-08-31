angular.module('App.ModelingController', [])

.controller('ModelingController', ['$scope', 'ModelingService', function($scope, modeling) {
  $scope.items = modeling;

  $('#lightbox').live('click', function() { //must use live, as the lightbox element is inserted into the DOM
 		$('#lightbox').hide();
 	});

  $scope.lightbox_trigger = function(e, item) {
 		//prevent default action (hyperlink)
 		e.preventDefault();
 		//Get clicked link href
 	// 	var image_href = e.currentTarget.href;
    var template;

    if (item.isVideo === true) {
      template = '<video controls src="' + item.link +'" />';
    } else {
      template = '<img src="' + item.link +'">';

    }
 		/*
 		If the lightbox window HTML already exists in document,
 		change the img src to to match the href of whatever link was clicked

 		If the lightbox window HTML doesn't exists, create it and insert it.
 		(This will only happen the first time around)
 		*/
 		if ($('#lightbox').length > 0) { // #lightbox exists
 			//place href as img src value
 			$('#content').html('<img src="' + item.link + '" />');
 			//show lightbox window - you could use .show('fast') for a transition
 			$('#lightbox').fadeIn(350);
 		}
 		else { //#lightbox does not exist - create and insert (runs 1st time only)
 			//create HTML markup for lightbox window
 			var lightbox = '' +
 			'<div id="lightbox">' +
 				'<div id="content">' + //insert clicked link's href into img src
          template +
        '</div>' +
 			'</div>';
 			//insert lightbox HTML into page
 			$('body').append(lightbox);
 		}
 	};
}]);
