//nodos inputs
const estacionPartidaInput = document.getElementById("estacionPartidaInput");
const estacionDestinoInput = document.getElementById("estacionDestinoInput");
const valorPasajeInput = document.getElementById("valorPasajeInput");
const nombreInput = document.getElementById("nombreInput");
const numeroTarjetaInput = document.getElementById("numeroTarjetaInput");

//nodos selectores
const selecPasajeUno = document.getElementById("selecPasajeUno");
const selecPasajeDos = document.getElementById("selecPasajeDos");

//nodos botones
const btnComprar = document.getElementById("btnComprar");
const btnCancelar = document.getElementById("btnCancelar");
const btnIngresar = document.getElementById("btnIngresar");
const btnCargar = document.getElementById("btnCargar");

//variables globales de datos elegidos por el usuario
let selecEstacion;
let selecEstacionDos;

/* //contador para relleno automatico
//valor contador inicial
const contador = 0;
const btnEstacion = document.querySelectorAll
 */

//logica simulador pasaje
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


//aplicar descuento "ida y vuelta" al valor total

//logica simulador carga

//    function () { }
