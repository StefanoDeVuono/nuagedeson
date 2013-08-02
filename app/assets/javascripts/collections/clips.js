Nuagedeson.Collections.Clips = Backbone.Collection.extend({

  model: Nuagedeson.Models.Clip,
  initialize: function(url){
    this.url = url;
  },

});
