var Gamecharades = function() {
	
	this.initialize = function() {
		this.el = $('<div/>');
	},
	
	this.render = function() {
		this.el.html(Gamecharades.template());
        return this;
	},

	this.initialize();
};

var gamecharadeshtml = $("#gamecharades").html();
Gamecharades.template = Handlebars.compile(gamecharadeshtml);