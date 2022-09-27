var serieWord = ['CABALLO', 'CHANCHO', 'PERRO', 'GATO', 'CONEJO', 'VACA'];
var wordSecret = '';
var tecla = '';
var teclasValidas = [];
var malas = '';
var errores = 9;
var happy = false;

// Revisa si existe un lista de palabras actualizadade la Storage.
function review() {
	let serieWord2 = JSON.parse(sessionStorage.getItem('palabraAgregada'));
	if (serieWord2 !== null) {
		if (serieWord.length !== serieWord2.length) {
			serieWord = serieWord2;
			choose();
		}
	}
	choose();
}

// Se elige automaticamente la palabra secreta.
function choose() {
	console.log(serieWord);
	let random = Math.round(Math.random() * serieWord.length);
	//var word = serieWord[random];  //Opcion2

	wordSecret = serieWord[random]; //word; //Opcion2
	console.log(wordSecret);
	begin(); //Iniciar juego
	lettersSpace(); //Crea los espacio para las letras
	welcome(); // PushPop de Bienvenida.
}

function newGame() {
	window.location.reload();
	setTimeout(choose, 1000);
}

// Descuento de las incorrectas.
function incorrects() {
	errores -= 1;
	console.log(errores);
	if (errores == 0) {
		gameOver();
	}
}

// Se identifica la tecla presionada.
function pressKey(event) {
	if (errores != 0) {
		if (happy === false) {
			tecla = String.fromCharCode(event.keyCode);
			console.log(tecla);
			soloLetras();
		} else {
			console.log('El juego a acabado');
		}
	} else {
		console.log('No hay más intentos');
	}
}
window.onkeydown = pressKey; // ejecuta la acción al presionar la tecla.

// Valida las letras del abecedario de otros caracteres.
function soloLetras() {
	let estado = false;
	//	var letrasValidas = /^[A-ZÀ]+$/  //Opción 1
	let letrasValidas = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZÀ'; //Opción 2
	//	if (tecla.match(letrasValidas)){ //Opción 1
	if (teclasValidas.includes(tecla)) {
		console.log('la letra ', tecla, ' ya fue ingresada');
		joined();
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
			info();
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
				setTimeout(conglatulations, 500);
			}
		}
	} else {
		//INCORRECTAS
		fails();
	}
}

// Ingresa las letras erradas
function fails() {
	malas = document.getElementById('erradas').value;
	if (malas.includes(tecla)) {
		console.log('Ya ocupaste las letras ', malas);
	} else {
		document.getElementById('erradas').value += tecla;
		malas = document.getElementById('erradas').value;
		console.log(malas);
		drawCanvas();
	}
}

// Dibuja los canvas
function drawCanvas() {
	let funcCanvas = [
		mastil,
		travesano,
		cuerda,
		cabeza,
		cuerpo,
		brazoDer,
		brazoIzq,
		piernaDer,
		piernaIzq,
	];
	for (let i = 0; i < malas.length; i++) {
		funcCanvas[i]();
	}
	setTimeout(incorrects, 500);
}

function conglatulations() {
	let ganadas = 0;
	for (i = 0; i < wordSecret.length; i++) {
		//Cuenta las letras acertadas
		if (teclasValidas.indexOf(wordSecret.charAt(i), 0) != -1) {
			ganadas++;
		}
	}
	console.log(ganadas);
	if (ganadas == wordSecret.length) {
		happy = true;
		//Verifica que se completó la palabra.
		gameHappy();
	}
}

function enterWord() {
	let newWord = document.getElementById('nuevaPalabra').value;
	newWord = newWord.toUpperCase();

	if (newWord.length <= 9) {
		serieWord.push(newWord);
		console.log(serieWord);
		sessionStorage.setItem('palabrasAgregadas', JSON.stringify(serieWord));
		pAgregada();
		console.log('La palabra', newWord, ' se agregó con éxito!');
		document.getElementById('nuevaPalabra').value = '';
		document.getElementById('nuevaPalabra').focus();
	} else {
		maxLetters();
	}
}
