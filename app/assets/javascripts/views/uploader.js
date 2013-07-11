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
    var myDropzone = new Dropzone(
      "#uploader",
      { paramName: "clip[link]" }
    );
  },
  
});
