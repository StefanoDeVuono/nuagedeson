window.Nuagedeson = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    Nuagedeson.topClips = new Nuagedeson.Collections.Clips();
    Nuagedeson.userClips = new Nuagedeson.Collections.Clips();

    new Nuagedeson.Routers.Clips({
      $rootEl: $('#main')
    });

    Backbone.history.start();
  }
};

$(document).ready(function(){
  Nuagedeson.initialize();
  // debugger
  var setVolume = function($jq, ui){
    // debugger
    $jq.each(function(i, el){
      el.volume = (ui.value) / 100;
    });
  }

  $('.volume').slider({
    orientation: "vertical",
      range: "min",
      min: 0,
      max: 100,
      value: 60,
      slide: function( event, ui ) {
        setVolume($('audio'), ui);
      },
      create: function(event, ui){
        //setVolume($('audio'), ui);
        ui.value = 50;
      }
  });
  
  setVolume($('audio'), 50);
  
});