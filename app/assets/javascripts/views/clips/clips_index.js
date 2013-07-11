Nuagedeson.Views.ClipsIndex = Backbone.View.extend({
  tagName: 'div',
  id: 'clips',
  render: function(){
    var that = this;

    this.collection.each(function(clip){
      var audioPlayer = new Nuagedeson.Views.AudioPlayerView({
        model: clip
      });
      that.$el.append(audioPlayer.render().$el);
      
    });

    return this;
  },

});
