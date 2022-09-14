var tablero = document.getElementById('palabras').getContext('2d');

function lettersSpace() {
	//ESTILOS
	tablero.fillStyle = 'red';
	tablero.strokeStyle = 'red';
	tablero.lineWidth = 4;
	tablero.lineCap = 'round';
	tablero.lineJoin = 'round';

	//ESPACIO DE CADA LETRA
	var spaceLetters = 260 / wordSecret.length;

	for (var i = 0; i < wordSecret.length; i++) {
		tablero.moveTo(20 + spaceLetters * i, 50);
		tablero.lineTo(45 + spaceLetters * i, 50);
	}

	tablero.stroke();
	tablero.closePath();
	console.log(spaceLetters);
	console.log(i);
}

var pincel = document.getElementById('monito').getContext('2d');

function begin() {
	//ESTILOS
	pincel.fillStyle = 'blue';
	pincel.strokeStyle = 'blue';
	pincel.lineWidth = 4;
	pincel.lineCap = 'round';
	pincel.lineJoin = 'round';

	//PLANO DEL LIENZO
	//pincel.fillRect(0, 0, 300, 380);

	//SUELO
	pincel.beginPath();
	pincel.fillRect(15, 350, 270, 6);
	pincel.fill();
	pincel.closePath();
}

//TRAVESAÑO
pincel.beginPath();
pincel.fillRect(40, 50, 119, 6);
pincel.fill();
pincel.beginPath();
pincel.arc(163, 53, 5, 0, 2 * 3.14);
pincel.stroke();

//CUERDA
pincel.beginPath();
pincel.lineWidth = 4;
pincel.moveTo(163, 57);
pincel.lineTo(163, 85);
pincel.stroke();

//CABEZA
pincel.lineWidth = 6;
pincel.beginPath();
pincel.arc(163, 110, 25, 0, 2 * 3.14);
pincel.stroke();

//CUERPO
pincel.beginPath();
pincel.fillRect(158, 132, 10, 90);
pincel.fill();

//BRAZO DERECHO
pincel.lineWidth = 6;
pincel.lineCap = 'round';
pincel.beginPath();
pincel.moveTo(160, 145);
pincel.lineTo(120, 200);
pincel.stroke();

//BRAZO IZQUIERDO
pincel.beginPath();
pincel.moveTo(166, 145);
pincel.lineTo(206, 200);
pincel.stroke();

//PIERNA DERECHA
pincel.moveTo(160, 220);
pincel.lineTo(120, 300);
pincel.stroke();

//PIERNA IZQUIERDA
pincel.moveTo(166, 220);
pincel.lineTo(206, 300);
pincel.stroke();
