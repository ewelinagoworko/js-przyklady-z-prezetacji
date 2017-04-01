'use strict';

var liczba1 = 13, liczba2 = 5;

var wynik;

wynik = liczba1 % liczba2;
console.log(wynik);

console.log(wynik);
liczba1 += liczba2 // czyli liczba1 = liczba2 + liczba1
console.log(liczba1);

var liczba3 = 4;
var liczba4 = 4;
if (liczba3 == liczba4) {
	console.log('Liczby sa rowne');
} else if (liczba3 === liczba4) {
	console.log('liczby sa identyczne');
}


var liczba5 = 10;
if (liczba5 == 4 || liczba5%2 == 0) {
	console.log('Operatory logiczne');
}

//operator warunkowy ?

(2>5) ? console.log("tak") : console.log('nie');