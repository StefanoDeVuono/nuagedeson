Nuagedeson.Routers.Clips = Backbone.Router.extend({

  initialize: function(options){
    var that = this;
    this.$rootEl = options.$rootEl;
    $('body').on('click', 'div.icon-attach', function(){
      that.uploader();
    });

    $('body').on('click', '.logo', function(){
      that.index();
    });

    $('body').on('click', '.welcome', function(){
      that.userClips();
    });
  },

  routes: {
    "": "index",
    "/clips": "userClips",
    "upload": 'uploader',

  },

  index: function(){
    var that = this;
    Nuagedeson.topClips.fetch({
      success: function(){
        var clipIndexView = new Nuagedeson.Views.ClipsIndex({
          collection: Nuagedeson.topClips
        });
        that._swapView(clipIndexView);
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
        
        that._swapView(userClipsView);
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
    this._swapView(uploadView);
    uploadView.createDropzone();
  },

  uploadFile: function(e){
    e.preventDefault();
    console.log('h');
  },

  _swapView: function(newView){

    if (this.currentView) this.currentView.remove;
    this.currentView = newView;
    debugger
    this.$rootEl.html(this.currentView.render().$el);
  }

});
