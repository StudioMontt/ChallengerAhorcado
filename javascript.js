var serieword = ['TECLADO', 'PANTALLA', 'CANVAS', 'MONITOR', 'HTML', 'SCRIPT'];
var wordSecret = '';
var tecla = '';
var letrasValidas = '';
var teclasValidas = [];
var posicionLetra = '';
var malas = '';
var letraCorrecta = '';
var letraIncorrecta = '';

// Se elige automaticamente la palabra secreta.
function choose() {
	var random = Math.round(Math.random() * serieword.length);
	//var word = serieword[random];  //Opcion2

	wordSecret = serieword[random]; //word; //Opcion2
	console.log(wordSecret);
	begin(); //Iniciar juego
	lettersSpace(); //Crea los espacio para las letras
}

function letterIncorrect() {
	errores -= 1;
}

// Se identifica la tecla presionada.
function pressKey(event) {
	tecla = String.fromCharCode(event.keyCode);
	console.log(tecla);
	soloLetras();
}
window.onkeydown = pressKey; // ejecuta la acción al presionar la tecla.

// Valida las letras del abecedario de otros caracteres.
function soloLetras() {
	let estado = false;
	//	var letrasValidas = /^[A-ZÀ]+$/  //Opción 1
	var letrasValidas = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZÀ'; //Opción 2
	//	if (tecla.match(letrasValidas)){ //Opción 1
	if (teclasValidas.includes(tecla)) {
		console.log('la letra ', tecla, ' ya fue ingresada');
	} else {
		if (letrasValidas.indexOf(tecla) >= 0) {
			if (tecla == 'À') {
				tecla = 'Ñ';
			}
			teclasValidas.push(tecla);
			console.log(teclasValidas);
			letterInOut();
			return estado;
		} else {
			alert('Ingrese sólo letras A-Z');
			estado = true;
			return estado;
		}
	}
}

// Comprobación de la letra en la palabra.
function letterInOut() {
	if (tecla && wordSecret.includes(tecla)) {
		//CORRECTAS
		for (let i = 0; i < wordSecret.length; i++) {
			if (wordSecret[i] === tecla) {
				letrasCorrectas(i);
			}
		}
	} else {
		//INCORRECTAS
		fails();
		letrasIncorrectas(tecla, errores);
	}
}

function fails() {
	malas = document.getElementById('erradas').value;
	if (malas.includes(tecla)) {
		console.log('Ya ocupaste las letras ', malas);
	} else {
		document.getElementById('erradas').value += tecla;
		malas = document.getElementById('erradas').value;
		console.log(malas);
	}
}
