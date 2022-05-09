//get elements
const tabla = document.getElementById('tabla');
const tituloTabla = document.getElementById('tituloTabla');
//const fragment = document.createDocumentFragment();

//Fetch local
const cargarData = async () => {
	try {
		const respuesta = await fetch('JSON/tabla.json');
		console.log(respuesta);
		
		const data = await respuesta.json();
        pintarTabla(data);

	} catch (error) {
		console.log(error);
	}
}; 
cargarData();


//obtener elementos tabla
let dataHead = document.querySelector('#tablaHead');
dataHead.innerHTML = '';
let dataBody = document.querySelector("#tablaBody");
dataBody.innerHTML = '';


const pintarTabla = data => {
    data.forEach(el => {
        dataHead.innerHTML += `
            <tr>
                <th scope="col" class="textoHorizontal">${el.estacion}</th>
            </tr>
        `;
        dataBody.innerHTML += `
            <tr>
                <th scope="row">${el.estacion}</th>
                <td>$50</td>
                <td>$70</td>
                <td>$90</td>
            </tr>
        `;
    });
    //tabla.appendChild(fragment);
}







/* if(respuesta.status === 200){
    const datos = await respuesta.json();
    console.log(datos.features);
} else if(respuesta.status === 401){
    console.log('errror 401');
} else if(respuesta.status === 404){
    console.log('error 404');
} else{
    console.log('error desconocido');
}
 */