const pokedex = document.getElementById("pokedex");
const container = document.querySelector(".container");
const ALL_POKEMONS = [];
const ALL_POKEMONS_INFO = [];



const getPokemonsAll = () => {
  return fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log("Ha habido un error al obtener los pokemons", error);
    });
};

const getPokemonById = async (pokemonsList) => {
  for (let i = 1; i < pokemonsList.length; i++) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const pokemon = await response.json();
    const poke = {
      name: pokemon.name,
      id: pokemon.id,
      type: pokemon.types.map((type) => type.type.name),
      image: pokemon.sprites["front_default"],
      imageBack: pokemon.sprites["back_default"],
    };
    console.log(poke);
    ALL_POKEMONS.push(poke);
  }
  return ALL_POKEMONS;
};

function createHeader() {
  const header = document.createElement("header");
  header.className = "header";

  const h1 = document.createElement("h1");
  h1.className = "headerTitle";
  h1.innerText = "Pokedex";
  header.appendChild(h1);

  const divLogo = document.createElement("div");
  divLogo.classList.add("logoHeader");
  header.appendChild(divLogo);

  const img = document.createElement("img");
  img.classList.add("imgHeader");
  img.src = "https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png";
  img.alt = "Pokemon Logo";
  divLogo.appendChild(img);

  const divInput = document.createElement("div");
  divInput.classList.add("inputHeader");
  header.appendChild(divInput);

  const inputSearch = document.createElement("input");
  inputSearch.classList.add("inputSearch");
  inputSearch.placeholder = "Encuentra tu Pokemon";
  divInput.appendChild(inputSearch);

  const orderButton = document.createElement("button");
  orderButton.classList.add("orderButton");
  orderButton.innerText = "Ordenar";
  divInput.appendChild(orderButton);

  

  document.body.insertBefore(header, container);
}

const drawPokemons = (list) => {
  for (pokemon of list) {
    const divPokemon = document.createElement("div");
    divPokemon.classList.add("divPokemon");

    const div = document.createElement("div");
    div.className = "front";

    const img = document.createElement("img");
    img.className = "imgPokemon";
    img.setAttribute("src", pokemon.image);

    const h3 = document.createElement("h3");
    h3.innerText = pokemon.name;
    h3.className = "pokemonName";

    const p = document.createElement("p");
    p.innerText = pokemon.type;
    p.className = "type";

    const divBack = document.createElement("div");
    divBack.className = "back";

    const imgBack = document.createElement("img");
    imgBack.className = "imgPokemonBack";
    imgBack.setAttribute("src", pokemon.imageBack);

    const h3Back = document.createElement("h3");
    h3Back.innerText = pokemon.name;
    h3Back.className = "pokemonNameBack";


    const pBack = document.createElement("p");
    pBack.innerText = pokemon.type;
    pBack.className = "descriptionBack";


    pokedex.appendChild(divPokemon);
    divPokemon.appendChild(div);
    divPokemon.appendChild(divBack);
    div.appendChild(h3);
    divBack.appendChild(h3Back);
    div.appendChild(img);
    divBack.appendChild(imgBack);
    div.appendChild(p);
    divBack.appendChild(pBack);

  }
};


const searchPokemons = (event) => {

  const searchInput = event.target.value.toLowerCase();
  const resultPokemon = ALL_POKEMONS.filter((pokemon) => {
    const searchName = pokemon.name.toLowerCase().includes(searchInput);
    const searchId = pokemon.id === Number(searchInput);

    return searchName || searchId;
  });

  drawPokemons(resultPokemon);
};

const addAllMyEventsListeners = () => {
  document.getElementsByClassName(".inputSearch").addEventListener("input", searchPokemons);
};
	




function createFilter () {
  const inputSearch = event.target.value.toLowerCase();
  const found = ALL_POKEMONS.filter((pokemon) => {
    const matchName = pokemon.name.toLowerCase().includes(inputValue);
    const matchId = pokemon.id === Number(inputValue);
    return matchName || matchId
  })

  createFilter(inputSearch)
};




const initApp = async () => {
  const data = await getPokemonsAll();
  const pokemons = await getPokemonById(data.results);
  createHeader();
  drawPokemons(pokemons);

  pokemons.forEach((pokemon) => {
    console.log();
  });
};

initApp();
