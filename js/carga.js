//nodos inputs
const inputNombre = document.querySelector("#inputNombre");
const inputTarjeta = document.querySelector("#inputTarjeta");
const inputSaldoActual = document.querySelector("#inputSaldoActual");
const inputNuevoSaldo = document.querySelector("#inputNuevoSaldo");

//nodos botones
const cargaDiez = document.querySelector("#btnCarga1");
const cargaVeinte = document.querySelector("#btnCarga2");
const cargaCincuenta = document.querySelector("#btnCarga3");
const cargaCien = document.querySelector("#btnCarga4");
const cargaDoscientos = document.querySelector("#btnCarga5");
const cargaQuinientos = document.querySelector("#btnCarga6");

//Ingreso de usuario
window.addEventListener("load", () => {
	Swal.fire({
		animation: "slide-from-top",
		title: "Ingresa tu número de tarjeta SUBE",
		input: "number",
		inputPlaceholder: "Ej. 1234-5678",
        maxlength: 8,
		showCancelButton: false,
		closeOnConfirm: false,
        inputValidator: (value) => {
            return new Promise((resolve) => {
              if (value.length === 8) {
                Swal.fire({ html: `<h2>¡Hola!</h2>
                <br><p>Ya podés cargar tu saldo.</p>` });
                resolve();
              } else if (value.length < 8){
                resolve('Verificá escribir correctamente los 8 dígitos');
              } 
            })
        }
	});

    
});

