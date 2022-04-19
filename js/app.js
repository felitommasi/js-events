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
			if (estacionPartidaInput.value === "") {
				agregarEstacion(item.id);
				console.log(estacionPartidaInput.value);
				console.log(valorPasajeInput.value);
			} 
            if (estacionPartidaInput.value !== "") {
                agregarEstacionDos(item.id);
			}
		});
	});
}

function agregarEstacion(id) {
	let agregarEstacionIda = arrayEstaciones.find((item) => item.id == id);
    let selecEstacion = JSON.stringify(agregarEstacionIda.estacion)
    let selecValor = JSON.stringify(agregarEstacionIda.precio);
	estacionPartidaInput.value = selecEstacion;
	valorPasajeInput.value = selecValor;
}

function agregarEstacionDos(id) {
	let agregarEstacionVuelta = arrayEstaciones.find((item) => item.id == id);
    let selecEstacionDos = JSON.stringify(agregarEstacionVuelta.estacion);
    function valorDescuento() {
        return (parseInt(JSON.stringify(agregarEstacionVuelta.precio)) * 0.75);
    }
    estacionDestinoInput.value = selecEstacionDos;
    valorPasajeInput.value = valorDescuento();
    console.log(`el precio con descuento es${valorDescuento}`);
}






//logica simulador carga

//    function () { }
