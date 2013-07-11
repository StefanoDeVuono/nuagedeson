Nuagedeson.Models.Comment = Backbone.RelationalModel.extend({
  initialize: function(options){
    this.sound_id = options.sound_id;
  },

  urlRoot: function(){
    return '/clips/' + this.sound_id + '/comments';
  },

});
