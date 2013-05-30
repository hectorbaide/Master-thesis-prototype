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
var timeList = [];
var timeStringList = "";
var spaceList = [];
var spaceStringList = "";
var objectList = [];
var objectStringList = "";

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
    //Reset variable values
    metaSpace = [];
	metaObject = [];
	metaTime = [];
	//Separate values of the array of tags
    for (var i = flatTags.length - 1; i >= 0; i--) {
    if (flatTags[i].indexOf('TT') !== -1 ) { metaTime.push(flatTags[i]); } else { console.log('Time not found')};
    if (flatTags[i].indexOf('SS') !== -1 ) { metaSpace.push(flatTags[i]); } else { console.log('Space not found')};
    if (flatTags[i].indexOf('OO') !== -1 ) { metaObject.push(flatTags[i]); } else { console.log('Objects not found')};	
    //Eliminate duplicates
    spaceList = _.uniq(metaSpace);
	objectList = _.uniq(metaObject);
	timeList = _.uniq(metaTime);}
	//Convert to string for taking away ID values
	spaceStringList = spaceList.toString();
	objectStringList = objectList.toString();
	timeStringList = timeList.toString();
	//Take away ID values
	var tSpaceStringList = spaceStringList.replace(rep,'');
	var tObjectStringList = objectStringList.replace(rep,'');
	var tTimeStringList = timeStringList.replace(rep,'');
	//Reset list arrays stuff to fill them in with the new values
	spaceList = [];
	objectList = [];
	timeList = [];
	//Repopulate arrays and finalize state of finished buttons
	spaceList = tSpaceStringList.split(',');
	objectList = tObjectStringList.split(',');
	timeList = tTimeStringList.split(',');
}

console.log(flatTags);

metaDistribution();

console.log("space tags are " + spaceList);
console.log("object tags are " + objectList);
console.log("time tags are " + timeList);