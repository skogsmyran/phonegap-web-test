var Loginpage = function() {
	
	this.initialize = function() {
		var self = this;
		this.el = $('<div/>');
		this.el.on("click", "#login", function() {
			var username = $('#username').val();
			var password = $('#password').val();
			if (username == "" || username == null || password == "" || password == null) {
				alert("Please fill in your username and password");  
 				return false;  
			} else {
				self.login(username, password);
			}
		});
	},

	this.validateForm = function() {
		var x=document.forms["login"]["username"].value;
		if (x==null || x=="") {  
  			alert("Please fill out the username");  
 			return false;  
  		}
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

