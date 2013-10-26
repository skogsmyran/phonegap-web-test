var app = {
	render: function(screentorender) {	
		$(document.body).append(screentorender);
	},

	initialize: function() {
	var self = this;
	var gamescreenhtml = $("#gamescreen").html();
	var gamescreen = Handlebars.compile(gamescreenhtml);
	self.render(gamescreen);
	},
};

app.initialize();