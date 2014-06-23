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

    "click .hightop1": "showOrderView",
    "click .hightop2": "showOrderView",
    "click .table-101": "showOrderView",
    "click .table-102": "showOrderView",
    "click .table-103": "showOrderView",
    "click .table-104": "showOrderView",
    "click .booth-1": "showOrderView",
    "click .booth-2": "showOrderView",
    "click .booth-3": "showOrderView",
    "click .booth-4": "showOrderView",
    "click .stool-1": "showOrderView",
    "click .stool-2": "showOrderView",
    "click .stool-3": "showOrderView",
    "click .stool-4": "showOrderView",
    "click .stool-5": "showOrderView",
    "click .stool-6": "showOrderView",
    "click .stool-7": "showOrderView",
    "click .stool-8": "showOrderView"

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
    //$('.container').append(order);
  }


});

//////////////////////////////////////////////////////////////////////////////////////////////////////////

var OrderView = Parse.View.extend({

  className: "coolest",

  orderTemplate: _.template($('.order-template').text()),

  events: {

  },

  initialize: function(){
    $('.container').empty();
    $('.container').append(this.el);
    this.render();
  },

  render: function(){
    var renderedTemplate = this.orderTemplate(this.model);
    this.$el.html(renderedTemplate);
  }

});




