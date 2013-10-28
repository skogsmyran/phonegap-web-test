var Gamecharades = function() {
	
	this.initialize = function() {
		var self = this;
		this.el = $('<div/>');
		this.el.on("click", "#startcharades", function() {
			var charadetodisplay = self.charade();
			console.log(charadetodisplay);
			document.getElementById('charadetodo').innerHTML = charadetodisplay;
		})
	},
	
	this.render = function() {
		this.el.html(Gamecharades.template());
        return this;
	},

	this.charade = function() {
		var length = charadesarray.length;
        var generatedid = Math.floor((Math.random()*length)+1);
        console.log(generatedid);
        console.log(charadesarray[generatedid])
        return charadesarray[generatedid];
	},

	this.initialize();
};

var gamecharadeshtml = $("#gamecharades").html();
Gamecharades.template = Handlebars.compile(gamecharadeshtml);

var charadesarray = ["Wings","Guitar","Cow","Summer","Elbow","Rope","Ball","Rollerblade","Fang","Snowball","Turtle","Ear","Cheek","Smile","Jar","Tail","Basketball","Mouth","Telephone","Star","Tree","Airplane","Point","Alarm","Table tennis","Beg","Drum","Cape","Chin","Roof","Rain","Saddle","Room"]