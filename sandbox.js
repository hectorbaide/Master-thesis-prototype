function iIT (element, index) {
		return (element == string);
	}

function svgArray (array, fuckit) {
	string = fuckit;
	array.filter(iIT);
}
	
var container = [];

function objectBox (tag, number) {
	this.tag = tag;
	this.number = number;
}


function createContainer() {
	iTR();
	sortiTR();
}

function iTR () {
	container = [];
	for (var i = tagoloco.length - 1; i >= 0; i--) {
		string = tagoloco[i];
		var name = everyTags.filter(iIT);
		var length = name.length;
		name = _.uniq(name);
		name = name.toString();
		container[i] = new objectBox(name,length);  
	}
}

function sortiTR () {
	container.sort(function (a, b) { return a.number - b.number;
	});
	container.reverse();
}


//RaphaelJS experimentation

var mesa = Raphael(0,0,100%,100%);

function stacker(shape, posx, posy, radius, color, stroke, tag) {
	this.tag = tag;
	this.shape = "circle";
	this.posx = posx;
	this.posy = posy;
	this.radius = radius;
	this.color = color;
	this.stroke = "none";
	this.tag = tag;
}

var stacks = [];

function createStacks () {
	stacks = [];
	for (var i = container.length - 1; i >= 0; i--) {
		var sizer = container[i].number;
		var positionerx = container[i].number + 50;
		var positionery = container[i].number + 100;
		var shape = "circle";
		var posx = positionerx;
		var posy = positionery;
		var radius = sizer;
		var color = "FFBBAA";
		var stroke = "none";
		var tag = container[i].tag;
		stacks[i] = new stacker(shape, posx, posy, radius, color, stroke, tag) 
	};
}