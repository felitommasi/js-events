//nodos inputs
const inputNombre = document.querySelector("#inputNombre");
const inputTarjeta = document.querySelector("#inputTarjeta");
const inputSaldoActual = document.querySelector("#inputSaldoActual");
const inputNuevoSaldo = document.querySelector("#inputNuevoSaldo");

//nodos botones
const btnCarga = document.querySelector("#btnCargar");
//btn vaciar input carga saldo
const btnCancelar = document.querySelector("#btnBorrar").addEventListener("click", ()=>{
    inputNuevoSaldo.value = "";
    inputSaldoActual.value = 100;});

//Alert Ingreso de usuario => carga saldo
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
					Swal.fire({
						icon: "success",
						html: `<p>Ya podés cargar tu saldo.</p>`,
						timer: 1200,
						showConfirmButton: false,
					});
					resolve();
				} else if (value.length < 8 || value.length > 8) {
					resolve("Verificá escribir correctamente los 8 dígitos");
				}else{
					resolve("Error");
				}
			});
		},
	});

    //variables saldo
    let saldoActual = 100;
    let nuevoSaldo;

	//!funciones y eventos carga saldo
	//sumar 10
	document.querySelector("#btnCarga1").addEventListener("click", () => {
		sumar10(saldoActual);
	});
	function sumar10(n) {
		nuevoSaldo = n + 10;
		inputNuevoSaldo.value = nuevoSaldo;
	}

	//sumar 20
	document.querySelector("#btnCarga2").addEventListener("click", () => {
		sumar20(saldoActual);
	});
	function sumar20(n) {
		nuevoSaldo = n + 20;
		inputNuevoSaldo.value = nuevoSaldo;
	}

	//sumar 50
	document.querySelector("#btnCarga3").addEventListener("click", () => {
		sumar50(saldoActual);
	});
	function sumar50(n) {
		nuevoSaldo = n + 50;
		inputNuevoSaldo.value = nuevoSaldo;
	}

	//sumar 100
	document.querySelector("#btnCarga4").addEventListener("click", () => {
		sumar100(saldoActual);
	});
	function sumar100(n) {
		nuevoSaldo = n + 100;
		inputNuevoSaldo.value = nuevoSaldo;
	}

	//sumar 100
	document.querySelector("#btnCarga5").addEventListener("click", () => {
		sumar200(saldoActual);
	});
	function sumar200(n) {
		nuevoSaldo = n + 200;
		inputNuevoSaldo.value = nuevoSaldo;
	}

	//sumar 50
	document.querySelector("#btnCarga6").addEventListener("click", () => {
		sumar500(saldoActual);
	});
	function sumar500(n) {
		nuevoSaldo = n + 500;
		inputNuevoSaldo.value = nuevoSaldo;
	}

	btnCarga.addEventListener("click", () => {
		Swal.fire({
			icon: "success",
			title: "¡Se acreditó tu carga!",
			text: `Tu nuevo saldo es $${nuevoSaldo}`,
		});
        saldoActual = nuevoSaldo;
        inputSaldoActual.value = nuevoSaldo;
        inputNuevoSaldo.value = "";
	});
});