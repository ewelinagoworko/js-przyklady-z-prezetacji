'use strict';


var jsonOsoby = {
    "osoby": [
        {imie: "Krystian", nazwisko: "Dziopa", wzrost: "180", oczy: "niebieskie", zainteresowania: [ {nazwa: "podroze"}, {nazwa: "gotowanie"}] },
        {imie: "Kasia", nazwisko: "Zając", wzrost: "170", oczy: "zielone"},
        {imie: "Łukasz", nazwisko: "Badocha", wzrost: "170", oczy: "duże"}
    ]
}



jsonOsoby.osoby.forEach(function(element, index) {
		
		console.log('Pracownik ' + (index+1) + 'ma na imie ' + element.imie);		
						
});



var jsonPracownicy = { 
	"pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"},
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}]

}


jsonPracownicy.pracownicy.forEach(function(element, index) {
	console.log((index)+ " " + "-" + " " + element.firstName + " " + element.lastName);
});



var liczba = [1,2,3,4,5,6,7,8,9,10];


for ( var i=0; i<liczba.length; i++) {
	
	if (liczba[i]% 2 == 0) {	
		console.log(liczba[i] + ' liczba jest parzysta ');
	} else {
		console.log(liczba[i] + ' liczba jest nieparzysta ');
	}
}
		
	






