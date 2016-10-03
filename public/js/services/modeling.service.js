(function() {
  'use strict';

  angular.module("mySite")
  .service('ModelingService', ModelingService);

  function ModelingService() {
    const path = '../../assets'
    return [{
      isVideo: true,
      image: `${path}/image/Creature_Animation.png`,
      video: `${path}/video/Creature_Animation.mp4`,
      title: 'Creature Animation'
    },{
      isVideo: true,
      image: `${path}/image/Bass_transition_thumb.jpg`,
      video: `${path}/video/BassLive_60.mp4`,
      title: 'Bassmaster Elite Series - Transition'
    },{
      isVideo: true,
      image: `${path}/image/Bass_intro_thumb.jpg`,
      video: `${path}/video/BassLive_Intro.mp4`,
      title: 'Bassmaster Elite Series - Introduction'
    },{
      isVideo: true,
      image: `${path}/image/Bass_shatter_thumb.jpg`,
      video: `${path}/video/BassLive_Shatter.mp4`,
      title: 'Bassmaster Elite Series - Shatter'
    },{
      isVideo: true,
      image: `${path}/image/MoCap.jpg`,
      video: `${path}/video/MoCap.mp4`,
      title: 'Motion Capture Polish'
    },{
      isVideo: true,
      image: `${path}/image/GTT_thumb.jpg`,
      video: `${path}/video/Mrak_GTT_ad.mp4`,
      title: 'GTT Commerical'
    },{
      isVideo: true,
      image: `${path}/image/Thorncrown.png`,
      video: `${path}/video/Thorncrown.mp4`,
      title: 'Thorncrown Chapel'
    },{
      isVideo: true,
      image: `${path}/image/Smallmouth_thumb.jpg`,
      video: `${path}/video/Smallmouth-Bass-Model-HD.mp4`,
      title: 'Smallmouth Bass'
    },{
      isVideo: true,
      image: `${path}/image/Angry_emotion.png`,
      video: `${path}/video/Angry_emotion.mp4`,
      title: 'Emotion - Anger'
    },{
      isVideo: true,
      image: `${path}/image/Evil_emotion.png`,
      video: `${path}/video/Evil_emotion.mp4`,
      title: 'Emotion - Evil'
    },{
      isVideo: true,
      image: `${path}/image/Dramatic_audio_thumb.jpg`,
      video: `${path}/video/Dramatic_audio.mp4`,
      title: 'Dramatic Dialogue'
    },{
      isVideo: true,
      image: `${path}/image/Funny_audio_thumb.jpg`,
      video: `${path}/video/Funny_audio.mp4`,
      title: 'Funny Dialogue'
    },{
      isVideo: true,
      image: `${path}/image/AR_transition_thumb.jpg`,
      video: `${path}/video/AR_transition.mp4`,
      title: 'Arkansas Team Transition'
    },{
      isVideo: true,
      image: `${path}/image/strike_king.jpg`,
      video: `${path}/video/Umbrella.mp4`,
      title: 'Strike King Lure - Ad'
    },{
      isVideo: true,
      image: `${path}/image/Mercer_lure.jpg`,
      video: `${path}/video/SK_lure.mp4`,
      title: 'Umbrella Lure - Ad'
    },{
      isVideo: true,
      image: `${path}/image/Pit_Boss.jpg`,
      video: `${path}/video/Pit_Boss_lure.mp4`,
      title: 'Pit Boss Lure - Shader Rendering'
    }
  ];
}

})();
