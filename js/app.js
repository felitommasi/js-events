//!get form elements
window.addEventListener("load", () => {
	const form = document.getElementById("form");
	const tipoPasaje = document.getElementById("tipoPasaje");
	const partida = document.getElementById("selectPartida");
	const destino = document.getElementById("selectDestino");
	const precioTotal = document.getElementById("precioTotalInput");
	const btnCalcular = document.getElementById("btnCalcular");
	const btnCancelar = document.getElementById("btnCancelar");
	const inputs = document.getElementsByClassName("msjeError");

	const valorPartida = parseInt(partida.value);
	const valorDestino = parseInt(destino.value);

	//msje en caso de correcto
	const validOk = () => {
		console.log("ok");
	};

	//msje en caso de error
	const validError = () => {
		let formControl = document.querySelectorAll(".msjeError");
		for (const el of formControl) {
			el.innerHTML = "Por favor completa este campo";
		}
		console.log("error");
	};
	//!validacion form
	const validaCampos = () => {
		//validar tipo pasaje
		if (parseInt(tipoPasaje.value) === 0) {
			validError();
		} else {
			validOk();
			console.log(tipoPasaje.value);
		}

		//validar partida
		if (parseInt(partida.value) === 0) {
			validError();
		} else {
			validOk();
			console.log(partida.value);
		}

		//validar destino
		if (parseInt(destino.value) === 0) {
			validError();
		} else {
			validOk();
			console.log(destino.value);
		}
	};

	const obtenerValorBoleto = (inicio, fin) => {
		const recorrido = arrayEstaciones.slice(inicio, fin).length * 10;

		if (parseInt(tipoPasaje.value) === 1) {
			let valorRecorrido = recorrido * 1;
			precioTotalInput.value = `$${valorRecorrido}`;
		} else if (parseInt(tipoPasaje.value) === 2) {
			let idaYvuelta = recorrido * 2 * 0.75;
			precioTotalInput.value = `$${idaYvuelta}`;
		}
	};

	//ejecutar funciones cuando se da submit
	form.addEventListener("submit", (e) => {
		e.preventDefault();

		//validacion campos
		validaCampos();

		//calcular valor pasaje
		obtenerValorBoleto(parseInt(partida.value), parseInt(destino.value));
		btnCalcular.addEventListener("click", () => {
			btnCalcular.style.backgroundColor = "green";
			btnCalcular.innerText = "Comprar";
		});

		//obtener valores del form para agregar al historial
		function obtenerEstacionPartida() {
			let agregarPartida;

			for (let id = 0; id < arrayEstaciones.length; id++) {
				const estacion = arrayEstaciones[id].id;

				if (estacion == partida.value) {
					agregarPartida = arrayEstaciones[id].estacion;
					console.log(agregarPartida);
					arrayViajesRealizados.push(agregarPartida);
				}
			}
		}

		function obtenerEstacionDestino() {
			let agregarDestino;

			for (let id = 0; id < arrayEstaciones.length; id++) {
				const estacion2 = arrayEstaciones[id].id;

				if (estacion2 == destino.value) {
					agregarDestino = arrayEstaciones[id].estacion;
					console.log(agregarDestino);
					arrayViajesRealizados.push(agregarDestino);
				}
			}
		}

		//comprobacion por consola de valores obtenidos
		obtenerEstacionPartida();
		obtenerEstacionDestino();
		console.log(precioTotal.value);
		console.log(arrayViajesRealizados);

		//mostrar en el historial
		
	});
});
