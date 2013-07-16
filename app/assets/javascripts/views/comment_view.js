Nuagedeson.Views.CommentView =  Backbone.View.extend({
  initialize: function(options){
    
    this.listenTo(this.collection.clip,
      'add remove change',
      this.render);
  },
  tagname: 'div',
  className: function(){
    return 'comments audio_' + this.collection.clip.id;
  },
  template: JST['comments/comment_form'],

  render: function () {
    var renderedContent = this.template({
      comments: this.collection
    });

    this.$el.html( renderedContent );
    
    return this;
  },

});