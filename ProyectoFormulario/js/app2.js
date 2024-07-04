//Cargar el achivo JS una vez se cargue el DOM

window.addEventListener("load", function(){

    // Identificando elementos

    const inputNombre=document.querySelector("#nombre");

    const inputpass=document.querySelector("#password");

    const inputEmail=document.querySelector("#email");

    const inputAsunto=document.querySelector("#asunto");

    const inputMensaje=document.querySelector("#mensaje");

    //console.log(inputNombre);


    // Poner foco a los elementos, poner en escucha

    inputNombre.addEventListener("blur", validarFormulario);

    inputpass.addEventListener("blur", validarFormulario);

    inputEmail.addEventListener("blur", validarFormulario);

    inputAsunto.addEventListener("blur", validarFormulario);

    inputMensaje.addEventListener("blur", validarFormulario);


    // Funciones

    function validarFormulario(e){        

        quitarAlerta(e);            // en la funcion mostrarAlerta lo pusimos en rojo, para que sea negro al escribir volvemos a la letra en negro

        //console.log(e.target.id);  devuelve el elemento, si se añade id devuelve solo el id

        //if(e.target.id=="nombre") console.log("hemos validado Nombre")

        /*if(e.target.id=="nombre"){   //en el caso que queremos algun campo requerido

            if(e.target.value.trim()==""){          // trim quita los espacios, asi el usuario no puede saltarse este paso poniendo espacio

                //console.log("El cuadro está vacío");

                inputNombre.value="Campo requerido";

                inputNombre.style.color="red";

            }/*else{

                console.log("Hay información");

            }

        }*/

        if(e.target.value.trim()==""){   //cuando queremos todos los campos como requeridos

            e.target.value="Campo requerido";

            /*e.target.style.color="red";

            e.target.style.fontWeight="bold";   mejor poner como funcion  => mostrarAlerta */

            mostrarAlerta(e);

        }

        if(e.target==inputEmail && !validarEmail(inputEmail.value)){

            if(!inputEmail.value.includes("¡¡ Este email no es válido !!"))

            inputEmail.value+= " ¡¡ Este email no es válido !! "

            mostrarAlerta(e);

        }

    }

    function mostrarAlerta(e){

        e.target.style.color="red";

        e.target.style.fontWeight="bold";

    }

    function quitarAlerta(e){

        e.target.style.color="black";

        e.target.style.fontWeight="normal";

    }

    function validarEmail(email){

        const regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        const resultado=regex.test(email);   //devuelve booleano

        //console.log(resultado);

        return resultado;

    }

});



