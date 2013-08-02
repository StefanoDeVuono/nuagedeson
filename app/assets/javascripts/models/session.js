Nuagedeson.Models.Session = Backbone.Model.extend({

  initialize: function(url){
    if (url) {
      this.url = url
    } else {
      this.url = '/users/sign_in.json';
      this.defaults =  {
        "login": "",
        "password": ""
      }
      this.paramRoot = 'user';
    }
  },

});