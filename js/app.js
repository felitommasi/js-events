//!get form elements
const formulario = document.getElementById("formCompraViaje");
const selecPasaje = document.getElementById("selecPasaje");
const selecPartida = document.getElementById("selectPartida");
const selecDestino = document.getElementById("selectDestino");
const precioTotalInput = document.getElementById("precioTotalInput");
const btnCalcular = document.getElementById("btnCalcular");
const btnCancelar = document.getElementById("btnCancelar");
const btnComprar = document.getElementById("btnComprar");
const inputs = document.getElementsByClassName("msjeError");
const cardHistorialViajes = document.getElementById("cardViajes");

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
	parseInt(selecPasaje.value) === 0 ? validError() : validOk();

	//validar partida
	parseInt(selecPartida.value) === 0 ? validError() : validOk();

	//validar destino
	parseInt(selecDestino.value) === 0 ? validError() : validOk();
}

//funcion pasaje solo ida
function obtenerValorBoleto() {
	if (
		selecPartida.value == 1 &&
		selecDestino.value == 1 &&
		selecPasaje.value == 1
	) {
		precioTotalInput.value = 50;
	} else if (
		((selecPartida.value == 1 && selecDestino.value == 2) ||
			(selecDestino.value == 1 && selecPartida.value == 2)) &&
		selecPasaje.value == 1
	) {
		precioTotalInput.value = 70;
	} else if (
		((selecPartida.value == 1 && selecDestino.value == 3) ||
			(selecDestino.value == 1 && selecPartida.value == 3)) &&
		selecPasaje.value == 1
	) {
		precioTotalInput.value = 90;
	} else if (
		((selecPartida.value == 2 && selecDestino.value == 1) ||
			(selecDestino.value == 2 && selecPartida.value == 1)) &&
		selecPasaje.value == 1
	) {
		precioTotalInput.value = 70;
	} else if (
		selecPartida.value == 2 &&
		selecDestino.value == 2 &&
		selecPasaje.value == 1
	) {
		precioTotalInput.value = 50;
	} else if (
		((selecPartida.value == 2 && selecDestino.value == 3) ||
			(selecDestino.value == 2 && selecPartida.value == 3)) &&
		selecPasaje.value == 1
	) {
		precioTotalInput.value = 70;
	} else if (
		((selecPartida.value == 3 && selecDestino.value == 1) ||
			(selecDestino.value == 3 && selecPartida.value == 1)) &&
		selecPasaje.value == 1
	) {
		precioTotalInput.value = 90;
	} else if (
		((selecPartida.value == 3 && selecDestino.value == 2) ||
			(selecDestino.value == 3 && selecPartida.value == 2)) &&
		selecPasaje.value == 1
	) {
		precioTotalInput.value = 70;
	} else if (
		selecPartida.value == 3 &&
		selecDestino.value == 3 &&
		selecPasaje.value == 1
	) {
		precioTotalInput.value = 50;
	} else {
		console.log(`error`);
	}
}

