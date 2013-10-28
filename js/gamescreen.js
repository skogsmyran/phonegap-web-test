var Gamescreen = function() {
	
	this.initialize = function() {
		this.el = $('<div/>');
		this.el.on("click", "#play1", this.launchgame);
	},

	this.render = function() {
		this.el.html(Gamescreen.template());
        return this;
	},

	this.launchgame = function() {
		window.location.hash = "#charades";
	},

	this.initialize();
};

var gamescreenhtml = $("#gamescreen").html();
Gamescreen.template = Handlebars.compile(gamescreenhtml);

