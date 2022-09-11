var serieword = ['TECLADO', 'PANTALLA', 'CANVAS', 'MONITOR', 'HTML', 'SCRIPT'];
var wordSecret = '';
var presionLetra = '';

function choose() {
	var random = Math.round(Math.random() * serieword.length);
	//var word = serieword[random];

	wordSecret = serieword[random]; //word;
	console.log(wordSecret);
	console.log(wordSecret.length);
	begin();
	lettersSpace();
	pressLetters();
	mastil();
}

function pressLetters() {
	presionLetra = prompt(String.fromCharCode(event.keyCode));
	console.log(presionLetra);
}

function SoloLetras(e) {
	key = e.keyCode || e.which;
	tecla = String.fromCharCode(key);
	letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz';
	especiales = array.from(wordSecret); //"8-37-39-46";

	tecla_especial = false;

	for (var i in especiales) {
		if (key == especiales[i]) {
			tecla_especial = true;
			break;
		}
	}

	if (letras.indexOf(tecla) == -1 && !tecla_especial) {
		return false;
	}
}

function mastil() {
	if (presionLetra == 'F') {
		//MASTIL
		pincel.fillRect(40, 50, 6, 300);
		pincel.beginPath();
		pincel.moveTo(43, 320);
		pincel.lineTo(63, 350);
		pincel.lineTo(23, 350);
		pincel.fill();
	} else {
		console.log('Equivocado');
	}
}
/*
click1.onclick=codificar;
click2.onclick=decodificar;
click3.onclick=copiar;
*/
