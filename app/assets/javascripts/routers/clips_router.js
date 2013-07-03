Nuagedeson.Routers.Clips = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$rootEl;
  },
  routes: {
    "": "index",
  },
  index: function(){
    var that = this;
    Nuagedeson.clips.fetch({
      success: function(){
        var clipIndexView = new Nuagedeson.Views.ClipsIndex({
          collection: Nuagedeson.clips
        });
        that.$rootEl.html(clipIndexView.render().$el);
      }
    });
    
    
  },
});
