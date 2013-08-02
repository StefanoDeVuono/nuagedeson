Nuagedeson.Routers.Header = Backbone.Router.extend({

  initialize: function(options){
    var that = this;
    this.$rootEl = options.$rootEl;
    
    if (options.currentUser) {
      var currentUser = new Nuagedeson.Models.User(options.currentUser);
      var header = new Nuagedeson.Views.Header({
        model: currentUser
      });
      this.$rootEl.prepend(header.render(header.userTemplate).$el);
    } else {
      var header = new Nuagedeson.Views.Header();
      this.$rootEl.prepend(header.render(header.loginTemplate).$el);
    }
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
  },

  _swapView: function(newView){
    if (this.currentView) this.currentView.remove;
    this.currentView = newView;
    this.$rootEl.html(this.currentView.render().$el);
  }

});
