angular.module('App.IllustrationService', [])

.service('IllustrationService', [function() {
  const path = '../../assets'
  return [{
    image: `${path}/image/FF_water.jpg`,
    title: 'Firefly Concept - Original'
  },{
    image: `${path}/image/FF_chase.jpg`,
    title: 'Firefly Concept - Chasing Lights'
  },{
    image: `${path}/image/FF_discovery.jpg`,
    title: 'Firefly Concept - Discovery'
  },{
    image: `${path}/image/FF_departure.jpg`,
    title: 'Firefly Concept - Departure'
  },{
    image: `${path}/image/FF_moon.jpg`,
    title: 'Firefly Concept - Moon'
  },{
    image: `${path}/image/FF_lit.png`,
    title: 'Firefly Concept - Light'
  },{
    image: `${path}/image/FF_lineup.jpg`,
    title: 'Firefly Character Lineup'
  },{
    image: `${path}/image/FF_title.jpg`,
    title: 'Firefly Title'
  },{
    image: `${path}/image/FF_poster.jpg`,
    title: 'Firefly Poster'
  },{
    image: `${path}/image/Desert_concept.jpg`,
    title: 'Firefly - Desert Concept'
  },{
    image: `${path}/image/Me_front.jpg`,
    title: 'Self - Front View'
  },{
    image: `${path}/image/Me_back.jpg`,
    title: 'Self - Back View'
  },{
    image: `${path}/image/Me_sit.jpg`,
    title: 'Self - Sitting'
  },{
    image: `${path}/image/Lauren.jpg`,
    title: 'Portrait - Lauren'
  },{
    image: `${path}/image/IanLauren.jpg`,
    title: 'Portrait - Ian and Lauren'
  },{
    image: `${path}/image/Mrak_Unity1.png`,
    title: 'Unity Environment 1'
  },{
    image: `${path}/image/Mrak_Unity2.png`,
    title: 'Unity Environment 2'
  },{
    image: `${path}/image/Mrak_Unity3.jpg`,
    title: 'Unity Environment 3'
  },{
    image: `${path}/image/Portal.jpg`,
    title: '2 Point Perspective - Portal'
  },{
    image: `${path}/image/Balrog.jpg`,
    title: '2 Point Perspective - Balrog'
  },{
    image: `${path}/image/Snow_White.jpg`,
    title: '2 Point Perspective - Snow White'
  },{
    image: `${path}/image/SK_couch.jpg`,
    title: 'Wedding Sketch - Family'
  },{
    image: `${path}/image/SK_pipper.jpg`,
    title: 'Wedding Sketch - Pipper'
  },{
    image: `${path}/image/SK_slater.jpg`,
    title: 'Wedding Sketch - Slater'
  },{
    image: `${path}/image/SK_us.jpg`,
    title: 'Wedding Sketch - Us'
  }];
}]);
