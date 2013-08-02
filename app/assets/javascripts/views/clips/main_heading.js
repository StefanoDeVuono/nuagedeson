Nuagedeson.Views.MainHeadingView =  Backbone.View.extend({
  
  tagName: 'h3',

  className: 'main_heading',

  topClipsTemplate: JST['clips/top_clips_heading'],
  userClipsTemplate: JST['clips/user_clips_heading'],


  render: function (template) {
    var mainHeadingView = this[template + 'Template']();
    this.$el.html( mainHeadingView );
    return this;
  },

});