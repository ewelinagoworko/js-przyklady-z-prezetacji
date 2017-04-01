/* Typ liczbowy */

var wyplata = 5000;
var premia = 2500;
var calkowitaWyplata;

calkowitaWyplata = wyplata + premia;

console.log(calkowitaWyplata);

/* Typ łańcuchowy - łańcuch znakow - string */

var wyplataStr = "Ala ma kota, a kot ma Ale";
var premiaStr = "";
var calkowitaWyplataStr;


calkowitaWyplataStr = wyplataStr + premiaStr;

console.log(calkowitaWyplataStr);

/* zeby sprawdzić typ zmiennej, to uzywamy typeof :

console.log(typeof calkowitaWyplataStr);

*/

/* Uppercase string - duze litery */

var nowyString = calkowitaWyplataStr.toUpperCase();

console.log(nowyString);


// metoda TRIM - do usuwania spacji
var nowyTekst = calkowitaWyplataStr.trim();

console.log(nowyTekst);


// metoda SPLIT - do rozdzielania, w nawiasie po split ustawiamy sobie parametr, po ktorym ma dzielic nasz string np. spacje, przecinki, kropki

var nowaMetoda = calkowitaWyplataStr.split(",");
console.log(nowaMetoda);

// Typ logiczny zmiennych - boolean

var czyJestSmog;
czyJestSmog = false;

//jesli czy jest smog jest prawda, to wyrzuc w konsoli 'jest smog', jezeli czy jest smog jest false, to wyrzuc inna wartosc tj. nie ma smogu

if (czyJestSmog) {
	console.log("Jest SMOG");
} else {
	console.log("Nie ma smogu");
}


// Typy specjalne - undefined oraz null

var niezdefiniowanaZmienna;
var nullowaZmienna = null;

console.log(niezdefiniowanaZmienna);
console.log(nullowaZmienna);