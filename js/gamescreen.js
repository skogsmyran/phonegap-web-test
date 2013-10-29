var Gamescreen = function() {
	
	this.initialize = function() {
		var self = this;
		this.el = $('<div/>');
		this.el.on("click", ".game", function() {
			var id = this.id;
			self.launchgame(id);
		});
	},

	this.render = function() {
		this.el.html(Gamescreen.template());
        return this;
	},

	this.launchgame = function(game) {
		if (game == "g1") {
			window.location.hash = "#charades";
		} else {
			alert("Sorry, you can't play this right now :(");  
 			return false; 
		}
	},

	this.initialize();
};

var gamescreenhtml = $("#gamescreen").html();
Gamescreen.template = Handlebars.compile(gamescreenhtml);

