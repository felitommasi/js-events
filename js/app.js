//!get form elements
const formulario = document.getElementById("formCompraViaje");
const selectPasaje = document.getElementById("selectPasaje");
const selectPartida = document.getElementById("selectPartida");
const selectDestino = document.getElementById("selectDestino");
const precioTotalInput = document.getElementById("precioTotalInput");
const btnCalcular = document.getElementById("btnCalcular");
const btnCancelar = document.getElementById("btnCancelar");
const btnComprar = document.getElementById("btnComprar");
const inputs = document.getElementsByClassName("msjeError");
const cardHistorialViajes = document.getElementById("cardViajes");

//Fetch local
const cargarData = async () => {
	try {
		const respuesta = await fetch("JSON/tabla.json");
		const arrayData = await respuesta.json();
		//console.log(arrayData);
		pintarSelect(arrayData);

	} catch (error) {
		console.log(error);
	}
};
cargarData();


//pintar data en options
const pintarSelect = (arrayData) => {	
	for (let i = 0; i < arrayData.length; i++) {
		let textoSelect = arrayData[i].estacion;
		document.querySelector(".optionEstacionPartida").innerHTML = textoSelect;
	}
}


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
	parseInt(selectPasaje.value) === 0 ? validError() : validOk();

	//validar partida
	parseInt(selectPartida.value) === 0 ? validError() : validOk();

	//validar destino
	parseInt(selectDestino.value) === 0 ? validError() : validOk();
}

//funcion pasaje solo ida
function obtenerValorBoleto() {
	if (
		selectPartida.value == 1 &&
		selectDestino.value == 1 &&
		selectPasaje.value == 1
	) {
		precioTotalInput.value = 50;
	} else if (
		((selectPartida.value == 1 && selectDestino.value == 2) ||
			(selectDestino.value == 1 && selectPartida.value == 2)) &&
		selectPasaje.value == 1
	) {
		precioTotalInput.value = 70;
	} else if (
		((selectPartida.value == 1 && selectDestino.value == 3) ||
			(selectDestino.value == 1 && selectPartida.value == 3)) &&
		selectPasaje.value == 1
	) {
		precioTotalInput.value = 90;
	} else if (
		((selectPartida.value == 2 && selectDestino.value == 1) ||
			(selectDestino.value == 2 && selectPartida.value == 1)) &&
		selectPasaje.value == 1
	) {
		precioTotalInput.value = 70;
	} else if (
		selectPartida.value == 2 &&
		selectDestino.value == 2 &&
		selectPasaje.value == 1
	) {
		precioTotalInput.value = 50;
	} else if (
		((selectPartida.value == 2 && selectDestino.value == 3) ||
			(selectDestino.value == 2 && selectPartida.value == 3)) &&
		selectPasaje.value == 1
	) {
		precioTotalInput.value = 70;
	} else if (
		((selectPartida.value == 3 && selectDestino.value == 1) ||
			(selectDestino.value == 3 && selectPartida.value == 1)) &&
		selectPasaje.value == 1
	) {
		precioTotalInput.value = 90;
	} else if (
		((selectPartida.value == 3 && selectDestino.value == 2) ||
			(selectDestino.value == 3 && selectPartida.value == 2)) &&
		selectPasaje.value == 1
	) {
		precioTotalInput.value = 70;
	} else if (
		selectPartida.value == 3 &&
		selectDestino.value == 3 &&
		selectPasaje.value == 1
	) {
		precioTotalInput.value = 50;
	} else {
		console.log(`error`);
	}
}

