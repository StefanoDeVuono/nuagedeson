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
        autoProcessQueue: false,
        init: function(){
          this.on("drop", that._onDrop);
          this.on("complete", that._onComplete.bind(that));
        },
      }
    );
  },

  _onDrop: function(e, data){
    var that = this;
    $('.dropzone .dz-message').html('<input class="inner-message" type="text" placeholder="Enter Song Name...">');
    $('.dz-message').on('click', 'input.inner-message', function(e){
      e.stopPropagation();
    })
    $('.dropzone').on('submit', function(e){
      e.preventDefault();
      var title = $('input.inner-message').val();
      that.on("sending", function(file, xhr, formData) {
        formData.append("clip[title]", title);
        $('.dropzone .dz-message').html('');
        $('.dropzone .dz-message').addClass('icon-spin5');
      });
      that.processQueue();
    });
  },

  _onComplete: function(e, data) { 
    debugger
    $('.dropzone .dz-message').removeClass('icon-spin5');
    $('.dropzone .dz-message').html('<span>Your upload is complete</span>');
    
    setTimeout
      (Nuagedeson.router._swapView.bind(Nuagedeson.router), 1000, this);
  },
  
});