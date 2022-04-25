//get form elements
window.addEventListener("load", () => {
	const form = document.getElementById("form");
	const tipoPasaje = document.getElementById("tipoPasaje");
	const partida = document.getElementById("selectPartida");
	const destino = document.getElementById("selectDestino");
	const precioTotal = document.getElementById("precioTotalInput");
	const btnComprar = document.getElementById("btnComprar");
	const btnCancelar = document.getElementById("btnCancelar");
	const inputs = document.getElementsByClassName("msjeError");

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		validaCampos();
	});

	//validacion form
	const validaCampos = () => {
		//captura valores ingresados por el usuario
		const tipoPasajeValor = tipoPasaje.value;
		const partidaValor = partida.value;
		const destinoValor = destino.value; 

		//validar tipo pasaje
		if (parseInt(tipoPasaje.value) === 0) {
			validError();
		} else {
			validOk();
		}

		//validar partida
		if (parseInt(partida.value) === 0) {
			validError();
		} else {
			validOk();
		}

		//validar destino
		if (parseInt(destino.value) === 0) {
			validError();
		} else {
			validOk();
		}
	};

	//msje en caso de error
	const validError = () => {
	let formControl = document.querySelectorAll(".msjeError");
	for(const el of formControl){
		el.innerHTML = "Por favor completa este campo";
	}
	

	console.log('error');
	};

	//msje en caso de correcto
	const validOk = () => {
		
		//formControl.className = "form-control ok"

		console.log('ok');
	};
});

//listado viajes realizados
const arrayViajesRealizados = [];

//selector tipo de pasaje

//aplicacion descuento en caso de seleccionar ida y vuelta

/* //logica simulador pasaje
elegirEstacion(arrayEstaciones);

//seleccionar estaciones
function elegirEstacion(array) {
	array.forEach((item) => {
		let div = document.createElement("div");
		div.classList.add("estacion");

		//mostrar estaciones en pantalla
		div.innerHTML += `
        <div class="btn-toolbar" role="toolbar">
            <div class="btn-group-vertical me-2">
                <button type="button" class="btn btn-outline-secondary mb-2" id="agregar${item.id}">
                    ${item.estacion}    
                </button>
            </div>
        </div>
    `;
		selecEstaciones.appendChild(div);

		//evento para completar inputs
		let btnAgregar = document.getElementById(`agregar${item.id}`);
		btnAgregar.addEventListener("click", () => {
			if (estacionPartidaInput.value === "") {
				agregarEstacion(item.id);
				console.log(item.id);
				console.log(estacionPartidaInput.value);
				console.log(valorPasajeInput.value);
			}
		});

		let btnAgregarDos = document.getElementById(`agregar${item.id}`);
		btnAgregarDos.addEventListener("click", () => {
			if (estacionPartidaInput.value !== "") {
				agregarEstacionDos(item.id);
				console.log(item.id);
				console.log(estacionDestinoInput.value);
				console.log(estacionDestinoInput.value);
			}
		});
	});
}

//obtener valores de estacion ida
function agregarEstacion(id) {
	let agregarEstacionIda = arrayEstaciones.find((item) => item.id == id);
	selecEstacion = JSON.stringify(agregarEstacionIda.estacion);
	let selecValor = JSON.stringify(agregarEstacionIda.precio);
	estacionPartidaInput.value = selecEstacion;
	valorPasajeInput.value = selecValor;
}

//obtener valores de estacion destino
function agregarEstacionDos(id) {
	let agregarEstacionVuelta = arrayEstaciones.find((item) => item.id == id);
	selecEstacionDos = JSON.stringify(agregarEstacionVuelta.estacion);
    let valorAnterior = document.getElementById("valorPasajeInput.value");
    let selecValorSuma = (a,b) => {return a+b};
	estacionDestinoInput.value = selecEstacionDos;
	valorPasajeInput.value = selecValorSuma (valorAnterior, agregarEstacionVuelta.precio);
}
 */

//aplicar descuento "ida y vuelta" al valor total

//logica simulador carga

//    function () { }
