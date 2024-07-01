// Creamos promesa

const consultarCriptomonedas=criptomonedas=> new Promise(

    resolve=>{

        resolve(criptomonedas);

    }
)

// Identificar elemento

const criptoSelect=document.querySelector("#criptomonedas");

const monedaFiatSelect=document.querySelector("#moneda");

const formulario=document.querySelector("#formulario");

const resultadoDiv=document.querySelector("#resultado");


// Creamos objeto para buscar monedas

const monedasBusquedas={

    moneda:"",
    criptomoneda:""

}


// Cargamos despues del DOM

document.addEventListener("DOMContentLoaded", ()=>{   
    
    cargarCriptos();

    formulario.addEventListener("submit", enviarFormulario);

    criptoSelect.addEventListener("change", leerMoneda);                 //change detecta los cambios

    monedaFiatSelect.addEventListener("change", leerMoneda); 

})


// Funciones

function cargarCriptos(){

     //console.log("Hola");    //para ver si funciona

     const url="https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

     // Peticion a la API

    fetch(url)                                              //convertir la respuesta a un objeto JSON y leerlo con console.log
        .then(respuesta=>respuesta.json())
        //.then(resultado=>console.log(resultado.Data))  
        .then(resultado=>consultarCriptomonedas(resultado.Data))                                                  //ver si funciona la promesa
        //.then(criptomonedas=>console.log(criptomonedas))   
        .then(criptomonedas=>selectCriptomonedas(criptomonedas)) 

    // Pasamos a una promesa *1 

}

function selectCriptomonedas(criptomonedas){

    criptomonedas.forEach(cripto => {

        const{FullName, Name} = cripto.CoinInfo;

        const option = document.createElement("option");

        option.value=Name;

        option.textContent=FullName;

        criptoSelect.appendChild(option);

    })

}

function leerMoneda(e){

    monedasBusquedas[e.target.name]=e.target.value;

    console.log(monedasBusquedas);

}

function enviarFormulario(e){

    e.preventDefault();    //quitar el comportamiento por defecto del formulario

    if(monedasBusquedas.moneda=="" || monedasBusquedas.criptomoneda==""){

        alert("Debes seleccionar ambos campos");

        return;     //para que salga y no ejecute la llamada

    }

    consultaAPI();

}

function consultaAPI(){

    const {moneda, criptomoneda}=monedasBusquedas;

    const url=`https://min-api.cryptocompare.com/data/price?fsym=${criptomoneda}&tsyms=${moneda}`;  //reemplazamos btc por criptomoneda y USD, JPY, EUR por moneda

    fetch(url)
        .then(respuesta=>respuesta.json())
        .then(equivalencia=>{
            console.log(equivalencia)
            mostrarPrecioCripto(equivalencia[moneda]);
        });

}

function mostrarPrecioCripto(precio){

    resultadoDiv.innerHTML=`El precio es: ${precio}`;

}