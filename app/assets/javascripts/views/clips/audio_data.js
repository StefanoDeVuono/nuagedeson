Nuagedeson.Views.AudioDataView =  Backbone.View.extend({
  initialize: function(options){
    this.listenTo(this.model,
      'add remove change',
      this.render);
  },

  events: {
    'click span.like': 'addLike',
    'click span.unlike': 'unLike'
  },

  tagName: 'div',
  
  className: 'audio_data',

  template: JST['clips/audio_data'],

  render: function () {
    var renderedContent = this.template({
      clip: this.model
    });

    this.$el.html( renderedContent );
    
    return this;
  },

  addLike: function(){
    var that = this;
    $.ajax({
      url: '/likes',
      data: {likes: {clip_id: that.model.id}},
      type: 'post',
      dataType: 'json',
      success: function(data){
        that.model.set('favourites', that.model.get('favourites') + 1);
        that.model.set('current_user_likes?', true);
      }
    })
  },

  unLike: function(){
    var that = this;
    $.ajax({
      url: '/likes',
      data: {likes: {clip_id: that.model.id}},
      type: 'delete',
      dataType: 'json',
      success: function(data){
        that.model.set('current_user_likes?', false);
        that.model.set('favourites', that.model.get('favourites') - 1);
      }
    })
  }

});