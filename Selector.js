var images = new Array;

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



//Extract tags

var allTags = _.pluck(images, "tags");

//Extract from tag input
var tagArray;

//

var tagSelection = ['object','bremen'];

// 

function tagConvert(masterTagArray) {
	var toFormat = masterTagArray.toString();
	tagSelection = toFormat.replace(/,/g , '&quot' + "&&" + '&quot');
};
//Tag selector

tagConvert(tagSelection);

console.log(tagSelection);

var selectedTags = _.filter(images, function (item) {
return item.tags.indexOf('object','apensen') !== -1;
});

//Image variable to be passed to function that puts images

var imageLinks = _.pluck(selectedTags, "src");

//Total number of objects

var objectTotal = _.size(images)-1;
var objectSelected = _.size(imageLinks);

//Percentage of objects

var objectPercent = (objectSelected*100)/objectTotal;




console.log(selectedTags);
console.log(imageLinks);

console.log("total number of tags " + objectTotal);

console.log("number of selected " + objectSelected);
console.log("percentage of total " + objectPercent);


function megaQuery(arrayToEval) {

	qSize = arrayToEval.length-1;
	console.log(qSize);

};

megaQuery(imageLinks);