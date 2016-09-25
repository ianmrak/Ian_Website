angular.module('App.ProjectService', [])

.factory('ProjectService', [function() {
  var gitIcon = '../../assets/github.png';
  var projects = [
    {
      name: 'DriveUs',
      desc: 'Mobile-responsive ride comparison app utilizing the Lyft and Uber APIs',
      link: 'https://driveus.herokuapp.com',
      github: 'https://github.com/ianmrak/driveus',
      image: '../../assets/driveusLogo.png',
      team: '5 Engineers',
      deadline: '6 weeks',
      stack: 'JavaScript, React, Redux, Thunk, Node, Express, PostgreSQL, Webpack, SASS',
      contribution: [
        'Led construction of front-end filebase with React/Redux for effective data management',
        'Developed responsive application design for multiple browsers and devices',
        'Co-opted a radial search algorithm for optimized fare detection in the presence of surge pricing',
        'Utilized Thunk for the management of complex asynchronous state on the front-end'
      ]
    },
    {
      name: 'Spontaneo',
      desc: 'Activity suggestion app based on user location and review quality via Yelp',
      link: 'http://spontaneo.herokuapp.com',
      github: 'https://github.com/dial-up/spontaneo',
      image: '../../assets/spontaneo.png',
      team: '4 Engineers',
      deadline: '2 weeks',
      stack: 'JavaScript, Angular, jQuery, Node, Express, Grunt',
      contribution: [
        'Architected front-end structure and developed data linkage for search customization and API calls',
        'Designed UX for elegant simplicity and intuitive navigation',
        'Managed UI quality and visual consistency across multiple views and controls',
        'Incorporated Grunt for accelerated development and modularized developer code'
      ]
    },
    {
      name: 'Slidebox',
      desc: 'Slideshow app with easy storytelling tools and clean visual style',
      link: 'http://slidebox.herokuapp.com',
      github: 'https://github.com/ianmrak/slidebox',
      team: 'Solo project',
      deadline: '24 hours',
      stack: 'JavaScript, Angular, Node, Express',
      contribution: [
        'Produced with Angular and Express for flexible development and expansion',
        'Designed control schema to enable a targeted narrative while limiting navigation overhead',
        'Implemented ability to render slide data from local data sources'
      ]
    },
    {
      name: 'Game of Thrones Quiz',
      desc: 'Quiz app with multiple difficulty settings and game mechanics',
      link: 'https://ianmrak.github.io/got-quiz',
      github: 'https://github.com/ianmrak/got-quiz',
      image: '../../assets/got_icon.jpeg',
      team: 'Solo project',
      deadline: '3 days',
      stack: 'JavaScript, jQuery',
      contribution: [
        'Produced with Angular and Express for flexible development and expansion',
        'Designed control schema to enable a targeted narrative while limiting navigation overhead',
        'Implemented ability to render slide data from local data sources'
      ]
    },
    {
      name: 'This website',
      desc: 'A personal website for my software engineering and design projects',
      link: 'https://ianmrak.graphics',
      github: 'https://github.com/ianmrak/personal_website',
      team: 'Solo project',
      deadline: 'Ongoing',
      stack: 'JavaScript, Angular, Node, Express, SASS, Gulp',
      contribution: [
        'Everything!'
      ]
    }
  ];
  return {
    projects: projects,
    gitIcon: gitIcon
  }
}]);
