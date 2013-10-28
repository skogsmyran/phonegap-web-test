var app = {
	/*render: function(screentorender) {	
		$('body').html(screentorender);
	},*/

	initialize: function() {
		var self = this;
		$('body').html(new Gamescreen().render().el);
	},
};

app.initialize();