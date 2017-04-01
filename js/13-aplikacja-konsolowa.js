function Osoba (imie, waga, wzrost) {
	this.imie = imie;
	this.wzrost = wzrost;
	this.waga = waga;
	this.bmi = function () {
		var result;
		result = waga / Math.pow(wzrost,2);
		return result;
	}
	
}
	

	
	var zygmunt = new Osoba('Zygmunt', 70, 1.80);
	console.log (zygmunt.imie + " Twoje BMI to " + zygmunt.bmi());