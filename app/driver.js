var jquery = require('jquery');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');


var ToDoList = Marionette.LayoutView.extend({
	el: '#app-hook',
	template: require('./templates/layout.html')
});

var todo = new ToDoList({
  model: new Backbone.Model({
  	items: [
    	{item: "Центр парка", desc: "Центральная точка парка ДГТУ", latitude: 47.24187, longitude: 39.71069},
		{item: "Атлетический манеж ДГТУ", desc: "Манеж в северозападной части парка ДГТУ", latitude: 47.24097, longitude:39.70927},
		{item: "Церковь", desc: "Храм святой великомученницы Татианы", latitude: 47.23928, longitude: 39.71106},
		{item: "Футбольный стадион", desc: "Минифутбольный стадион, ограждённый забором", latitude: 47.23945,longitude: 39.70915}
		]
	})
});

todo.render();