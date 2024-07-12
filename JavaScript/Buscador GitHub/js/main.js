const btnSearch = document.querySelector(".search-section a");
const inputUser = document.querySelector(".search-section input");
const mainContainer = document.querySelector(".main-wraper");
const containerSection = document.querySelector(".container-section");

const url="https://api.github.com/users/"

btnSearch.addEventListener("click", buscarUser);

function buscarUser(e){
    e.preventDefault();

    //console.log(inputUser.value);
    if(inputUser.value === ""){
        mostrarError("Escriba un usuario de GitHub.");
        return;
    }
    callApiUser(inputUser.value)
}

function mostrarError(mensaje){
    const mensajeNuevo = "Warning: " + mensaje;
    const error = document.createElement("h3");
    error.innerText = mensajeNuevo;
    error.style.color = "red";
    error.style.fontWeight = "bold";
    mainContainer.appendChild(error);
    setTimeout(()=> error.remove(), 5000);
}

async function callApiUser(user){
    const userUrl = url + user;
    const repoURl = `${url}${user}/repos`;

    try{
        const data = await Promise.all([fetch(userUrl), fetch(repoURl)]);
        //console.log(data);
        if(data[0].status === 404){
            mostrarError("No existe el usuario.");
            return;
        }
        const dataUser = await data[0].json();
        const dataRepo = await data[1].json();

        mostrarData(dataUser);
        mostrarRepos(dataRepo);

    } catch(error){
        console.log(error);
    }
}

function mostrarData(dataUser){
    clearHTML();
    const {avatar_url, bio, followers, following, name, public_repos} = dataUser;
    const container = document.createElement("div");
    container.innerHTML = `
                <div class="row-left">
                    <img src="${avatar_url}" alt="user image">
                </div>
                <div class="row-right">
                    <h3>${name}</h3>
                    <p>${bio}</p>
                    <div class="stats-user">
                        <p><span>${followers}</span> Followers</p>
                        <p><span>${following}</span> Following</p>
                        <p><span>${public_repos}</span> Repos</p>
                    </div>
                    <h3>Repositorios:</h3>
                    <div class="link-repos">

                    </div>
                </div>                          
                            `;

    containerSection.appendChild(container);
}

function mostrarRepos(repos){
    const reposContainer = document.querySelector(".link-repos");
    repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 10)
    .forEach(elemento => {
        const link = document.createElement("a");
        link.innerText = elemento.name;
        link.href = elemento.html_url;
        link.target = "_blank";
        reposContainer.appendChild(link);
    });
}

function clearHTML(){
    containerSection.innerHTML="";
}