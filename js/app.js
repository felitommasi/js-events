//!get form elements
const form = document.getElementById("formNuevoViaje");
const selecPasaje = document.getElementById("selecPasaje");
const selecPartida = document.getElementById("selectPartida");
const selecDestino = document.getElementById("selectDestino");
const precioTotalInput = document.getElementById("precioTotalInput");
const btnCalcular = document.getElementById("btnCalcular");
const btnCancelar = document.getElementById("btnCancelar");
const inputs = document.getElementsByClassName("msjeError");
const historial = document.getElementById("cardViajes");

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

//array vacio para guardar viajes realizados
const arrayViajesRealizados = [];

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
	const partida = selecPartida.options[selecPartida.selectedIndex].text;
	const destino = selecDestino.options[selecDestino.selectedIndex].text;
	const valor = precioTotalInput.value;

	//crear objeto viaje
	const viaje = new Viaje(pasaje, partida, destino, valor);
	console.log(viaje);

	//pushear al array
	arrayViajesRealizados.push(viaje);
	

	//guardar el array en localstorage y convertirlo en JSON
	localStorage.setItem(
		"arrayViajesRealizados",
		JSON.stringify(arrayViajesRealizados)
	);

	//cambio de estilo btn
	btnCalcular.style.backgroundColor = "green";
	btnCalcular.innerText = "Comprar";

	//calcular valor
	btnCalcular.addEventListener("click", () => {
		e.preventDefault();
		Swal.fire({
			position: "top-end",
			icon: "success",
			title: "Listo, ¡buen viaje!",
			showConfirmButton: false,
			timer: 1500,
		});
		//vaciar inputs
		document.querySelector("#formNuevoViaje").reset();
		mostrarViajes(viaje);
		//cambio de estilo btn
		btnCalcular.style.backgroundColor = "blue";
		btnCalcular.innerText = "Calcular precio";
	});
});

//mostrar historial de viajes
function mostrarViajes(viaje){
	let div = document.createElement('div');
	div.className = 'container card shadow-sm row';
	div.innerHTML = `
			<p><strong>Partida: </strong>${viaje.partida}</p>	
			<p><strong>Destino: </strong>${viaje.destino}</p>	
			<p><strong>Valor: </strong>$${viaje.valor}</p>	
			<p><strong>Pasaje: </strong>${viaje.pasaje}</p>	
	`;
	cardViajes.appendChild(div);
}











//function mostrarViajes() {
	//buscar elemento en el local storage
/* 	const arrayBuscar = JSON.parse(localStorage.getItem("arrayViajesRealizados"));
	console.log(`array buscar ${arrayBuscar}`);
	console.log(`array viajes ${arrayViajesRealizados}`); */
	//mostrar texto template literal
/* 	arrayViajesRealizados.forEach(el => {
		document.getElementById("cardViajes").innerHTML = `
			<div class="item-value-title">
				<strong>Detalles de la compra</strong>
			</div>
			<div class="container card shadow-sm row">
				<div class="col-sm">
					<p><strong>Partida:</strong></p>
					<p>${el[0]}</p>
				</div>
				<div class="col-sm">
					<p><strong>Destino:</strong></p>
					<p>${el[1]}</p>
				</div>
				<div class="col-sm">
					<p><strong>Valor del viaje:</strong></p>
					<p>${el[2]}</p>
				</div>
				<div class="col-sm">
					<p><strong>Tipo de boleto:</strong></p>
					<p>${el[3]}</p>
				</div> 
			</div>`; 
	}); 
}

 */
