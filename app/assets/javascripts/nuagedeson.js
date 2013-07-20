window.Nuagedeson = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    Nuagedeson.topClips = new Nuagedeson.Collections.Clips();
    Nuagedeson.userClips = new Nuagedeson.Collections.Clips();

    Nuagedeson.router = new Nuagedeson.Routers.Clips({
      $rootEl: $('#main')
    });

    Backbone.history.start();
  }
};

$(document).ready(function(){
  Nuagedeson.initialize();
  loadUI();
  var setVolume = function($jq, ui){
    $jq.each(function(i, el){
      el.volume = (ui.value) / 100;
    });
  }

  var removeIconClass = function($jq){
    var classNames = $jq.attr('class').split(' ');
    _(classNames).each(function(className, i){
      if ( /^icon-.+$/.test(classNames[i]) ) {
        $jq.removeClass(classNames[i]);
      }
    });
  }

  var animateVolume = function($jq, ui){
    switch (true) {
      case (ui.value === 0 ):
        removeIconClass($jq);
        $jq.addClass('icon-volume-off');
        break;
      case (ui.value <= 25 && ui.value > 0 ):
        removeIconClass($jq);
        $jq.addClass('icon-volume-down');
        break;
      case (ui.value <= 50 && ui.value > 25 ):
        removeIconClass($jq);
        $jq.addClass('icon-volume');
        break;
      case (ui.value <= 75 && ui.value > 50 ):
        removeIconClass($jq);
        $jq.addClass('icon-volume-up');
        break;
      default:
        break;
    }
  }

  $('.volume').slider({
    orientation: "vertical",
      range: "min",
      min: 0,
      max: 100,
      value: 60,
      slide: function( event, ui ) {
        setVolume($('audio'), ui);
        animateVolume($('.volume-icon'), ui);
      },
      create: function(event, ui){
        ui.value = 50;
      }
  });
  
  setVolume($('audio'), 50);

  
});