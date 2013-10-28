var app = {
	render: function(screentorender) {	
		$('body').html(screentorender);
	},

	initialize: function() {
	var self = this;
	var gamescreenhtml = $("#gamescreen").html();
	var gamescreen = Handlebars.compile(gamescreenhtml);
	self.render(gamescreen);
	},
};

app.initialize();