Nuagedeson.Routers.Clips = Backbone.Router.extend({

  initialize: function(options){
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "index",
    "/clips": "userClips",
    "upload": 'uploader'

  },
  index: function(){
    var that = this;
    Nuagedeson.topClips.fetch({
      success: function(){
        var clipIndexView = new Nuagedeson.Views.ClipsIndex({
          collection: Nuagedeson.topClips
        });
        that.$rootEl.html(clipIndexView.render().$el);
        
      }
    });
  },

  userClips: function(){
    var that = this;
    Nuagedeson.userClips.url = '/users'
    Nuagedeson.userClips.fetch({
      success: function(){
        var userClipsView = new Nuagedeson.Views.ClipsIndex({
          collection: Nuagedeson.userClips
        });
        that.$rootEl.html(userClipsView.render().$el);
        
      }
    });
  },

  uploader: function(){
    var that = this;
    Nuagedeson.userClips.url = '/users'
    var clip = new Nuagedeson.Models.Clip();
    var uploadView = new Nuagedeson.Views.Uploader({
      model: clip
    });
    that.$rootEl.html(uploadView.render().$el);
    uploadView.createDropzone();
  },

});