//funcion pasaje ida y vuelta (pasaje de vuelta 25% de descuento)
function obtenerIdaYVuelta() {
	if (
		selectPartida.value == 1 &&
		selectDestino.value == 1 &&
		selectPasaje.value == 2
	) {
		precioTotalInput.value = 50 + 50 * 0.75;
	} else if (
		((selectPartida.value == 1 && selectDestino.value == 2) ||
			(selectDestino.value == 1 && selectPartida.value == 2)) &&
		selectPasaje.value == 2
	) {
		precioTotalInput.value = 70 + 70 * 0.75;
	} else if (
		((selectPartida.value == 1 && selectDestino.value == 3) ||
			(selectDestino.value == 1 && selectPartida.value == 3)) &&
		selectPasaje.value == 2
	) {
		precioTotalInput.value = 90 + 90 * 0.75;
	} else if (
		((selectPartida.value == 2 && selectDestino.value == 1) ||
			(selectDestino.value == 2 && selectPartida.value == 1)) &&
		selectPasaje.value == 2
	) {
		precioTotalInput.value = 70 + 70 * 0.75;
	} else if (
		selectPartida.value == 2 &&
		selectDestino.value == 2 &&
		selectPasaje.value == 2
	) {
		precioTotalInput.value = 50 + 50 * 0.75;
	} else if (
		((selectPartida.value == 2 && selectDestino.value == 3) ||
			(selectDestino.value == 2 && selectPartida.value == 3)) &&
		selectPasaje.value == 2
	) {
		precioTotalInput.value = 70 + 70 * 0.75;
	} else if (
		((selectPartida.value == 3 && selectDestino.value == 1) ||
			(selectDestino.value == 3 && selectPartida.value == 1)) &&
		selectPasaje.value == 2
	) {
		precioTotalInput.value = 90 + 90 * 0.75;
	} else if (
		((selectPartida.value == 3 && selectDestino.value == 2) ||
			(selectDestino.value == 3 && selectPartida.value == 2)) &&
		selectPasaje.value == 2
	) {
		precioTotalInput.value = 70 + 70 * 0.75;
	} else if (
		selectPartida.value == 3 &&
		selectDestino.value == 3 &&
		selectPasaje.value == 2
	) {
		precioTotalInput.value = 50 + 50 * 0.75;
	} else {
		console.log(`error`);
	}
}

//array vacio para guardar viajes realizados
const arrayViajesRealizados = [];

//funcion nuevo viaje y control evento
document
	.getElementById("formCompraViaje")
	.addEventListener("submit", nuevoViaje);

function nuevoViaje(e) {
	//parar envio de form
	e.preventDefault();

	//validacion campos
	validaCampos();
	//TODO: prevenir que se envie si es incorrecto

	//recuperar info inputs
	const pasaje = selectPasaje.options[selectPasaje.selectedIndex].text;
	const partida = selectPartida.options[selectPartida.selectedIndex].text;
	const destino = selectDestino.options[selectDestino.selectedIndex].text;
	const valor = precioTotalInput.value;

	//crear objeto viaje
	const viaje = new Viaje(pasaje, partida, destino, valor);

	//pushear al array
	arrayViajesRealizados.push(viaje);
	console.log(arrayViajesRealizados);

	//guardar el array en local storage y convertirlo en JSON
	localStorage.setItem("historial", JSON.stringify(arrayViajesRealizados));

	//reiniciar valor inputs
	formulario.reset();

	//alert compra correcta
	Swal.fire({
		position: "top-end",
		icon: "success",
		title: "Listo, ¡buen viaje!",
		showConfirmButton: false,
		timer: 1500,
	});
}

//Calcular valor y validar campos
btnCalcular.addEventListener("click", (e) => {
	e.preventDefault();

	//validacion campos
	validaCampos();

	//mostrar valor boleto en pantalla
	if (selectPasaje.value == 1) {
		obtenerValorBoleto();
	} else if (selectPasaje.value == 2) {
		obtenerIdaYVuelta();
	}
});

//recuperar info de local storage
let historialViaje = JSON.parse(localStorage.getItem("historial"));
//console.log(historialViaje)

/* //mostrar historial de viajes por pantalla
function mostrarViajes() {
	historialViaje.forEach((id) => {
		if (id != undefined) {
			let div = document.createElement("div");
			div.className = "container card shadow-sm row";
			div.innerHTML = `
					<p><strong>Pasaje: </strong>${id.pasaje}</p>
					<p><strong>Partida: </strong>${id.partida}</p>	
					<p><strong>Destino: </strong>${id.destino}</p>	
					<p><strong>Valor: </strong>$${id.valor}</p>		
				`;
			cardViajes.appendChild(div);
		} else {
			console.log("historial vacio");
		}
	});
}
//funcion mostrar card viajes
mostrarViajes();
 */