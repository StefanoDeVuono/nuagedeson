Nuagedeson.Views.Main =  Backbone.View.extend({

  initialize: function(e){
    // debugger
  },

  tagName: 'div',
  className: 'content',

  introTemplate: JST['intro'],
  
  render: function(template){
    var mainTemplate = this[template + 'Template']();
    this.$el.html(mainTemplate);
    return this;
  },

  topClipsTemplate: function(){
    var $topClips = new Nuagedeson.Views.MainHeadingView();
    $topClips.render('topClips');
    this.collection.each(function(clip){
      var audioPlayer = new Nuagedeson.Views.AudioPlayerView({
        model: clip
      });
      
      $topClips.$el = $topClips.$el.add(audioPlayer.render().$el);
    });
    
    return $topClips.$el;
  },

  userClipsTemplate: function(){
    var $userClips = new Nuagedeson.Views.MainHeadingView();
    $userClips.render('userClips');
    this.collection.each(function(clip){
      var audioPlayer = new Nuagedeson.Views.AudioPlayerView({
        model: clip
      });
      
      $userClips.$el = $userClips.$el.add(audioPlayer.render().$el);
    });
    
    return $userClips.$el;
  }

});
