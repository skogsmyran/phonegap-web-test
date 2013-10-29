var Loginpage = function() {
	
	this.initialize = function() {
		var self = this;
		this.el = $('<div/>');
		this.registerEvents();
	},

	this.validateForm = function() {
		var self = this;
		var username = $('#username').val();
		var password = $('#password').val();
		if (username == "" || username == null || password == "" || password == null) {
			alert("Please fill in your username and password");
			$('#username').css("border", "1px solid #ec514e")
			$('#password').css("border", "1px solid #ec514e");
			return false;
		} else if (username.indexOf("@") > -1 && password.length > 8) {
			self.login(username, password);
		} else if (password.length > 8) {
			alert("Please enter a valid email address");
			$('#password').css("border", "1px solid #9daca9")
			$('#username').css("border", "1px solid #ec514e");
			return false;
		} else if (username.indexOf("@") > -1) {
			alert("Please enter a valid password");
			$('#username').css("border", "1px solid #9daca9")
			$('#password').css("border", "1px solid #ec514e");
 			return false; 
		} else {
			alert("Please enter a valid email address and password");
			$('#username').css("border", "1px solid #ec514e")
			$('#password').css("border", "1px solid #ec514e");
			return false;
		}

	},

	this.registerEvents = function() {
		var self = this;
		this.el.on("click", "#password", function() {
			
		});
		this.el.on("click", "#login", function() {
			self.validateForm();
		});
	}


	this.render = function() {
		this.el.html(Loginpage.template());
        return this;
	},

	this.login = function(username, password) {
		// send to login, retrieve hashed session ID something like
		// var loginanswer = retrieved data like true
		// var sessionhash = retrieved data like %&/SDJFJ9/(/&())
		// if (loginanswer = true) {
		var sessionhash = "test";
		// tested; window.localStorage.setItem("password", password);
		window.localStorage.setItem("loggedon", "1");
		window.localStorage.setItem("sessionhash", sessionhash);
		window.location.hash = "";
		//}
	},

	this.initialize();
};

var loginpagehtml = $("#loginpage").html();
Loginpage.template = Handlebars.compile(loginpagehtml);