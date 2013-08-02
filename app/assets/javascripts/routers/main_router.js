Nuagedeson.Routers.Main = Backbone.Router.extend({

  initialize: function(options){
    // debugger
    var that = this;
    this.model = new Nuagedeson.Models.User(options.currentUser);
    // debugger
    this.listenTo(this.model, 'change', this.testfun);
    this.$rootEl = options.$rootEl;
    $('body').on('click', 'div.icon-attach', function(){
      that.uploader();
    });

    $('body').on('click', '.logo', function(){
      that.navigate('/clips', {trigger: true})
    });

    $('body').on('click', '.welcome', function(){
      that.navigate('/users', {trigger: true})
    });
  },

  testfun: function(){
    // debugger
    console.log('changed');
  },

  routes: {
    "": "index",
    "clips": "topClips",
    "users": "userClips",
    "profile": "profile",
    "upload": 'uploader',

  },

  index: function(){
    var mainView = new Nuagedeson.Views.Main({
      model: this.model
    });
    this._swapView(mainView, 'intro');
  },

  topClips: function(){
    var that = this;
    var topClips = new Nuagedeson.Collections.Clips('/clips');
    topClips.fetch({
      success: function(collection,response,options){
        var topClipsView = new Nuagedeson.Views.Main({
          template: 'topClips',
          collection: collection
        });
        that._swapView(topClipsView, 'topClips');
      }
    });
  },

  userClips: function(){
    var that = this;
    var userClips = new Nuagedeson.Collections.Clips('/users');
    userClips.fetch({
      success: function(collection,response,options){
        var userClipsView = new Nuagedeson.Views.Main({
          template: 'userClips',
          collection: collection
        });
        that._swapView(userClipsView, 'userClips');
      }
    });
  },

  // uploader: function(){
  //   var that = this;
  //   Nuagedeson.userClips.url = '/users'
  //   var clip = new Nuagedeson.Models.Clip();
    
  //   var uploadView = new Nuagedeson.Views.Uploader({
  //     model: clip
  //   });
  //   this._swapView(uploadView);
  //   uploadView.createDropzone();
  // },

  // uploadFile: function(e){
  //   e.preventDefault();
  // },

  _verifyUser: function(){
    var mainView = new Nuagedeson.Views.Main();
    this._swapView(mainView);
  },

  _swapView: function(newView, template){
    if (this.currentView) this.currentView.remove;
    this.currentView = newView;
    this.$rootEl.html(this.currentView.render(template).$el);
  }

});
