var tablero = document.getElementById('palabras').getContext('2d');
var xWhile=260;

// Preparación de los espacios para las letras
function lettersSpace() {
	//ESTILOS
	tablero.fillStyle = 'red';
	tablero.strokeStyle = 'red';
	tablero.lineWidth = 4;
	tablero.lineCap = 'round';
	tablero.lineJoin = 'round';

	//ESPACIO DE CADA LETRA
	var spaceLine = xWhile / wordSecret.length;

	for (var i = 0; i < wordSecret.length; i++) {
		tablero.moveTo(20 + spaceLine * i, 50);
		tablero.lineTo(45 + spaceLine * i, 50);
	}

	tablero.stroke();
	tablero.closePath();
}

// Preparación de los espacios para la palabra
function letrasCorrectas(lugar) {
	tablero.font = 'bold 40px Inter';
	tablero.lineWidth = 2;
	tablero.lineCap = 'round';
	tablero.lineJoin = 'round';
	tablero.fillStyle = 'red';

	//ESPACIO POR CADA LETRA DE LA PALABRA
	var spaceLetters = xWhile / wordSecret.length;
	tablero.fillText(wordSecret[lugar], 20 + spaceLetters * lugar, 40);
	tablero.stroke();
}

var pincel = document.getElementById('monito').getContext('2d');

//ESTILOS
pincel.fillStyle = 'blue';
pincel.strokeStyle = 'blue';
pincel.lineWidth = 4;
pincel.lineCap = 'round';
pincel.lineJoin = 'round';

// Se dibuja la base del dibujo
function begin() {
	//SUELO
	pincel.beginPath();
	pincel.fillRect(15, 350, 270, 6);
	pincel.fill();
	pincel.closePath();
}

//MASTIL
function mastil() {
	pincel.fillRect(40, 50, 6, 300);
	pincel.beginPath();
	pincel.moveTo(43, 320);
	pincel.lineTo(63, 350);
	pincel.lineTo(23, 350);
	pincel.fill();
}

//TRAVESAÑO
function travesano() {
	pincel.beginPath();
	pincel.fillRect(40, 50, 119, 6);
	pincel.fill();
	pincel.beginPath();
	pincel.arc(163, 53, 5, 0, 2 * 3.14);
	pincel.stroke();
}

//CUERDA
function cuerda() {
	pincel.beginPath();
	pincel.lineWidth = 4;
	pincel.moveTo(163, 57);
	pincel.lineTo(163, 85);
	pincel.stroke();
}

//CABEZA
function cabeza() {
	pincel.lineWidth = 6;
	pincel.beginPath();
	pincel.arc(163, 110, 25, 0, 2 * 3.14);
	pincel.stroke();
}

//CUERPO
function cuerpo() {
	pincel.beginPath();
	pincel.fillRect(158, 132, 10, 90);
	pincel.fill();
}

//BRAZO DERECHO
function brazoDer() {
	pincel.lineWidth = 6;
	pincel.lineCap = 'round';
	pincel.beginPath();
	pincel.moveTo(160, 145);
	pincel.lineTo(120, 200);
	pincel.stroke();
}

//BRAZO IZQUIERDO
function brazoIzq() {
	pincel.beginPath();
	pincel.moveTo(166, 145);
	pincel.lineTo(206, 200);
	pincel.stroke();
}

//PIERNA DERECHA
function piernaDer() {
	pincel.moveTo(160, 220);
	pincel.lineTo(120, 300);
	pincel.stroke();
}

//PIERNA IZQUIERDA
function piernaIzq() {
	pincel.moveTo(166, 220);
	pincel.lineTo(206, 300);
	pincel.stroke();
}
