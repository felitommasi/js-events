//!get form elements
const form = document.getElementById("formNuevoViaje");
const selecPasaje = document.getElementById("selecPasaje");
const selecPartida = document.getElementById("selectPartida");
const selecDestino = document.getElementById("selectDestino");
const precioTotalInput = document.getElementById("precioTotalInput");
const btnCalcular = document.getElementById("btnCalcular");
const btnCancelar = document.getElementById("btnCancelar");
const inputs = document.getElementsByClassName("msjeError");

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
function validaCampos() {
	//validar tipo pasaje
	selecPasaje.value === 0 ? validError() : validOk();

	//validar partida
	selecPartida.value === 0 ? validError() : validOk();

	//validar destino
	selecDestino.value === 0 ? validError() : validOk();
}

function obtenerValorBoleto() {
	if (selecPartida.value == 1 && selecDestino.value == 1) {
		precioTotalInput.value = 50;
		console.log(`el valor es 50`);
	} else if (selecPartida.value == 1 && selecDestino.value == 2) {
		precioTotalInput.value = 70;
		console.log(`el valor es 70`);
	} else if (selecPartida.value == 1 && selecDestino.value == 3) {
		precioTotalInput.value = 90;
		console.log(`el valor es 90`);
	} else if (selecPartida.value == 2 && selecDestino.value == 1) {
		precioTotalInput.value = 70;
		console.log(`el valor es 70`);
	} else if (selecPartida.value == 2 && selecDestino.value == 2) {
		precioTotalInput.value = 50;
		console.log(`el valor es 50`);
	} else if (selecPartida.value == 2 && selecDestino.value == 3) {
		precioTotalInput.value = 70;
		console.log(`el valor es 70`);
	} else if (selecPartida.value == 3 && selecDestino.value == 1) {
		precioTotalInput.value = 90;
		console.log(`el valor es 90`);
	} else if (selecPartida.value == 3 && selecDestino.value == 2) {
		precioTotalInput.value = 70;
		console.log(`el valor es 70`);
	} else if (selecPartida.value == 3 && selecDestino.value == 3) {
		precioTotalInput.value = 50;
		console.log(`el valor es 50`);
	} else {
		console.log(`error`);
	}
}

//calcular valor viaje
form.addEventListener("submit", (e) => {
	//detener envio del formulario
	e.preventDefault();

	//validacion campos
	validaCampos();

	//mostrar valor boleto en pantalla
	obtenerValorBoleto();

	//TODO: obtener texto de los select para mostrar en pantalla en historial
	const pasaje = selecPasaje.options[selecPasaje.selectedIndex].text;
	//console.log(pasaje);
	const partida = selecPartida.options[selecPartida.selectedIndex].text;
	//console.log(partida);
	const destino = selecDestino.options[selecDestino.selectedIndex].text;
	//console.log(destino);
	const valor = precioTotalInput.value;
	//console.log(valor);

	//crear objeto viaje
	const viaje = new Viaje(pasaje, partida, destino, valor);

	//pushear al array
	arrayViajesRealizados.push(viaje);
	//console.log(arrayViajesRealizados);

	//guardar el array en localstorage y convertirlo en JSON
	localStorage.setItem("arrayViajesRealizados", JSON.stringify(arrayViajesRealizados));

	//cambio de estilo btn
	btnCalcular.style.backgroundColor = "green";
	btnCalcular.innerText = "Comprar";

	//calcular valor
	btnCalcular.addEventListener("click", () => {
		Swal.fire({
			position: "top-end",
			icon: "success",
			title: "Listo, ¡buen viaje!",
			showConfirmButton: false,
			timer: 1500,
		});
		//vaciar inputs
		document.querySelector("#formNuevoViaje").reset();
	});

	//crear viaje para añadir al historial
	//const viajes = new Viaje(partida, destino, valor);
});

