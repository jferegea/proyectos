                                                                                                              // HTML
const containerOne = document.querySelector(".container");
const iniciar = document.createElement("button");
const reiniciar = document.createElement("button");
const sendNumber = document.createElement("button");
const changeCars = document.createElement("button");
const menu = document.createElement("div");
                                                                                                              // Arays donde guardamos los DOM elements y las posiciones finales
let playersArray = [];
let positionsArray = [];
let finalResults = [];
                                                                                                              //Funcion del menu principal
const mainMenu = () => {
  menu.classList.add("menu");
                                                                                                              // Seleccionamos el numero de corredores
  const selectPlayers = document.createElement("div");
  selectPlayers.innerHTML = `
                            <h2>Número de corredores:</h2>
                                <select class="selector" id="jugadores" name="jugadores">
                                    <!-- Opciones de la lista -->
                                    <option value="1" style="color:black">1</option>
                                    <option value="2" style="color:black">2</option>
                                    <option value="3" style="color:black">3</option>
                                    <option value="4" style="color:black">4</option>
                                    <option value="5" style="color:black">5</option>
                                    <option value="6" style="color:black">6</option>
                                    <option value="7" style="color:black">7</option>
                                    <option value="8" style="color:black">8</option>
                                </select>
                            `;
                                                                                                              // Boton para iniciar el juego
  sendNumber.innerText = "Jugar";
  sendNumber.classList.add("enviar");
                                                                                                              // Eventos para el boton de Jugar
  sendNumber.addEventListener("click", (event) => {
    const prueba = document.querySelector(".selector").value;
    menu.style.display = "none";                                                                              //Ocultar menu principal
    return startRace(prueba);                                                                                 // Llamar a la funcion principal
  });
                                                                                                               //Elementos container principal
  menu.appendChild(selectPlayers);
  menu.appendChild(sendNumber);
  containerOne.appendChild(menu);
};

const startRace = (players) => {
                                                                                                              //Creamos un nuevo elemento para colocar los elementos de la carrera
  const menuCarrera = document.createElement("div");

                                                                                                              //Con este loop creamos el numero de elementos de corredor que hayamos seleccionado
  for (let x = 0; x < players; x++) {
    let dorsal = document.createElement("div");
    dorsal.innerHTML = `<p>${x + 1}</p>`;
    dorsal.classList.add("dorsal");
    
    let position = document.createElement("div");
    position.classList.add("pista");
    
    let car = document.createElement("img");
    car.classList.add("coches");
    car.classList.add(`jquery-race${x}`);
    car.src = `./img/car${x + 1}.png`;
    car.name = x + 1; 
    playersArray.push(car);

                                                                                                              //Añadimos el coche dentro de la carretera
    position.appendChild(car);
    containerOne.appendChild(dorsal);
    containerOne.appendChild(position);
  }

                                                                                                              //Iniciar Boton => estilos y eventos
  iniciar.classList.add("enviar");
  iniciar.innerText = "Iniciar";
  iniciar.id = "race-btn";
  iniciar.style.display = "inicial";

                                                                                                              //Numero de coches boton => estilos y eventos
  changeCars.classList.add("enviar");
  changeCars.innerText = "Menu";
  changeCars.style.display = "inicial";
  changeCars.onclick = () => location.reload();

                                                                                                              //Reiniciar boton => estilos y eventos
  reiniciar.classList.add("enviar");
  reiniciar.id = "restart-race";
  reiniciar.innerText = "Reiniciar";
  reiniciar.style.display = "none";
  
                                                                                                              // Funcion para reiniciar la carrera
  $(document).ready(function () {
    $("#restart-race").click(function () {
      for (let p = 0; p < playersArray.length; p++) {
                                                                                                              //Detenemos y devolvemos a la posicion inicial a cada elemento
        $(`.jquery-race${p}`).stop();
        $(`.jquery-race${p}`).animate({ marginLeft: "0px" }, 50);
      }
                                                                                                              //Mostramos y ocultamos botones de nuevo
      reiniciar.style.display = "none";
      iniciar.style.display = "inicial";
      changeCars.style.display = "inicial";
    });
  });
                                                                                                              // Elemento donde colocar los botones

  menuCarrera.appendChild(iniciar);
  menuCarrera.appendChild(reiniciar);
  menuCarrera.appendChild(changeCars);
                                                                                                              //Añadimos al container principal el elemento
  containerOne.appendChild(menuCarrera);

  
  $(document).ready(function () {
    $("#race-btn").click(function () {
                                                                                                              // Escondemos el boton iniciar y mostramos el de reiniciar una vez comienza la carrera 
      setTimeout(() => {
        iniciar.style.display = "none";
        changeCars.style.display = "none";
        reiniciar.style.display = "inicial";
      }, 100);
                                                                                                              //Creamos el elemento donde mostrar las posiciones finales
      const tablePositions = document.createElement("div");
      tablePositions.innerHTML = "<h1>Posiciones</h1>";
                                                                                                               // Ciclo for para asignar animaciones
      for (let y = 0; y < playersArray.length; y++) {
                                                                                                              // Duración aleatoria
        let duration = Math.random() * (10 - 1) + 1;
        duration = Math.round(duration) * 1000;
                                                                                                              //Aplicamos metodo .animate a cada vehiculo con una duración aleatoria
        $(`.jquery-race${y}`).animate(
          { marginLeft: "90%" },
          duration,
          null,
          function () {
            positionsArray.push(this.name);                                                                   //Conforme vayan llegando los coches los añadimos a un array
            console.log(positionsArray);

            if (positionsArray.length == playersArray.length) {
                                                                                                              //Esta condicion se ejecuta cuando hayan llegado todos a meta
              reiniciar.style.display = "none";
              iniciar.style.display = "initial";
                                                                                                              //Pasamos las posiciones al array final donde los mostraremos
              finalResults = positionsArray;
                                                                                                              //Y limpiamos el array para la siguiente partida
              positionsArray = [];
                                                                                                              //Ocultamos los coches y la pista para mostrar los resultados
              let coches = document.querySelectorAll(".pista");
              let dorsales = document.querySelectorAll(".dorsal");
              coches.forEach((coche) => {
                coche.style.display = "none";
              });
                                                                                                              //Ocultamos tambien los numeros dorsales
              dorsales.forEach((drsl) => {
                drsl.style.display = "none";
              });
                                                                                                               //Aqui construimos la lista de posiciones

              for (let x = 0; x < finalResults.length; x++) {
                let pos = document.createElement("div");
                pos.classList.add("posiciones");
                pos.innerHTML = `<p><u>Posicion ${x + 1} :</u> Coche ${
                  finalResults[x]
                }</p></br>`;
                tablePositions.appendChild(pos);
              }
              iniciar.style.display = "none";                                                                   //Ocultamos el boton en los resultados
              containerOne.appendChild(tablePositions);                                                         //Los mostramos por pantalla
                                                                                                                //Esta funcion mostrar los resultados 3 segundos y luego volvera a la pantalla de juego
                                                                                                                // mostrando de nuevo los coches y los botones
              setTimeout(() => {
                window.location.reload();
              }, 3000);
            }
          }
        );
      }
    });
  });

};
                                                                                                                //Ejecutamos la funcion al cargar el archivo javascript
mainMenu();
