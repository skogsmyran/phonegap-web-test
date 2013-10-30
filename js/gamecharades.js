var Gamecharades = function() {
	
	this.initialize = function() {
		var self = this;
		this.el = $('<div/>');
		self.registerEvents();
	},
	
	this.render = function() {
		this.el.html(Gamecharades.template());
        return this;
	},

	this.registerEvents = function() {
		var self = this;
		this.el.on("click", "#startcharades", function() {
			self.newgame(10, 0, 0);
		});
		this.el.on("click", "#team1", function() {
			var t1score = window.localStorage.getItem("t1score");
			t1score++;
			window.localStorage.setItem("t1score", t1score);
			var round = window.localStorage.getItem("round")
			round++;
			window.localStorage.setItem("round", round);
			console.log(t1score);
			console.log(round);
			self.startround();
		});
		this.el.on("click", "#team2", function() {
			var t2score = window.localStorage.getItem("t2score");
			t2score++;
			window.localStorage.setItem("t2score", t2score);
			var round = window.localStorage.getItem("round")
			round++;
			window.localStorage.setItem("round", round);
			console.log(t2score);
			console.log(round);
			self.startround();
		});
	},

	this.endround = function() {
		var self = this;
		$('.contentwrapper').html(charadesendround);
	}

	this.endgame = function() {
		console.log("endgame");
		var t2score = window.localStorage.getItem("t2score");
		var t1score = window.localStorage.getItem("t1score");
		var teamscores = { teamscores: [ 
			{ team:"Team 1", score:t1score },
			{ team:"Team 2", score:t2score },
			]};
		$('.contentwrapper').html(endofgame(teamscores));
	}

	this.startround = function() {
		var self = this;
		var round = window.localStorage.getItem("round");
		var rounds = window.localStorage.getItem("rounds");
		console.log(round + "," + rounds); 
		if (round == rounds) {
			self.endgame();
			return;
		} else {
			var charadetodisplay = self.getcharade();
			var charadesdata = [{"charade": charadetodisplay}];
			console.log(charadetodisplay);
			$('.contentwrapper').html(charadesstartround(charadesdata));
			$('#charadetodo').append(charadetodisplay);
			self.timer();
			return;
		}
		return;
	}

	this.newgame = function(rounds, t1players, t2players) {
		var rounds = parseFloat(rounds);
		window.localStorage.setItem("rounds", rounds);
		window.localStorage.setItem("round", 0);
		window.localStorage.setItem("t1players", t1players);
		window.localStorage.setItem("t2players", t2players);
		window.localStorage.setItem("t1score", 0);
		window.localStorage.setItem("t2score", 0);
		var self = this;
		$('#startcharades').detach();
		this.startround();
	},

	this.timer = function() {
		var self = this;
		var timer = 31;
		var countdown = window.setInterval(function() {
			if (timer > 0) {
				timer = timer-1;
				document.getElementById('Timer').innerHTML = "Time remaining: " + timer + "s"
				self.el.on("click", "#endround", function() {
					self.endround();
					clearInterval(countdown);
					return;
			});
			} else {
				self.endround();
				clearInterval(countdown);	
				return;			
			}
		}, 1000);
	},

	this.getcharade = function() {
		var length = charadesarray.length;
        var generatedid = Math.floor((Math.random()*length)+1);
        return charadesarray[generatedid];
	},

	

	this.initialize();
};



var gamecharadeshtml = $("#gamecharades").html();
Gamecharades.template = Handlebars.compile(gamecharadeshtml);

var charadesendroundhtml = $("#charadesendround").html();
var charadesendround = Handlebars.compile(charadesendroundhtml);

var charadesstartroundhtml = $("#charadesstartround").html();
var charadesstartround = Handlebars.compile(charadesstartroundhtml);

var endofgamehtml = $("#endofgame").html();
var endofgame = Handlebars.compile(endofgamehtml);

var charadesarray = ["Wings","Guitar","Cow","Summer","Elbow","Rope","Ball","Rollerblade","Fang","Snowball","Turtle","Ear","Cheek","Smile","Jar","Tail","Basketball","Mouth","Telephone","Star","Tree","Airplane","Point","Alarm","Table tennis","Beg","Drum","Cape","Chin","Roof","Rain","Saddle","Room"]