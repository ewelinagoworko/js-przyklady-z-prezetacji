'use strict';

var imie; // deklaracja zmiennej // //zmienna globalna//
var imieDamskie = "Kaja";
var wiek = 37;

var kolor = "czerwony";

imie = "Sergio"; //przypisanie wartosci zmiennej //

imie = imieDamskie;

console.log(imie);


function wyswietlZmienna() {
	var imie = 180; // zmienna lokalna, bo jest wewnatrz funkcji i jest zadeklarowana przez var //
	console.log(imie);
}

wyswietlZmienna();

console.log(imie);

