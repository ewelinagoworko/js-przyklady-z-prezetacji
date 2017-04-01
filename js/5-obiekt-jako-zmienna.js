'use strict';

// Obiekt jako zmienna

var student = {
	imie: "Kaja",
	wzrost: 152,
	wyswietlDane: function() { console.log("Student ma na imie " + this.imie + " i ma " + this.wzrost + "cm wzrostu") //odwolujemy sie poprzez this do elementu imie w zmiennej student - mozna to tez zapisac jako student.imie, ale bardziej praktyczne bedzie this.imie
	}
}

student.wyswietlDane();
console.log(student.wzrost);
console.log(student);