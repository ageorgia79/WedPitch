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

    "click .go-button": "showLoginView",
    "click .entrees-button": "showEntreesView"
    

  },

  initialize: function(){
    $('.container').empty();
    $('.container').append(this.el);
    this.render();
  },

  render: function(){
    var renderedTemplate = this.orderTemplate(this.model);
    this.$el.html(renderedTemplate);
  },

  showLoginView: function(){
    this.remove();
    var login = new LoginView({model: this.model});

  },

  showEntreesView: function(){
    var entree = new EntreeView({model: this.model});
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

var EntreeView = Parse.View.extend({

  className: "better",

  entreeTemplate: _.template($('.entree-template').text()),

  events: {

    "click .prime-rib": "showTempsView"

  },

  initialize: function(){
    $('.container').empty();
    $('.container').append(this.el);
    this.render();
  },

  render: function(){
    var renderedTemplate = this.entreeTemplate(this.model);
    this.$el.html(renderedTemplate);
  },

  showTempsView: function(){
    var temp = new TempsView({model: this.model});
  }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var TempsView = Parse.View.extend({

  className: "betterer",

  tempsTemplate: _.template($('.temp-template').text()),

  events: {

    "click .rare": "showSidesView"

  },

  initialize: function(){
    $('.container').empty();
    $('.container').append(this.el);
    this.render();
  },

  render: function(){
    var renderedTemplate = this.tempsTemplate(this.model);
    this.$el.html(renderedTemplate);
  },

  showSidesView: function(){
    var sides = new SidesView({model: this.model});
  }

});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var SidesView = Parse.View.extend({

  className: "awesome",

  sidesTemplate: _.template($('.sides-template').text()),

  events: {

    "click .fries": "showModView"

  },

  initialize: function(){
    $('.container').empty();
    $('.container').append(this.el);
    this.render();
  },

  render: function(){
    var renderedTemplate = this.sidesTemplate(this.model);
    this.$el.html(renderedTemplate);
  },

  showModView: function(){
    var mod = new EntreeModView({model: this.model});
  }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var EntreeModView = Parse.View.extend({

  className: "super",

  modTemplate: _.template($('.entree-mod-template').text()),

  events: {

    "click .done": "showOrderView"

  },

  initialize: function(){
    $('.container').empty();
    $('.container').append(this.el);
    this.render();
  },

  render: function(){
    var renderedTemplate = this.modTemplate(this.model);
    this.$el.html(renderedTemplate);
  },

  showOrderView: function(){
    this.remove();
    var order = new OrderView({model: this.model});
  }
});




