'use-strict';

function multiply(parametr1, parametr2, parametr3) {
	var result;
	result = parametr1 * parametr2 * parametr3;
	return result;
}

console.log('Wynik: ' + multiply(3, 9, 10));

var funkcja = function () {
	return "wynik";
}

console.log(funkcja);
console.log(funkcja());


// Funkcja, ktora pobiera jako argument promien kola, dodatkowo liczy obwod i pole kola

function poleKolaObwodKola(promienKola) {
	var poleKola;
	var obwodKola;
	
	poleKola = Math.PI * Math.pow(promienKola,2);
	obwodKola = 2 * Math.PI * promienKola;
	
	console.log('Pole kola: ' + poleKola);
	return 'Dla kola o promieniu ' + promienKola + " pole wynosi: " + poleKola + ' oraz obwod wynosi: ' + obwodKola;
} 



console.log(poleKolaObwodKola(3));
console.log(poleKolaObwodKola(2));
console.log(poleKolaObwodKola(5));
console.log(poleKolaObwodKola(10));

