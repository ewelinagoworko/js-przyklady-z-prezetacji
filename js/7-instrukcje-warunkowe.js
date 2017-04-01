'use strict';

var wzrostMateusz = 190;
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


// warunek switch

var kolor = "bialy";

switch (kolor) {
	case "czerowny":
		console.log('Kolor czerowny')
		break;
	case 'zielony':
		console.log('Kolor zielony')
		break;
	case 'niebieski':
		console.log('Kolor niebieski')
		break;
	default:
		console.log('Inny kolor')
}