//funcion pasaje ida y vuelta (pasaje de vuelta 25% de descuento)
function obtenerIdaYVuelta() {
	if (
		selecPartida.value == 1 &&
		selecDestino.value == 1 &&
		selecPasaje.value == 2
	) {
		precioTotalInput.value = 50 + 50 * 0.75;
	} else if (
		((selecPartida.value == 1 && selecDestino.value == 2) ||
			(selecDestino.value == 1 && selecPartida.value == 2)) &&
		selecPasaje.value == 2
	) {
		precioTotalInput.value = 70 + 70 * 0.75;
	} else if (
		((selecPartida.value == 1 && selecDestino.value == 3) ||
			(selecDestino.value == 1 && selecPartida.value == 3)) &&
		selecPasaje.value == 2
	) {
		precioTotalInput.value = 90 + 90 * 0.75;
	} else if (
		((selecPartida.value == 2 && selecDestino.value == 1) ||
			(selecDestino.value == 2 && selecPartida.value == 1)) &&
		selecPasaje.value == 2
	) {
		precioTotalInput.value = 70 + 70 * 0.75;
	} else if (
		selecPartida.value == 2 &&
		selecDestino.value == 2 &&
		selecPasaje.value == 2
	) {
		precioTotalInput.value = 50 + 50 * 0.75;
	} else if (
		((selecPartida.value == 2 && selecDestino.value == 3) ||
			(selecDestino.value == 2 && selecPartida.value == 3)) &&
		selecPasaje.value == 2
	) {
		precioTotalInput.value = 70 + 70 * 0.75;
	} else if (
		((selecPartida.value == 3 && selecDestino.value == 1) ||
			(selecDestino.value == 3 && selecPartida.value == 1)) &&
		selecPasaje.value == 2
	) {
		precioTotalInput.value = 90 + 90 * 0.75;
	} else if (
		((selecPartida.value == 3 && selecDestino.value == 2) ||
			(selecDestino.value == 3 && selecPartida.value == 2)) &&
		selecPasaje.value == 2
	) {
		precioTotalInput.value = 70 + 70 * 0.75;
	} else if (
		selecPartida.value == 3 &&
		selecDestino.value == 3 &&
		selecPasaje.value == 2
	) {
		precioTotalInput.value = 50 + 50 * 0.75;
	} else {
		console.log(`error`);
	}
}

//array vacio para guardar viajes realizados
const arrayViajesRealizados = [];

//funcion nuevo viaje y control evento
document.getElementById("formCompraViaje").addEventListener("submit", nuevoViaje);

function nuevoViaje(e) {
	//parar envio de form
	e.preventDefault();

	//validacion campos
	validaCampos();
	//TODO: prevenir que se envie si es incorrecto

	//recuperar info inputs
	const pasaje = selecPasaje.options[selecPasaje.selectedIndex].text;
	const partida = selecPartida.options[selecPartida.selectedIndex].text;
	const destino = selecDestino.options[selecDestino.selectedIndex].text;
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
	if (selecPasaje.value == 1) {
		obtenerValorBoleto();
	} else if (selecPasaje.value == 2) {
		obtenerIdaYVuelta();
	}
});


//recuperar info de local storage
let historialViaje = JSON.parse(localStorage.getItem("historial"));
//console.log(historialViaje)

//funcion mostrar card viajes
mostrarViajes();

//mostrar historial de viajes por pantalla
function mostrarViajes() {
	historialViaje.forEach(id => {
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



/* //comprar pasaje
 
//comprar pasaje
btnComprar.addEventListener("click", (e) => {
	e.preventDefault();

	//obtener texto de los select para mostrar en pantalla en historial
	const pasaje = selecPasaje.options[selecPasaje.selectedIndex].text;
	const partida = selecPartida.options[selecPartida.selectedIndex].text;
	const destino = selecDestino.options[selecDestino.selectedIndex].text;
	const valor = precioTotalInput.value;

	//crear objeto viaje
	const viaje = new Viaje(pasaje, partida, destino, valor);
	//console.log(viaje);

	//pushear al array
	arrayViajesRealizados.push(viaje);

	//guardar el array en localstorage y convertirlo en JSON
	localStorage.setItem("historial", JSON.stringify(viaje));

	Swal.fire({
		position: "top-end",
		icon: "success",
		title: "Listo, ¡buen viaje!",
		showConfirmButton: false,
		timer: 1500,
	});

	//vaciar inputs
	formulario.reset();
});

//crear card con local storage
function mostrarViajes() {
	historialViaje = JSON.parse(localStorage.getItem("historial"));
	console.log(localStorage);
	console.log(historialViaje)
	
		if (historialViaje !== null || undefined){
			let div = document.createElement("div");
			div.className = "container card shadow-sm row";
			div.innerHTML = `
				<p><strong>Partida: </strong>${el.partida}</p>	
				<p><strong>Destino: </strong>${el.destino}</p>	
				<p><strong>Valor: </strong>$${el.valor}</p>	
				<p><strong>Pasaje: </strong>${el.pasaje}</p>	
			`;
			cardViajes.appendChild(div);
		}else{
			console.log('historial vacio');
		}

}
//mostrar viajes del local storage
mostrarViajes();
 */