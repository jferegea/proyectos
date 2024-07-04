// Identificando elementos

const carro=document.querySelector("#carro");

const listaCursos=document.querySelector("#lista-cursos");

const botonVaciarCarro=document.querySelector("#vaciar-carro");

const contenidoCarro=document.querySelector("#carro tbody");

let productosCarro=[];


//Agregar escucha

listaCursos.addEventListener("click", agregarCurso);

//botonVaciarCarro.addEventListener("click", limparCarro);

botonVaciarCarro.addEventListener("click", ()=>{            //como es corta se crea funcion anonima *122

    productosCarro=[];

    limpiarCarro()

});

carro.addEventListener("click", eliminarCurso);


//Funciones

function agregarCurso(e){

    e.preventDefault();    //inactiva href='#'

    if(e.target.classList.contains("agregar-carro")){

        getDatosCursos(e.target.parentElement.parentElement);

    }

}

function getDatosCursos(c){

    const datosCursos={

        imagen:c.querySelector('img').src,
        titulo_curso:c.querySelector('h4').textContent,
        precio_curso:c.querySelector(".precio span").textContent,
        id_curso:c.querySelector('a').getAttribute('data-id'),
        cantidad:1

    }

    for(let i=0; i<productosCarro.length; i++){

        if(productosCarro[i].id_curso==datosCursos.id_curso){

            productosCarro[i].cantidad++;

            agregarACarro();

            return;

        }

    }

    productosCarro.push(datosCursos);

    agregarACarro();

}

function agregarACarro(){   

    limpiarCarro();

    productosCarro.forEach(curso=>{

        const filaTabla=document.createElement('tr');

        filaTabla.innerHTML=
            `<td> <img src="${curso.imagen}" width="100%"> </td> 
            <td style="text-align:center; font-size:0.8em"> ${curso.titulo_curso} </td> 
            <td style="text-align:center"> ${curso.precio_curso} </td> 
            <td style="text-align:center"> ${curso.cantidad} </td>
            <td><a href="#" class="borrar-curso" dataId="${curso.id_curso}">X</a></td>`;

        contenidoCarro.appendChild(filaTabla);

    });

    mostrartTotal();

}

function eliminarCurso(e){

    if(e.target.classList.contains("borrar-curso")){

        //console.log(e.target);

        const cursoId=e.target.getAttribute("dataId");

        productosCarro=productosCarro.filter(curso=>curso.id_curso!=cursoId);

        //console.log(productosCarro);

        agregarACarro();

    }

    mostrartTotal();

}

function limpiarCarro(){

    contenidoCarro.innerHTML="";

}

/*function vaciarCArro(){

    productosCarro=[];

    limparCarro();

}*/
 //las funciones cortas mejor ponerlas como funciones anoninimas

function calcularTotal(){

    let total=0;

    productosCarro.forEach(producto=>{

        total+=parseFloat(producto.precio_curso)*producto.cantidad;

    });

    return total;

}

function mostrartTotal(){

    const elemTotal=document.querySelector("#total-carro span");

    elemTotal.textContent=calcularTotal();

}