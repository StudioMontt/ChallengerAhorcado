var serieword = ['TECLADO', 'PANTALLA', 'CANVAS', 'MONITOR', 'HTML', 'SCRIPT'];
var wordSecret = '';
var tecla = '';
var letrasValidas = '';
var teclaValida = '';
var posicionLetra = '';

// Se elige automaticamente la palabra secreta.
function choose() {
	var random = Math.round(Math.random() * serieword.length);
	//var word = serieword[random];  //Opcion2

	wordSecret = serieword[random]; //word; //Opcion2
	console.log(wordSecret);
	begin(); //Iniciar juego
	lettersSpace(); //Crea los espacio para las letras
}

// Se identifica la tecla presionada.
function pressKey(event) {
	tecla = String.fromCharCode(event.keyCode);
	console.log(tecla);
	soloLetras();
}

// Valida las letras del abecedario de otros caracteres.
function soloLetras() {
	//	var letrasValidas = /^[A-ZÀ]+$/  //Opción 1
	var letrasValidas = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZÀ'; //Opción 2
	//	if (tecla.match(letrasValidas)){ //Opción 1
	if (letrasValidas.indexOf(tecla) >= 0) {
		//Opción 2

		teclaValida = tecla;
		document.getElementById('inputKey').innerHTML = teclaValida;
	} else {
		alert('Ingrese sólo letras A-Z');
	}
}

window.onkeydown = pressKey; // ejecuta la acción al presionar la tecla.

// (Opcion A) Divide las letras en un Array
function lasLetras() {
	var letras = Array.from(wordSecret);

	for (let i = 0; i < letras.length; i++) {
		if (wordSecret[i] == teclaValida) {
			console.log(wordSecret[i], ' es una letra correcta');
			posicionLetra = i;
			console.log('La posicion es ', i);
		} else {
			console.log('la letra no fue encontrada');
		}
	}
}

// (Opcion B) Divide las letras indicando posicion y letra.
function positionLetter() {
	for (let i in wordSecret) {
		//		console.log("la posicion actual es ",i," y el caracter es ",wordSecret[i]);
		if (wordSecret[i] == teclaValida) {
			console.log(wordSecret[i], ' es una letra correcta');
			posicionLetra = i;
			console.log('La posicion es ', i);
		} else {
			console.log('la letra no fue encontrada');
		}
	}
}
