//nodos inputs
const estacionPartidaInput = document.getElementById("estacionPartidaInput");
const estacionDestinoInput = document.getElementById("estacionDestino");
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

elegirEstacion(arrayEstaciones);

//logica simulador pasaje
function elegirEstacion(array) {
	array.forEach((item) => {
		let div = document.createElement("div");
		div.classList.add("estacion");

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

		let btnAgregar = document.getElementById(`agregar${item.id}`);
		btnAgregar.addEventListener("click", () => {
			agregarEstacion(item.id);
			console.log(estacionPartidaInput.value);
			console.log(valorPasajeInput.value);

			if (estacionPartidaInput.value != "") {
				let btnAgregar = document.getElementById(`agregar${item.id}`);
                btnAgregar.addEventListener("click", () => {
                    agregarEstacionDos(item.id);
                })
			}
		});

	});
}

function agregarEstacion(id) {
	let agregarEstacionIda = arrayEstaciones.find((item) => item.id == id);
	estacionPartidaInput.value = JSON.stringify(agregarEstacionIda.estacion);
	valorPasajeInput.value = JSON.stringify(agregarEstacionIda.precio);
}

function agregarEstacionDos(id) {
	let agregarEstacionDos = arrayEstaciones.find((item) => item.id == id);
	estacionDestinoInput.value = JSON.stringify(agregarEstacionDos.estacion);
	valorPasajeInput.value = JSON.stringify(agregarEstacionDos.precio);
}

/* function sumaPrecios(){
    let sumaTotal = (val1, val2) =>{
        return (JSON.stringify(agregarEstacionIda.precio)) + (JSON.stringify(agregarEstacionDos.precio));
    }
    console.log(sumaTotal);
}
sumaPrecios(); */

/* function agregarEstacionVuelta(id){
    let agregarEstacionVuelta = arrayEstaciones.find(item => item.id == id);
    estacionDestinoInput.value = JSON.stringify(agregarEstacionIda.estacion);
}  */

//logica simulador carga

function cargarSaldo() {}
