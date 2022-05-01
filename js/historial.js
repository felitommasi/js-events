//get elements historial
const cardViajes = document.getElementById("cardViajes");

//array vacio para guardar viajes realizados
const arrayViajesRealizados = [];

//constructor viajes realizados
class Viaje {
	constructor(pasaje, partida, destino, valor) {
		this.pasaje = pasaje;
		this.partida = partida;
		this.destino = destino;
		this.valor = valor;
	}
}

//buscar elemento en el local storage
const arrayBuscar = JSON.parse(localStorage.getItem("arrayViajesRealizados"));
