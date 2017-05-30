'use strict';

var app = app || {};

(function(module) {
  const listView = {};
  const render = Handlebars.compile($('#list-template').text());

  listView.initIndexPage = function(){
    $('#list-template').append(app.Concert.all).map(render)
  }
  module.listView = listView;
})(app);
