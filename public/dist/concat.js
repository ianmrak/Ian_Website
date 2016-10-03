'use strict';

angular.module("mySite", ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('home');
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'views/home_page.html'
  }).state('illustrations', {
    url: '/illustrations',
    templateUrl: 'views/portfolio.html',
    controller: 'PortfolioController',
    controllerAs: 'vm',
    resolve: {
      items: ['IllustrationService', function (illustrations) {
        return illustrations;
      }]
    }
  }).state('modeling', {
    url: '/modeling',
    templateUrl: 'views/portfolio.html',
    controller: 'PortfolioController',
    controllerAs: 'vm',
    resolve: {
      items: ['ModelingService', function (models) {
        return models;
      }]
    }
  }).state('projects', {
    url: '/projects',
    controller: 'ProjectController',
    templateUrl: 'views/projects.html'
  }).state('about', {
    url: '/about',
    templateUrl: 'views/about.html'
  }).state('demo_reel', {
    url: '/demo_reel',
    template: '<demo-reel>'
  }).state('firefly', {
    url: '/firefly',
    templateUrl: 'views/firefly.html'
  });
}]);
'use strict';

(function () {
  'use strict';

  angular.module("mySite").component('activeItem', {
    templateUrl: 'views/partials/lightbox.html',
    controller: 'ActiveItemController',
    controllerAs: 'vm'
  });
})();
'use strict';

(function () {
  'use strict';

  angular.module("mySite").component('demoReel', {
    templateUrl: 'views/demo_reel.html',
    controller: 'DemoReelController',
    controllerAs: 'vm'
  });
})();
'use strict';

(function () {
  'use strict';

  angular.module("mySite").component('portfolioItem', {
    templateUrl: 'views/portfolio.html',
    controller: 'PortfolioController',
    controllerAs: 'vm'
  });
})();
'use strict';

