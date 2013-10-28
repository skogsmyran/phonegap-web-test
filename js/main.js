var app = {
	/*render: function(screentorender) {	
		$('body').html(screentorender);
	},*/

	registerEvents: function() {
	    var self = this;
	    $(window).on('hashchange', $.proxy(this.route, this));
	    // Check if browser supports touch events...
	    if (document.documentElement.hasOwnProperty('ontouchstart')) {
	        // ... if yes: register touch event listener to change the "selected" state of the item
	        $('body').on('touchstart', 'a', function(event) {
	            $(event.target).addClass('tappable-active');
	        });
	        $('body').on('touchend', 'a', function(event) {
	            $(event.target).removeClass('tappable-active');
	        });
	    } else {
	        // ... if not: register mouse events instead
	        $('body').on('mousedown', 'a', function(event) {
	            $(event.target).addClass('tappable-active');
	        });
	        $('body').on('mouseup', 'a', function(event) {
	            $(event.target).removeClass('tappable-active');
	        });
	    }
	},

	route: function() {
		var hash = window.location.hash
		if (!hash) {
			$('body').html(new Gamescreen().render().el);
			return;
		}
		if (hash == "#charades") {
			$('body').html(new Gamecharades().render().el);
		}
		if (hash == "#login") {
			$('body').html(new Loginpage().render().el);
		}
	},

	initialize: function() {
		var loggedon = window.localStorage.getItem("loggedon");
		if (!loggedon) {
			window.location.hash = "#login"
		}
		var self = this;
		this.registerEvents();
		self.route();
	},
};

app.initialize();