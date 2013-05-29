//Main array with images, contains sources for thumb and full, tags and metatags, used to fill all other data needs.
var images = new Array;

images[0] = { 'src': '', 'thumb': '', 'tags':[''], 'meta':['']};
images[1] = { 'src': 'photos/001.jpg', 'thumb': 'thumb/001.jpg', 'tags':['food','sandwich','bremen','home','daily'], 'meta':['object','bremen','daily']};
images[2] = { 'src': 'photos/002.jpg', 'thumb': 'thumb/002.jpg', 'tags':['food','salad','bremen','home','daily'], 'meta':['object','bremen','daily']};
images[3] = { 'src': 'photos/003.jpg', 'thumb': 'thumb/003.jpg', 'tags':['food','salad','bremen','home','daily'], 'meta':['object','bremen','daily']};
images[4] = { 'src': 'photos/004.jpg', 'thumb': 'thumb/004.jpg', 'tags':['animal','bug','bremen','home','daily'], 'meta':['object','bremen','daily']};
images[5] = { 'src': 'photos/005.jpg', 'thumb': 'thumb/005.jpg', 'tags':['object','game','bremen','home','daily','desk'], 'meta':['object','bremen','daily']};
images[6] = { 'src': 'photos/006.jpg', 'thumb': 'thumb/006.jpg', 'tags':['object','flower','apensen','trip','artistic','closeup'], 'meta':['object','apensen','romantic']};
images[7] = { 'src': 'photos/007.jpg', 'thumb': 'thumb/007.jpg', 'tags':['building','malerschule','apensen','trip','artistic'], 'meta':['building','apensen','artistic']};
images[8] = { 'src': 'photos/008.jpg', 'thumb': 'thumb/008.jpg', 'tags':['object','grill','apensen','trip','artistic','closeup'], 'meta':['object','apensen','artistic']};
images[9] = { 'src': 'photos/009.jpg', 'thumb': 'thumb/009.jpg', 'tags':['object','flower','apensen','trip','artistic','closeup'], 'meta':['object','apensen','artistic']};
images[10] = { 'src': 'photos/010.jpg', 'thumb': 'thumb/010.jpg', 'tags':['object','street','bremen','artistic','closeup'], 'meta':['object','bremen','daily']};

//Variable holding all tags (maybe needed later)
var allTags = _.pluck(images, "tags");

//Buttons for textual search gallery
var tagButtons = [];

//Variable that holds the selected tags
var tagSelection = ['object','bremen','daily'];

//Logging of the size and values of the selected tags
console.log(tagSelection + " are the values of tagSelection variable");
console.log(tagSelection.length + " is the length of tagSelection variable");

//Variable that holds the array with the selected images
var selection = []; 

//Function to evaluate if picture has both elements, contains logs for events happening within the function.
function detailedEval (imageToEvaluate) {
	var queryNumber = tagSelection.length;
	var innerSelection = [];
		for (var i = tagSelection.length-1; i >= 0; i--) {
			var proof;
			proof = imageToEvaluate.tags.indexOf(tagSelection[i]);
			console.log("Tag number " + i + " was found!");
			if (proof == -1) {
				console.log("Tag number " + i + " was not found, image not given")
				return -1;
			} else{ console.log ("pass"); };
		};
		console.log("Image contains all tags!")
		console.log(imageToEvaluate);
		selection.push(imageToEvaluate);
	return innerSelection;
	console.log(innerSelection);
};

console.log("These are the tags " + tagSelection);

//Function to evaluate the complete array
for (var i = images.length - 1; i >= 0; i--) {
		detailedEval(images[i]) };

//Variable holding the size of the selection
var selectionSize = selection.length;

//Variable holding all links to selected full size images
var imageLinks = _.pluck(selection, "src");

//Variable holding all links to selected image thumbnails
var imageThumbs = _.pluck(selection, "thumb");

//Variable holding selected tags
var selectedObjectTags = _.pluck(selection, "tags");

//Variable holding total number of objects
var objectTotal = _.size(images)-1;

//Variable holding total number of selected objects
var objectSelected = _.size(selection);

//Percentage of selected objects related to the total
var objectPercent = (objectSelected*100)/objectTotal;

//Back button
function backButton() {
	tagSelection.pop(); //Takes element out from selectedTags array
}

//Logging of the selected items, the number of items selected and the links to the image files
console.log(selection);
console.log("number of tags selected: " + selectionSize);
console.log(imageLinks);

console.log("-------------STATS--------------");
console.log("total number of images " + objectTotal);
console.log("selected number of images " + objectSelected);
console.log("percentage of images in selection " + objectPercent);

console.log("-------------TAGS---------------");
console.log(selectedObjectTags);