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
		$('.gamewrapper').html(charadesendround);
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

	this.endgame = function(t1score,t2score) {
		console.log("endgame");
	}

	this.startround = function(round, rounds, t1score, t2score) {
		var self = this;
		if (round == rounds) {
			self.endgame(t1score,t2score);
		}
		var charadetodisplay = self.getcharade();
		var charadesdata = [{"charade": charadetodisplay}];
		console.log(charadetodisplay);
		$('.gamewrapper').html(charadesstartround(charadesdata));
		$('#charadetodo').append(charadetodisplay);
		self.timer(round, rounds, t1score, t2score);
	}

	this.game = function(rounds) {
		var self = this;
		$('#startcharades').detach();
		var rounds = rounds;
		var t1score = 0;
		var t2score = 0;
		this.startround(1,rounds,0,0);
	},

	this.timer = function(round, rounds, t1score, t2score) {
		var self = this;
		var timer = 31;
		var countdown = window.setInterval(function() {
			if (timer > 0) {
				timer = timer-1;
				document.getElementById('Timer').innerHTML = "Time remaining: " + timer + "s"
				self.el.on("click", "#endround", function() {
					self.endround(round, rounds, t1score, t2score);
					clearInterval(countdown);
			});
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

var charadesendroundhtml = $("#charadesendround").html();
var charadesendround = Handlebars.compile(charadesendroundhtml);

var charadesstartroundhtml = $("#charadesstartround").html();
var charadesstartround = Handlebars.compile(charadesstartroundhtml);

var charadesarray = ["Wings","Guitar","Cow","Summer","Elbow","Rope","Ball","Rollerblade","Fang","Snowball","Turtle","Ear","Cheek","Smile","Jar","Tail","Basketball","Mouth","Telephone","Star","Tree","Airplane","Point","Alarm","Table tennis","Beg","Drum","Cape","Chin","Roof","Rain","Saddle","Room"]