//Cargar el achivo JS una vez se cargue el DOM

window.addEventListener("load", function(){

    // Identificando elementos

    const inputNombre=document.querySelector("#nombre");

    const inputpass=document.querySelector("#password");

    const inputEmail=document.querySelector("#email");

    const inputAsunto=document.querySelector("#asunto");

    const inputMensaje=document.querySelector("#mensaje");

    //const elformulario=document.querySelector("#formulario");

    const botonEnvio=document.querySelector("#formulario button[type='submit']");       //solo se identifica un boton. el de aceptar

    //console.log(inputNombre);

    const botonReset=this.document.querySelector("#formulario button[type='reset']")


    // Poner foco a los elementos, poner en escucha

    inputNombre.addEventListener("blur", validarFormulario);

    inputpass.addEventListener("blur", validarFormulario);

    inputEmail.addEventListener("blur", validarFormulario);

    inputAsunto.addEventListener("blur", validarFormulario);

    inputMensaje.addEventListener("blur", validarFormulario);

    //inputMensaje.addEventListener("click", pruebaBoton);

    botonReset.addEventListener("click", (e)=>{

        objFormulario.nombre="";
        objFormulario.password="";
        objFormulario.email="";
        objFormulario.asunto="";
        objFormulario.mensaje="";

        comprobarFormulario();              //tiene que ponerse despues, para que analice la cadena vacia

    })

    // crear objeto

    const objFormulario={

        nombre: "",
        password: "",
        email: "",
        asunto: "",
        mensaje: ""

    }


    // Funciones

    function validarFormulario(e){

        //console.log(e.target.parentElement.parentElement); //dos veces para que coja todo el formulario

        if(e.target.value.trim()=="") {
            
            mostrarError(`El campo "${e.target.id}" es requerido`, e.target.parentElement);

            return;   //para que salga, sino pasa a la funcion quitarAviso() y lo borra

        }

        //else console.log("Hay texto");

        quitarAviso(e.target.parentElement);

        if(e.target.id=="email" && validarEmail(e.target.value)==false){   // !validarEmail(e.target.value){}

            mostrarError("El email no es correcto", e.target.parentElement);

        };

        objFormulario[e.target.name]=e.target.value;

        //console.log(objFormulario);

        comprobarFormulario();

    }

    function mostrarError(mensaje, elemento){

        const alerta=elemento.querySelector(".bg-red-600");      //para que no se repita el aviso

        //console.log(alerta);

        if(alerta) alerta.remove();

        //console.log("Campo requerido");

        const error=document.createElement("p");

        //error.textContent="Campo requerido"; se pone si no tiene parámetro(mensaje)

        error.textContent=mensaje;

        //console.log(error);

        error.classList.add("bg-red-600", "text-white", "text-center", "p-2");  //añadir css

        //elformulario.appendChild(error);

        elemento.appendChild(error);

    }

    function quitarAviso(elemento){

        const alerta=elemento.querySelector(".bg-red-600"); 

        if(alerta) alerta.remove();

    }

    function validarEmail(email){

        const regex=/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        const resultado=regex.test(email);

        //console.log(resultado);

        return resultado;

    }

    /*function pruebaBoton(e){

        botonEnvio.classList.remove("opacity-50");

        botonEnvio.disabled=false;

    }*/

    function comprobarFormulario(){

        if(Object.values(objFormulario).includes('')){

            botonEnvio.classList.add("opacity-50");

            botonEnvio.disabled=true;

        }else{

            botonEnvio.classList.remove("opacity-50");

            botonEnvio.disabled=false;

        }

    }

});



