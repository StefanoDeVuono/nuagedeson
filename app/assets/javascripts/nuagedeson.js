window.Nuagedeson = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";

    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    Nuagedeson.clips = new Nuagedeson.Collections.Clips();

    new Nuagedeson.Routers.Clips({
      $rootEl: $('#clips')
    });

    Backbone.history.start();
  }
};

$(document).ready(function(){
  Nuagedeson.initialize();
});
