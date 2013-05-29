var id = new Array;
var src = new Array;
var thumb = new Array;


function fillArray (number) {
	// body...
	for (var i = number - 1; i >= 0; i--) {
	id[i] = 'love' + 1;
	src[i] =  'hate' + i;
	thumb[i] = i;
	};
}

fillArray('logic');


console.log(id);
console.log(src);
console.log(thumb);