(function () {
  'use strict';

  angular.module("mySite").factory('DemoReelService', DemoReelService);

  function DemoReelService() {
    return [{
      title: 'Shot 1 - Firefly Scene',
      notes: ['Scene from Thesis short film.', 'Contribution: All done by myself.']
    }, {
      title: 'Shot 2 - Dialogue Scene',
      notes: ['Dialogue and lip-sync exercise.', 'Contribution: Animation, Scene Setup, and Rendering', 'Rig and Props - Provided by the AAU']
    }, {
      title: 'Shot 3 - What\'s in the Box?',
      notes: ['Emotion exercise.', 'Contribution: Animation, Scene Setup, and Rendering', 'Rig and Props provided by the AAU']
    }, {
      title: 'Shot 4 - Evil Laugh',
      notes: ['Facial Expression exercise.', 'Contribution: Animation and Rendering', 'Rig provided by the AAU']
    }, {
      title: 'Shot 5 - Firefly Scene',
      notes: ['Scene from Thesis short film.', 'Contribution: All done by myself']
    }, {
      title: 'Shot 6 - Fleeing the Bathroom',
      notes: ['Silent decision making exercise.', 'Contribution: Animation, Scene Setup, and Rendering', 'Rig and Props provided by the AAU']
    }, {
      title: 'Shot 7 - In the Spotlight',
      notes: ['Embarrassed emotion exercise.', 'Contribution: Animation and Rendering', 'Rig provided by the AAU']
    }, {
      title: 'Shot 8 - Motion Capture Polish',
      notes: ['Contribution: Animation polish, Scene Setup, and Rendering', 'Rig and MoCap data provided by the AAU', 'Props from Turbosquid.com']
    }, {
      title: 'Shot 9 - Cube Animation',
      notes: ['Animation test for 2015 GEICO Bassmaster Classic.', 'Contribution: Animation and Rendering']
    }, {
      title: 'Shot 10 - Firefly Scene',
      notes: ['Scene from Thesis short film.', 'Contribution: All done by myself']
    }, {
      title: 'Shot 11 - Creature Animation',
      notes: ['Creature animation exercise', 'Contribution: Animation, Scene Setup, and Rendering', 'Rig is the \'Nico\' character']
    }, {
      title: 'Shot 12 - Fish Swim test',
      notes: ['Underwater animation exercise.', 'Contribution: Rigging, Animation, Scene Setup, and Rendering', 'Model provided by Bruce Cash.']
    }, {
      title: 'Shot 13 - Firefly Scene',
      notes: ['Scene from Thesis short film.', 'Contribution: All done by myself']
    }, {
      title: 'Shot 14 - Horse Animation',
      notes: ['Quadruped motion exercise.', 'Contribution: Animation, Scene Setup, and Rendering', 'Rigs provided by the AAU.']
    }, {
      title: 'Shot 15 - Firefly Scene',
      notes: ['Scene from Thesis short film.', 'Contribution: All done by myself']
    }, {
      title: 'Shot 16 - Pick it Up',
      notes: ['Weight exercise.', 'Contribution: Animation and Scene Setup', 'Rig provided by the AAU.']
    }, {
      title: 'Shot 17 - Dialogue Scene',
      notes: ['Dramatic dialogue exercise.', 'Contribution: Animation, Scene Setup, and Rendering', 'Rig and Props provided by the AAU.']
    }, {
      title: 'Shot 18 - Firefly Scene',
      notes: ['Scene from Thesis short film.', 'Contribution: All done by myself']
    }];
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module("mySite").service('IllustrationService', IllustrationService);

  function IllustrationService() {
    var path = '../../assets';
    return [{
      image: path + '/image/FF_water.jpg',
      title: 'Firefly Concept - Original'
    }, {
      image: path + '/image/FF_chase.jpg',
      title: 'Firefly Concept - Chasing Lights'
    }, {
      image: path + '/image/FF_discovery.jpg',
      title: 'Firefly Concept - Discovery'
    }, {
      image: path + '/image/FF_departure.jpg',
      title: 'Firefly Concept - Departure'
    }, {
      image: path + '/image/FF_moon.jpg',
      title: 'Firefly Concept - Moon'
    }, {
      image: path + '/image/FF_lit.png',
      title: 'Firefly Concept - Light'
    }, {
      image: path + '/image/FF_lineup.jpg',
      title: 'Firefly Character Lineup'
    }, {
      image: path + '/image/FF_title.jpg',
      title: 'Firefly Title'
    }, {
      image: path + '/image/FF_poster.jpg',
      title: 'Firefly Poster'
    }, {
      image: path + '/image/Desert_concept.jpg',
      title: 'Firefly - Desert Concept'
    }, {
      image: path + '/image/Me_front.jpg',
      title: 'Self - Front View'
    }, {
      image: path + '/image/Me_back.jpg',
      title: 'Self - Back View'
    }, {
      image: path + '/image/Me_sit.jpg',
      title: 'Self - Sitting'
    }, {
      image: path + '/image/Lauren.jpg',
      title: 'Portrait - Lauren'
    }, {
      image: path + '/image/IanLauren.jpg',
      title: 'Portrait - Ian and Lauren'
    }, {
      image: path + '/image/Mrak_Unity1.png',
      title: 'Unity Environment 1'
    }, {
      image: path + '/image/Mrak_Unity2.png',
      title: 'Unity Environment 2'
    }, {
      image: path + '/image/Mrak_Unity3.jpg',
      title: 'Unity Environment 3'
    }, {
      image: path + '/image/Portal.jpg',
      title: '2 Point Perspective - Portal'
    }, {
      image: path + '/image/Balrog.jpg',
      title: '2 Point Perspective - Balrog'
    }, {
      image: path + '/image/Snow_White.jpg',
      title: '2 Point Perspective - Snow White'
    }, {
      image: path + '/image/SK_couch.jpg',
      title: 'Wedding Sketch - Family'
    }, {
      image: path + '/image/SK_pipper.jpg',
      title: 'Wedding Sketch - Pipper'
    }, {
      image: path + '/image/SK_slater.jpg',
      title: 'Wedding Sketch - Slater'
    }, {
      image: path + '/image/SK_us.jpg',
      title: 'Wedding Sketch - Us'
    }];
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module("mySite").service('ModelingService', ModelingService);

  function ModelingService() {
    var path = '../../assets';
    return [{
      isVideo: true,
      image: path + '/image/Creature_Animation.png',
      video: path + '/video/Creature_Animation.mp4',
      title: 'Creature Animation'
    }, {
      isVideo: true,
      image: path + '/image/Bass_transition_thumb.jpg',
      video: path + '/video/BassLive_60.mp4',
      title: 'Bassmaster Elite Series - Transition'
    }, {
      isVideo: true,
      image: path + '/image/Bass_intro_thumb.jpg',
      video: path + '/video/BassLive_Intro.mp4',
      title: 'Bassmaster Elite Series - Introduction'
    }, {
      isVideo: true,
      image: path + '/image/Bass_shatter_thumb.jpg',
      video: path + '/video/BassLive_Shatter.mp4',
      title: 'Bassmaster Elite Series - Shatter'
    }, {
      isVideo: true,
      image: path + '/image/MoCap.jpg',
      video: path + '/video/MoCap.mp4',
      title: 'Motion Capture Polish'
    }, {
      isVideo: true,
      image: path + '/image/GTT_thumb.jpg',
      video: path + '/video/Mrak_GTT_ad.mp4',
      title: 'GTT Commerical'
    }, {
      isVideo: true,
      image: path + '/image/Thorncrown.png',
      video: path + '/video/Thorncrown.mp4',
      title: 'Thorncrown Chapel'
    }, {
      isVideo: true,
      image: path + '/image/Smallmouth_thumb.jpg',
      video: path + '/video/Smallmouth-Bass-Model-HD.mp4',
      title: 'Smallmouth Bass'
    }, {
      isVideo: true,
      image: path + '/image/Angry_emotion.png',
      video: path + '/video/Angry_emotion.mp4',
      title: 'Emotion - Anger'
    }, {
      isVideo: true,
      image: path + '/image/Evil_emotion.png',
      video: path + '/video/Evil_emotion.mp4',
      title: 'Emotion - Evil'
    }, {
      isVideo: true,
      image: path + '/image/Dramatic_audio_thumb.jpg',
      video: path + '/video/Dramatic_audio.mp4',
      title: 'Dramatic Dialogue'
    }, {
      isVideo: true,
      image: path + '/image/Funny_audio_thumb.jpg',
      video: path + '/video/Funny_audio.mp4',
      title: 'Funny Dialogue'
    }, {
      isVideo: true,
      image: path + '/image/AR_transition_thumb.jpg',
      video: path + '/video/AR_transition.mp4',
      title: 'Arkansas Team Transition'
    }, {
      isVideo: true,
      image: path + '/image/strike_king.jpg',
      video: path + '/video/Umbrella.mp4',
      title: 'Strike King Lure - Ad'
    }, {
      isVideo: true,
      image: path + '/image/Mercer_lure.jpg',
      video: path + '/video/SK_lure.mp4',
      title: 'Umbrella Lure - Ad'
    }, {
      isVideo: true,
      image: path + '/image/Pit_Boss.jpg',
      video: path + '/video/Pit_Boss_lure.mp4',
      title: 'Pit Boss Lure - Shader Rendering'
    }];
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module("mySite").factory('PortfolioService', PortfolioService);

  function PortfolioService() {
    var itemManager = {
      activeItem: null,
      index: null,
      list: null
    };
    function setActiveItem(e, item, i) {
      e.preventDefault();
      itemManager.index = i;
      itemManager.activeItem = item;
    }
    function resetActiveItem() {
      itemManager.activeItem = null;
    }
    function nextItem(d) {
      var i = itemManager.index += d;
      if (itemManager.list[i]) {
        itemManager.activeItem = itemManager.list[i];
      } else {
        i--;
      }
    }

    return {
      itemManager: itemManager,
      setActiveItem: setActiveItem,
      resetActiveItem: resetActiveItem,
      nextItem: nextItem
    };
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module("mySite").factory('ProjectService', ProjectService);

  function ProjectService() {
    var gitIcon = '../../assets/github.png';
    var projects = [{
      name: 'DriveUs',
      desc: 'Mobile-responsive ride comparison app utilizing the Lyft and Uber APIs',
      link: 'https://driveus.herokuapp.com',
      github: 'https://github.com/ianmrak/driveus',
      image: '../../assets/driveusLogo.png',
      team: '5 Engineers',
      deadline: '6 weeks',
      stack: 'JavaScript, React, Redux, Thunk, Node, Express, PostgreSQL, Webpack, SASS',
      contribution: ['Led construction of front-end filebase with React/Redux for effective data management', 'Developed responsive application design for multiple browsers and devices', 'Co-opted a radial search algorithm for optimized fare detection in the presence of surge pricing', 'Utilized Thunk for the management of complex asynchronous state on the front-end']
    }, {
      name: 'Spontaneo',
      desc: 'Activity suggestion app based on user location and review quality via Yelp',
      link: 'http://spontaneo.herokuapp.com',
      github: 'https://github.com/dial-up/spontaneo',
      image: '../../assets/spontaneo.png',
      team: '4 Engineers',
      deadline: '2 weeks',
      stack: 'JavaScript, Angular, jQuery, Node, Express, Grunt',
      contribution: ['Architected front-end structure and developed data linkage for search customization and API calls', 'Designed UX for elegant simplicity and intuitive navigation', 'Managed UI quality and visual consistency across multiple views and controls', 'Incorporated Grunt for accelerated development and modularized developer code']
    }, {
      name: 'Slidebox',
      desc: 'Slideshow app with easy storytelling tools and clean visual style',
      link: 'http://slidebox.herokuapp.com',
      github: 'https://github.com/ianmrak/slidebox',
      team: 'Solo project',
      deadline: '24 hours',
      stack: 'JavaScript, Angular, Node, Express',
      contribution: ['Produced with Angular and Express for flexible development and expansion', 'Designed control schema to enable a targeted narrative while limiting navigation overhead', 'Implemented ability to render slide data from local data sources']
    }, {
      name: 'Game of Thrones Quiz',
      desc: 'Quiz app with multiple difficulty settings and game mechanics',
      link: 'https://ianmrak.github.io/got-quiz',
      github: 'https://github.com/ianmrak/got-quiz',
      image: '../../assets/got_icon.jpeg',
      team: 'Solo project',
      deadline: '3 days',
      stack: 'JavaScript, jQuery',
      contribution: ['Produced with Angular and Express for flexible development and expansion', 'Designed control schema to enable a targeted narrative while limiting navigation overhead', 'Implemented ability to render slide data from local data sources']
    }, {
      name: 'This website',
      desc: 'A personal website for my software engineering and design projects',
      link: 'https://ianmrak.graphics',
      github: 'https://github.com/ianmrak/personal_website',
      team: 'Solo project',
      deadline: 'Ongoing',
      stack: 'JavaScript, Angular, Node, Express, SASS, Gulp',
      contribution: ['Everything!']
    }];
    return {
      projects: projects,
      gitIcon: gitIcon
    };
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module("mySite").controller('ActiveItemController', ['$scope', 'PortfolioService', activeItemController]);

  function activeItemController($scope, portfolio) {
    var vm = this;

    vm.lb = portfolio.itemManager;
    vm.resetActiveItem = portfolio.resetActiveItem;
    vm.nextItem = portfolio.nextItem;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module("mySite").controller('DemoReelController', ['PortfolioService', 'DemoReelService', activeItemController]);

  function activeItemController(portfolio, shots) {
    var vm = this;

    vm.playIcon = "playIcon";
    vm.lb = portfolio.itemManager;
    vm.shots = shots;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module("mySite").controller('PortfolioController', ['PortfolioService', 'items', portfolioController]);

  function portfolioController(portfolio, items) {
    var vm = this;

    vm.items = items;
    vm.setActiveItem = portfolio.setActiveItem;
    portfolio.itemManager.list = vm.items;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module("mySite").controller('ProjectController', ['$scope', 'ProjectService', function ($scope, pService) {
    $scope.projects = pService.projects;
    $scope.gitIcon = pService.gitIcon;
    $scope.prettyUrl = function (url) {
      return url.replace(/.*?:\/\//g, "");
    };
  }]);
})();
'use strict';

(function () {
  'use strict';

  angular.module("mySite").controller('ResumeController', ['$scope', function ($scope) {
    $scope.email = 'ianmrak@gmail.com';
  }]);
})();
'use strict';

(function () {
  'use strict';

  angular.module("mySite").directive('portfolioCtrls', ['$state', 'PortfolioService', 'IllustrationService', 'ModelingService', portfolioCtrls]);

  function portfolioCtrls($state, portfolio, illustrations, models) {
    return {
      link: function link($scope, e, attr) {
        $scope.setActiveItem = function (e, item, index) {
          e.preventDefault();
          portfolio.index = index;
          portfolio.activeItem = item;
          portfolio.list = $scope.items;
        };
        $scope.resetActiveItem = function () {
          portfolio.activeItem = null;
          $scope.index = null;
        };
        $scope.nextItem = function (d) {
          var i = portfolio.index += d;
          if (portfolio.list[i]) {
            portfolio.activeItem = portfolio.list[i];
          } else {
            i--;
          }
        };
      }
    };
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module("mySite").directive('videoCtrls', videoCtrls);

  function videoCtrls() {
    return {
      restrict: 'A',
      link: function link($scope, e, attr) {
        $scope.playIcon = "playIcon";
        $scope.play = function (e) {
          var videoPlayer = e.target;
          var playIcon = videoPlayer.nextElementSibling;
          if (!videoPlayer.paused) {
            videoPlayer.pause();
            videoPlayer.firstChild.nodeValue = 'Play';
            $scope.playIcon = "playIcon";
          } else {
            videoPlayer.play();
            videoPlayer.firstChild.nodeValue = 'Pause';
            $scope.playIcon = "";
          }
        };
      }
    };
  };
})();
'use strict';

(function () {
  'use strict';

  angular.module("mySite").directive('aboutMe', aboutMe);

  function aboutMe() {
    return {
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: 'views/partials/bio.html'
    };
  };
})();
'use strict';

(function () {
  'use strict';

  angular.module("mySite").directive('footer', footer);

  function footer() {
    return {
      restrict: 'E',
      templateUrl: 'views/partials/footer.html'
    };
  };
})();
'use strict';

(function () {
  'use strict';

  angular.module("mySite").directive('navigation', navigation);

  function navigation() {
    return {
      restrict: 'EA',
      templateUrl: 'views/partials/navbar.html',
      link: function link($scope, e, attr) {
        var menu = document.getElementById('nav-toggle');

        $scope.responsive = "";
        $scope.toggle = function () {
          if (!$scope.responsive) {
            $scope.responsive = "responsive";
          } else {
            $scope.responsive = "";
          }
        };
      }
    };
  };
})();
'use strict';

(function () {
  'use strict';

  angular.module("mySite").directive('resume', resume);

  function resume() {
    return {
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: 'views/partials/resume_full.html'
    };
  };
})();