Nuagedeson.Models.Comment = Backbone.RelationalModel.extend({
  // initialize: function(options){
  //   debugger
  //   this.sound_id = options.clip.id;
  // },

  urlRoot: function(){
    return '/clips/' + this.collection.clip.id + '/comments';
  },

  validate: function(attributes, options){
    if (!attributes.body) {
      console.log('no body');
      return 'comment needs body';
    }
  }

});
