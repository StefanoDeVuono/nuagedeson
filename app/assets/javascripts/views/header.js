Nuagedeson.Views.Header =  Backbone.View.extend({
  
  events: {
    'submit form#new-session': 'newSession',
    'submit form#new-user': 'newUser',
    'submit form#password-reset': 'passwordReset',
    'click a#js-login': 'renderLogin',
    'click a#js-register': 'renderRegister',
    'click a#js-password': 'renderPassword',
    // 'click a.o-auth': 'oAuthSession'
  },

  initialize: function(options){
    // debugger
    // this.listenTo(this.collection.clip,
    //   'add remove change',
    //   this.render);
    //this.listenTo(this.model, 'change', this.testfun);

  },

  tagName: 'header',
  id: 'top',
  
  loginTemplate: JST['login'],
  registerTemplate: JST['register'],
  passwordTemplate: JST['password'],
  userTemplate: JST['user'],

  render: function (template) {
    var renderedContent = template({
      user: this.model
    });
    this.$el.html( renderedContent );
    return this;
  },

  newSession: function(e){
    e.preventDefault();
    var that = this;
    var input = $(e.currentTarget).serializeJSON();
    var session = new Nuagedeson.Models.Session();
    var saved = session.save(input, {
      success: function(model, response, options){
        debugger
        that.model = model;
        that.render(that.userTemplate);

        Nuagedeson.mainRouter.navigate('clips', {trigger: true});
      },
      error: function(model, xhr, options){
        console.log('complete');
        debugger
        that.render(that.userTemplate);
      }
    });
    console.log(saved);
  },

  oAuthSession: function(e){
    e.preventDefault();
    var url = e.currentTarget.href;
    var that = this;
    var session = new Nuagedeson.Models.Session(url);
    $.ajax({
      url: url,
      type: 'POST',
      complete: function(jqXHR, textStatus){
        debugger
        console.log(jqXHR);
        console.log(textStatus);
      }
    });
  },

  newUser: function(e){
    e.preventDefault();
    var that = this;
    var input = $(e.currentTarget).serializeJSON();
    var user = new Nuagedeson.Models.User();
    user.save(input, {
      success: function(model, response, options){
        that.model = model;
        that.render(that.userTemplate);
        Nuagedeson.mainRouter.navigate('clips', {trigger: true});
      }
    });
  },

  _login: function(e){
    e.preventDefault();
    debugger
    var url = $(e.currentTarget).attr('href')
    console.log(e);
    $.ajax(url, {
      success: function(model, response, options){
        console.log(model);
        console.log(response);
        console.log(options);
      }
    })
  },

  passwordReset: function(e){
    e.preventDefault();
  },

  renderLogin: function(e){
    if (e) e.preventDefault();
    debugger
    this.render(this.loginTemplate);
  },

  renderRegister: function(e){
    e.preventDefault();
    this.render(this.registerTemplate);
  },
  renderPassword: function(e){
    e.preventDefault();
    this.render(this.passwordTemplate);
  }

});