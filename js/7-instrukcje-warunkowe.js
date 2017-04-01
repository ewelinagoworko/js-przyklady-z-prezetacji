'use strict';

var wzrostMateusz = 200;
var wzrostKaja = 190;


// warunek if

if ( wzrostKaja == wzrostMateusz ) {
	console.log("Kaja jest niższa");
}

// warunek if else

if ( wzrostKaja > wzrostMateusz) {
	console.log("Kaja jest wyższa");
} else {
	console.log("Kaja jest niższa");
}

//warunek if else if

if ( wzrostKaja > wzrostMateusz) {
	
	console.log("Kaja jest wyzsza");
	
} else if (wzrostKaja == wzrostMateusz) {
	
	console.log("Kaja jest tak wysoka jak Mateusz")
	
} else {
	
	console.log("Kaja jest niższa");
}