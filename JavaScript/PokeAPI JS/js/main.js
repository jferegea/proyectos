let pokemons = document.querySelector(".pokemons");
let selectPage = document.querySelector("#limit");
let navigation = document.querySelector(".navigation .numbers");
let botonHeder = document.querySelectorAll(".boton");

let preLink = "";
let nextLink = "";
let count = 0;
let perPage = 40;
let currentPage = 0;

const pokeUrl = "https://pokeapi.co/api/v2/pokemon/";

const typeColors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD'
};


const getPokemons = (url) => {
    let params = new URLSearchParams(url.split('?')[1]);
    let offset = params.get('offset');
    currentPage = offset / perPage;

    fetch(url)
        .then(response => response.json())
        .then(responseJson => {
            preLink = responseJson.previous;
            nextLink = responseJson.next;
            count = responseJson.count;
            addNumber();
            showPokemons(responseJson.results);
        });
}

getPokemons(`${pokeUrl}?offset=0&limit=40`);

const showPokemons = (array) => {
    clearPokemons();
    array.map(item => {
        fetch(item.url)
            .then(response => response.json())
            .then(data => {
                loadCard(data);
            });
    });
}

const loadCard = (data) => {
    const imagen = data.sprites.other.showdown.front_default;
    const newImage = imagen ? imagen : "../assets/404.gif";
    const nombre = data.name;

    let card = document.createElement("div");
    card.classList.add("pokemon-card");

    // Obtener los tipos del Pokémon
    const types = data.types.map(typeInfo => typeInfo.type.name);
    const color1 = typeColors[types[0]];
    const color2 = types[1] ? typeColors[types[1]] : color1; // Si no hay segundo tipo, usa el primer color

    // Crear el estilo del fondo en gradiente
    const backgroundStyle = types.length > 1 ? `linear-gradient(45deg, ${color1}, ${color2})` : color1;

    let content = `
        <div class="titulo">
            <p>#${data.id}</p>
            <button style="background: ${backgroundStyle};border-radius: 50px;width:5em;height:2em;">Tipo</button>
        </div>
        <img src="${newImage}" alt="${nombre}">
        <p class="nombre">${data.name}</p>
    `;
    card.innerHTML = content;
    pokemons.appendChild(card);
}

const changePg = (value) => {
    const newUrl = `${pokeUrl}?limit=${value}`;
    perPage = value;
    getPokemons(newUrl);
}

const clearPokemons = () => pokemons.innerHTML = "";

const prev = () => {
    getPokemons(preLink);
}

const next = () => {
    getPokemons(nextLink);
}

const addNumber = () => {
    clearNavigation();
    const page = count / perPage;
    for (let i = 0; i < page; i++) {
        let number = document.createElement("span");
        number.classList.add(`element-${i}`);
        const numLink = `<button onclick="actionNum(${i})">${i + 1}</button>`;
        number.innerHTML = numLink;
        navigation.appendChild(number);
    }
    addFocusClass()

}

const addFocusClass=()=>{
    const span = document.querySelector(`.element-${currentPage}`);
    span.classList.add("current");
}

const clearNavigation = () => navigation.innerHTML = "";

const actionNum = (index) => {
    const newUrl = `${pokeUrl}?offset=${index * perPage}&limit=${perPage}`;
    getPokemons(newUrl);
}

// Nueva función para buscar por ID
const searchById = () => {
    const id = document.getElementById("pokemon-id").value;
    if (id) {
        fetch(`${pokeUrl}${id}`)
            .then(response => response.json())
            .then(data => {
                clearPokemons();
                loadCard(data);
            })
            .catch(error => {
                clearPokemons();
                let errorMessage = document.createElement("p");
                errorMessage.textContent = "Pokémon no encontrado";
                pokemons.appendChild(errorMessage);
            });
    }
}

// Nueva función para buscar por tipo
const searchByType = (type) => {
    fetch(`https://pokeapi.co/api/v2/type/${type}`)
        .then(response => response.json())
        .then(data => {
            const pokemonsOfType = data.pokemon.map(p => p.pokemon);
            showPokemons(pokemonsOfType);
        })
        .catch(error => {
            clearPokemons();
            let errorMessage = document.createElement("p");
            errorMessage.textContent = "Error al cargar Pokémon de este tipo";
            pokemons.appendChild(errorMessage);
        });
}

// Añadir Event Listeners a los botones del tipo
document.getElementById("ver-todos").addEventListener("click", () => getPokemons(`${pokeUrl}?offset=0&limit=${perPage}`));
document.getElementById("normal").addEventListener("click", () => searchByType('normal'));
document.getElementById("fire").addEventListener("click", () => searchByType('fire'));
document.getElementById("water").addEventListener("click", () => searchByType('water'));
document.getElementById("grass").addEventListener("click", () => searchByType('grass'));
document.getElementById("electric").addEventListener("click", () => searchByType('electric'));
document.getElementById("ice").addEventListener("click", () => searchByType('ice'));
document.getElementById("fighting").addEventListener("click", () => searchByType('fighting'));
document.getElementById("poison").addEventListener("click", () => searchByType('poison'));
document.getElementById("ground").addEventListener("click", () => searchByType('ground'));
document.getElementById("flying").addEventListener("click", () => searchByType('flying'));
document.getElementById("psychic").addEventListener("click", () => searchByType('psychic'));
document.getElementById("bug").addEventListener("click", () => searchByType('bug'));
document.getElementById("rock").addEventListener("click", () => searchByType('rock'));
document.getElementById("ghost").addEventListener("click", () => searchByType('ghost'));
document.getElementById("dark").addEventListener("click", () => searchByType('dark'));
document.getElementById("dragon").addEventListener("click", () => searchByType('dragon'));
document.getElementById("steel").addEventListener("click", () => searchByType('steel'));
document.getElementById("fairy").addEventListener("click", () => searchByType('fairy'));

// Event Listener para el botón "Buscar por ID"
document.getElementById("search-by-id").addEventListener("click", searchById);
