//!get form elements
window.addEventListener("load", () => {
	const form = document.getElementById("form");
	const tipoPasaje = document.getElementById("tipoPasaje");
	const partida = document.getElementById("selectPartida");
	const destino = document.getElementById("selectDestino");
	const precioTotal = document.getElementById("precioTotalInput");
	const btnComprar = document.getElementById("btnComprar");
	const btnCancelar = document.getElementById("btnCancelar");
	const inputs = document.getElementsByClassName("msjeError");

	//!listado viajes realizados
	const arrayViajesRealizados = [];

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		validaCampos();
	});

	//!validacion form
	const validaCampos = () => {

		//validar tipo pasaje
		if (parseInt(tipoPasaje.value) === 0) {
			validError();
		} else {
			validOk();
			valorPasaje();
			console.log(tipoPasaje.value);
		}

		//validar partida
		if (parseInt(partida.value) === 0) {
			validError();
		} else {
			validOk();
			valorPasaje();
			console.log(partida.value);
		}

		//validar destino
		if (parseInt(destino.value) === 0) {
			validError();
		} else {
			validOk();
			valorPasaje();
			console.log(destino.value);
		}
	};

	//msje en caso de error
	const validError = () => {
		let formControl = document.querySelectorAll(".msjeError");
		for (const el of formControl) {
			el.innerHTML = "Por favor completa este campo";
		}
		console.log("error");
	};

	//msje en caso de correcto
	const validOk = () => {
		console.log("ok");
	};


	//!comparar input con array para conseguir valor pasaje
	const valorPartida = parseInt(partida.value);
	const valorDestino = parseInt(destino.value);
	let seccionDestino;
	let seccionPartida; 
	console.log(valorPartida);
	console.log(valorDestino);
	console.log(seccionPartida);
	console.log(seccionDestino);

	for (let el = 0; el < arrayEstaciones.length; el++) {
		const id = arrayEstaciones[el].id;
		
		//determinar seccion estacion partida
		if(valorPartida == id){
			return seccionPartida = (arrayEstaciones[el].seccion);
		}
		if(valorDestino == id){
			return seccionDestino = (arrayEstaciones[el].seccion);
			
		}
	
	
	} 	
	
});

