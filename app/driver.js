var jquery = require('jquery');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');


var mainView = Marionette.LayoutView.extend({
	el: '#app-hook',
	template: require('./templates/layout.html'),

	events: {
		'click .center': 'clickedOnCenter',
		'click .arena': 'clickedOnArena',
		'click .chapel': 'clickedOnChapel',
		'click .stadium': 'clickedOnStadium'
	},

	clickedOnCenter:function(){
		$(".description").hide();
		$(".center .description").toggle();
		mymap.panTo(new L.LatLng(47.24187, 39.71069));
	},

	clickedOnArena:function(){
		$(".description").hide();
		$(".arena .description").toggle();
		mymap.panTo(new L.LatLng(47.24097, 39.70927));
	},

	clickedOnChapel:function(){
		$(".description").hide();
		$(".chapel .description").toggle();
		mymap.panTo(new L.LatLng(47.23928, 39.71106));
	},

	clickedOnStadium:function(){
		$(".description").hide();
		$(".stadium .description").toggle();
		mymap.panTo(new L.LatLng(47.23945, 39.70915));
	}
});

mV = new mainView();
mV.render();


