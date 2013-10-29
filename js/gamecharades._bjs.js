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
			self.game(10);
		});
	},

	this.endround = function(round, rounds, t1score, t2score) {
		var self = this;
		$('#team1').css("visibility", "visible");
		$('#team2').css("visibility", "visible");
		$('#charadetodo').css("visibility","hidden");
		$('#Timer').css("visibility", "hidden");
		var charadeinstructions = "Who won this round?"
		document.getElementById('charadeinstructions').innerHTML = charadeinstructions;
		this.el.on("click", "#team1", function(round,rounds,t1score,t2score) {
			t1score = t1score + 1;
			round++;
			console.log(t1score);
			self.startround(round, rounds, t1score, t2score);
		});
		this.el.on("click", "#team2", function(round,rounds,t1score,t2score) {
			t2score = t2score + 1;
			round++;
			console.log(t2score);
			self.startround(round, rounds, t1score, t2score);
		});
	}

	this.pregame = function() {
		
	}

	this.endgame = function(t1score,t2score) {
		console.log("endgame");
	}

	this.startround = function(round, rounds, t1score, t2score) {
		var self = this;
		$('#team1').css("visibility", "hidden");
		$('#team2').css("visibility", "hidden");
		$('#charadetodo').css("visibility","visible");
		if (round == rounds) {
			self.endgame(t1score,t2score);
		}
		var charadeinstructions = "The object you should describe to your team is;"
		document.getElementById('charadeinstructions').innerHTML = charadeinstructions;
		var charadetodisplay = self.getcharade();
		document.getElementById('charadetodo').innerHTML = charadetodisplay;
		$('#Timer').css("visibility", "visible");
		self.timer(round, rounds, t1score, t2score);
	}

	this.game = function(rounds) {
		var self = this;
		$('#startcharades').remove();
		var rounds = rounds;
		var t1score = 0;
		var t2score = 0;
		var timer = 30;
		this.startround(1,rounds,0,0);
	},

	this.timer = function(round, rounds, t1score, t2score) {
		var self = this;
		var timer = 30;
		var countdown = window.setInterval(function() {
			if (timer > 0) {
				timer = timer-1;
				document.getElementById('Timer').innerHTML = timer
			} else {
				self.endround(round, rounds, t1score, t2score);
				clearInterval(countdown);				
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

var charadesarray = ["Wings","Guitar","Cow","Summer","Elbow","Rope","Ball","Rollerblade","Fang","Snowball","Turtle","Ear","Cheek","Smile","Jar","Tail","Basketball","Mouth","Telephone","Star","Tree","Airplane","Point","Alarm","Table tennis","Beg","Drum","Cape","Chin","Roof","Rain","Saddle","Room"]