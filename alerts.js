function welcome() {
	Swal.fire({
		title: 'Bienvenido al Juego del Ahorcado',
		text: 'Dale a "Nuevo Juego" y adivina la palabra.',
		confirmButtonText: 'Listo!',
		footer: '<span class="rojo">¡Sólo teclea las letras de A-Z!</span>',
	});
}

function gameOver() {
	Swal.fire({
		title: 'EL JUEGO TERMINÓ',
		text: 'Lo siento, se han acabado las oportunidades...',
		icon: 'error',
		confirmButtonText: '¿Jugar de nuevo?',
		backdrop: true,
		timer: 5000,
		timerProgressBar: true,
		allowOutsideClick: true,
		allowEscapeKey: true,
		allowEnterKey: true,
		stopKeydownPropagation: false,
	}).then((result) => {
		if (result.isConfirmed) {
			newGame();
		}
	});
}

function gameHappy() {
	Swal.fire({
		title: 'Felicidades!!!',
		text: 'Espero te hayas divertido',
		icon: 'success',
		confirmButtonText: '¿Jugar de nuevo?',
		footer: '<span class="rojo">¡Sólo teclea las letras de A-Z!</span>',
		backdrop: true,
		timer: 5000,
		timerProgressBar: true,
		allowOutsideClick: true,
		allowEscapeKey: true,
		allowEnterKey: true,
		stopKeydownPropagation: true,
		confirmButtonColor: 'green',
		confirmButtonAriaLabel: '¿Jugar de nuevo?',
	}).then((result) => {
		if (result.isConfirmed) {
			newGame();
		}
	});
}

function joined() {
	Swal.fire({
		text: 'Esa letra ya fue ingresada',
		icon: 'info',
		toast: true,
		position: 'bottom-end',
		timer: 2500,
		timerProgressBar: true,
		allowOutsideClick: true,
		allowEscapeKey: true,
		allowEnterKey: true,
		stopKeydownPropagation: true,
		showConfirmButton: false,
	});
}

function info() {
	Swal.fire({
		text: 'Ingrese sólo letras A-Z',
		icon: 'warning',
		toast: true,
		position: 'bottom-end',
		timer: 2500,
		timerProgressBar: true,
		allowOutsideClick: true,
		allowEscapeKey: true,
		allowEnterKey: true,
		stopKeydownPropagation: true,
		showConfirmButton: false,
	});
}

function pAgregada() {
	Swal.fire({
		text: 'La palabra fue agregada con éxito!',
		icon: 'info',
		toast: true,
		timer: 2500,
		timerProgressBar: true,
		allowOutsideClick: true,
		allowEscapeKey: true,
		allowEnterKey: true,
		stopKeydownPropagation: true,
		showConfirmButton: false,
	});
}
