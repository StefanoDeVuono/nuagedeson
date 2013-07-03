Nuagedeson.Views.ClipsIndex = Backbone.View.extend({

  template: JST['clips/index'],
  render: function(){
    var that = this;
    console.log("I'm in Miami!");

    
    that.showVideo();

    return this;
  },

  showVideo: function(){
    //var link = clip.get('link');
    
    //var id = 'video' + clip.cid;
    //var $newDiv = $('<div>').attr('id', id);
    
    var clips = this.collection.toJSON()
    // debugger
    window.onYouTubeIframeAPIReady = function() {

    console.log('here');
    console.log(clips);
    _(clips).each(function(clip, index){
        var id = 'video' + index;
        var $newDiv = $('<div>').attr('id', id);
        $('#clips').append($newDiv);
        var player = new YT.Player(id, {
          height: '200',
          width: '200',
          videoId: clip.link
        })
      });
    };  
    //return $newDiv;
  },
  

});
