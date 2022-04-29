//!get form elements
window.addEventListener("load", () => {
	const form = document.getElementById("formNuevoViaje");
	const tipoPasaje = document.getElementById("tipoPasaje");
	const partida = document.getElementById("selectPartida");
	const destino = document.getElementById("selectDestino");
	const precioTotal = document.getElementById("precioTotalInput");
	const btnCalcular = document.getElementById("btnCalcular");
	const btnCancelar = document.getElementById("btnCancelar");
	const inputs = document.getElementsByClassName("msjeError");
	
	//array para guardar viajes
	const arrayViajesRealizados = [];

	//msje por pantalla en caso de correcto
	const validOk = () => {
		console.log("ok");
	};

	//msje por pantalla en caso de error
	const validError = () => {
		let formControl = document.querySelectorAll(".msjeError");
		for (const el of formControl) {
			el.innerHTML = "Por favor completa este campo";
		}
		console.log("error");
	};

	//!validacion form
	const validaCampos = () => {
		const valorPartida = parseInt(partida.value);
		const valorDestino = parseInt(destino.value);
		
		//validar tipo pasaje
		parseInt(tipoPasaje.value) === 0 ? validError() : validOk();

		//validar partida
		valorPartida === 0 ? validError() : validOk();
		
		//validar destino
		valorDestino === 0 ? validError() : validOk();
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
	//calcular valor pasaje
	form.addEventListener("submit", (e) => {
		e.preventDefault();

		//validacion campos
		validaCampos();

		//cambio de estilo btn
		btnCalcular.style.backgroundColor = "green";
		btnCalcular.innerText = "Comprar";

		//comprar pasaje y confirmacion
		obtenerValorBoleto(parseInt(partida.value), parseInt(destino.value));
		btnCalcular.addEventListener("click", () => {
			Swal.fire({
				position: "top-end",
				icon: "success",
				title: "Listo, ¡buen viaje!",
				showConfirmButton: false,
				timer: 1500,
			});
			//vaciar inputs
			tipoPasaje.value = "";
			partida.value = "";
			destino.value = "";
			precioTotalInput.value = "";
		});

	
		//obtener valores del form para agregar al historial
		function obtenerValoresInputs() {
			let agregarPartida;
			let agregarDestino;

			for (let id = 0; id < arrayEstaciones.length; id++) {
				const estacion = arrayEstaciones[id].id;

				if (estacion == partida.value) {
					agregarPartida = arrayEstaciones[id].estacion;
				}
			}

			for (let id = 0; id < arrayEstaciones.length; id++) {
				const estacion2 = arrayEstaciones[id].id;

				if (estacion2 == destino.value) {
					agregarDestino = arrayEstaciones[id].estacion;
				}
			}

		arrayViajesRealizados.push(agregarPartida);
		arrayViajesRealizados.push(agregarDestino);
		
		console.log(arrayViajesRealizados)

		}
	
		obtenerValoresInputs();
		//crear viaje para añadir al historial
		const viajes = new Viaje(partida, destino, valor);

	});
});

