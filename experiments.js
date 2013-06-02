//Definition of images and stuff
//images array contains all image objects, with tags ('tags'), links to full size images ('src'), links to thumbnails ('thumb')
var images = new Array;

images[0] = { 'src': 'photos/000.jpg', 'thumb': 'thumb/000.jpg', 'tags':[''], 'meta':['']};
images[1] = { 'src': 'photos/001.jpg', 'thumb': 'thumb/001.jpg', 'tags':['OOfood','OOsandwich','SSbremen','SShome','TTdaily'], 'meta':['object','bremen','daily']};
images[2] = { 'src': 'photos/002.jpg', 'thumb': 'thumb/002.jpg', 'tags':['OOfood','OOsalad','SSbremen','SShome','TTdaily'], 'meta':['object','bremen','daily']};

//Declaration of a lot of global variables
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

//Extraction of all the tags in image objects collection
var allTags = _.pluck(images, "tags");
console.log("allTags = " + allTags);

//Flattening of tag array for manipulations
var flatTags = _.flatten(allTags);
console.log("flatTags = " + flatTags);

//Converting tags to strings for eliminating meta identifiers
var stringTags = flatTags.toString();
console.log("stringTags = " + stringTags);

//Creation of list of tags without meta identifiers
var rep = /[SOT]/g;
var n = stringTags.replace(rep,'');
console.log("stringTags without Metas = " + n)

//Creation of array containing tags without meta identifiers
var tArray = stringTags.split(',')
var nArray = n.split(',');
var buttonList = _.uniq(nArray);
console.log(buttonList);

//Distribution of tags by meta identifiers
function metaDistribution () {
    //Reset variable values
    metaSpace = [];
	metaObject = [];
	metaTime = [];
	//Separate values of the array of tags
    for (var i = flatTags.length - 1; i >= 0; i--) {
    if (flatTags[i].indexOf('TT') !== -1 ) { metaTime.push(flatTags[i]); };
    if (flatTags[i].indexOf('SS') !== -1 ) { metaSpace.push(flatTags[i]); };
    if (flatTags[i].indexOf('OO') !== -1 ) { metaObject.push(flatTags[i]); };	
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

console.log("SPACE tags are " + spaceList);
console.log("OBJECT tags are " + objectList);
console.log("TIME tags are " + timeList);