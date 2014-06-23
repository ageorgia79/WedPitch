'use strict';

Parse.initialize("LFJ3QGbWShkk4EL9OPC9RBzsM1beJbuSzZ3m8F0f", "h9DNGD2Piozeww9Il1F9zS85gQh17uJXZnqf2l7V");

var Login = Parse.Object.extend({
  className: "Login"
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var LoginCollection = Parse.Collection.extend({

  model: Login,
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var collection = new LoginCollection();


var LoginView = Parse.View.extend({

  className: "cool",

  loginTemplate: _.template($('.login-template').text()),

  events: {

    "click .submit": "showLayoutView"
  },

  initialize: function(){
    $('.container').append(this.el);
    this.render();
  },

  render: function(){
    var renderedTemplate = this.loginTemplate();
    this.$el.html(renderedTemplate);
  },

  showLayoutView: function(){
    console.log('button is working')
    console.log(this.model)
    new LayoutView();
    // $('.container').append(layout);
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
var login = new LoginView();

var LayoutView = Parse.View.extend({

  className: "cooler",

  layoutTemplate: _.template($('.layout-template').text()),

  events: {

    "click .hightop1": "showOrderView"
  },

  initialize: function(){
    $('.container').empty();
    $('.container').append(this.el);
    this.render();
  },

  render: function(){
    var renderedTemplate = this.layoutTemplate(this.model);
    this.$el.html(renderedTemplate);
  },



  showOrderView: function(){
    var order = new OrderView({model: this.model});
    $('.container').append(order);
  }


});

//////////////////////////////////////////////////////////////////////////////////////////////////////////

var OrderView = Parse.View.extend({

})




