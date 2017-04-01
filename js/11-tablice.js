'use strict';

var imiona = ['Monika', 'Krystian', 'Łukasz'];

imiona[3] = 'Tania';
imiona[2] = 'Ela';

//console.log(imiona);

//imiona.push('Gerald'); //dodaje jeden element na poczatku

//imiona.pop(); //usuwa jeden element na koncu i nie przyjmuje argumentow
//imiona.pop();


imiona.unshift('Robert, Krzysztof') //unshift wstawia elemnt na poczatku tablicy
console.log(imiona);


imiona.shift(); //shift usuwa pierwszy element na poczatku tablicy
/*console.log(imiona);
console.log(imiona.length);*/

for (var i=0; i<imiona.length; i++) {
	console.log("Index: " + i + ' wartosc: ' + imiona[i]);
}
	

// pętla for each dla tablic:

imiona.forEach(function(element, index) {
	console.log('Element nr ' + index + ' = ' + element);
});


//metoda join:

//console.log(imiona.join());

//metoda reverse:

console.log(imiona.reverse());

//metoda concat:

var imionaMeskie = ['Robert', 'Mariusz', 'Andrzej'];
var zbiorImion = imionaMeskie.concat(imiona);
console.log(zbiorImion.sort());

console.log(zbiorImion.indexOf('Mariusz'));

console.log(Array.isArray(zbiorImion));

console.log(zbiorImion.slice(2, 5)); //obcinanie elementow

console.log(zbiorImion.splice(2,2)); // od 2 elementu wytnij 2 elementy i utworz z nich nowa tablice

console.log(zbiorImion);
zbiorImion.splice(2,2, "Julek", "Krzys"); //od drugiego elementu wytnie dwa elementy i wstawi na ich miejsce julek i krzys
console.log(zbiorImion);


console.log(zbiorImion.toString());









