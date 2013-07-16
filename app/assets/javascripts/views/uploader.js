Nuagedeson.Views.Uploader = Backbone.View.extend({
  tagName: 'form',
  id: 'uploader',
  
  className: 'dropzone',
  attributes: {
    action: '/clips',
    method: 'post',
  },

  initialize: function(){
    //debugger
  },

  template: JST['uploader'],

  render: function(){
    var renderedContent = this.template({
      clip: this.model
    });

    this.$el.html( renderedContent );
    return this;
  },

  createDropzone: function(){
    var that = this;
    var myDropzone = new Dropzone(
      "#uploader",
      {
        paramName: "clip[link]",
        init: function(){
          this.on("drop", that._onDrop.bind(that));
          this.on("complete", that._onComplete.bind(that));
        },
      }
    );
  },

  _onDrop: function(e, data){
    console.log(this);
    $('.dropzone .dz-message').text('');
    $('.dropzone .dz-message').addClass('icon-spin5');
  },

  _onComplete: function(e, data) { 
    $('.dropzone .dz-message').removeClass('icon-spin5');
    $('.dropzone .dz-message').html('<span>Your upload is complete</span>');
    
//    var waitBeforeDestroy =
      //setTimeout.(Nuagedeson.router._swapView.bind(Nuagedeson.router), 1000, this);
      setTimeout(Nuagedeson.router.userClips.bind(Nuagedeson.router), 1000);
  },
  
});