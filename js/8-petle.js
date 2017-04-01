'use strict';

// pętla for:

//for (var i=10 ; i>=0 ; i--) {
	//console.log(i);
//}

//pętla while:

//var it;
//while ( it != 6) {
	//console.log(it);
	//losowanie od 1 do 10
	//it = Math.floor((Math.random() *10) + 1);
//}

// pętla do while:

var i;
do {
	//losowanie od 1 do 10
	i = Math.floor((Math.random() *10) + 1);
	console.log(i);
} while ( i !=6);

// przerywanie pętli - break

var a = 0;
while ( a < 10) {
	console.log(++a); //++a - to oznacza, ze zaczynamy liczyc od 1 i potem podnosimy co 1, natomiast a++ to zacznie liczyc od 0 (jezeli a=0) i bedzie powiekszac o 1
	
	if ( a == 5) {
		break;
	}
}

//przeskakiwanie do kolejnej iteracji - continue

for ( var b = 0; b < 10; ++b) {
	if (b == 5) {
		continue;
	} else {
		console.log(b);
	}
	
	console.log("--");
}


var tablica = [1,null,'Ala',3];
for (i=0; i<tablica.length; i++) {
	//console.log(tablica[i]);
	
	if(typeof tablica[i] != 'number') { //jezeli element tablicy jest rozny od typu numerycznego, to kontynuj, jezeli inaczej, to wyrzuc kolejny element tablicy
		continue;
	} else {
		console.log(tablica[i]);
	}
}