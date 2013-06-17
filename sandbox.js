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


