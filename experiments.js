var images = new Array;

images[0] = { 'src': 'photos/000.jpg', 'thumb': 'thumb/000.jpg', 'tags':[''], 'meta':['']};
images[1] = { 'src': 'photos/001.jpg', 'thumb': 'thumb/001.jpg', 'tags':['OOfood','OOsandwich','SSbremen','SShome','TTdaily'], 'meta':['object','bremen','daily']};
images[2] = { 'src': 'photos/002.jpg', 'thumb': 'thumb/002.jpg', 'tags':['OOfood','OOsalad','SSbremen','SShome','TTdaily'], 'meta':['object','bremen','daily']};

//container for extracted tags and other things
var newVar = [];
var stringTags = "";
var metaObject = [];
var metaSpace = [];
var metaTime = [];

console.log(stringTags);

var allTags = _.pluck(images, "tags");
console.log("allTags = " + allTags);

var flatTags = _.flatten(allTags);
console.log("flatTags = " + flatTags);

var stringTags = flatTags.toString();
console.log("stringTags = " + stringTags);

var rep = /[SOT]/g;
var n = stringTags.replace(rep,'');
console.log("stringTags without Metas = " + n)

var tArray = stringTags.split(',')
var nArray = n.split(',');
var buttonList = _.uniq(nArray);
console.log(buttonList);

function metaDistribution () {
    for (var i = flatTags.length - 1; i >= 0; i--) {
    	if ($.inArray("SS", flatTags[i])) { metaSpace.push(flatTags[i]); } else { console.log("no Space");}
    	// if (flatTags[i].contains("OO")) { metaObject.push(flatTags[i]); } else { console.log("no Object");}
    	// if (flatTags[i].contains("TT")) { metaTime.push(flatTags[i]); } else { console.log("no Time");}
    }}

metaDistribution();


console.log(metaSpace);