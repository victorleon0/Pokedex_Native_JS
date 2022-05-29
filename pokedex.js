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
      peso: pokemon.weight,
      altura: pokemon.height,
      habilidad: pokemon.abilities.map((ability) => ability.ability.name),
    };

    ALL_POKEMONS.push(poke);
  }
  return ALL_POKEMONS;
};

function createHeader() {
  const header = document.createElement("header");
  header.className = "header";

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
  pokedex.innerHTML = "";

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
    p.innerText = "Tipo " + pokemon.type;
    p.className = "type";

    const divBack = document.createElement("div");
    divBack.className = "back";

    const habilidadPokemonBack = document.createElement("p");
    habilidadPokemonBack.innerText = "Habilidades:  " + pokemon.habilidad;
    habilidadPokemonBack.className = "habilidades";

    const pesoBack = document.createElement("p");
    pesoBack.innerText = "Peso  " + pokemon.peso + "KG";
    pesoBack.className = "peso";

    const alturaBack = document.createElement("p");
    alturaBack.innerText = "Altura  " + pokemon.altura + "M";
    alturaBack.className = "altura";

    const imgBack = document.createElement("img");
    imgBack.className = "imgPokemonBack";
    imgBack.setAttribute("src", pokemon.imageBack);

    //const h3Back = document.createElement("h3");
    //h3Back.innerText = pokemon.name;
    //h3Back.className = "pokemonNameBack";

    pokedex.appendChild(divPokemon);
    divPokemon.appendChild(div);
    divPokemon.appendChild(divBack);
    div.appendChild(h3);
    //divBack.appendChild(h3Back);
    div.appendChild(img);
    divBack.appendChild(imgBack);
    div.appendChild(p);
    //divBack.appendChild(pBack);
    divBack.appendChild(pesoBack);
    divBack.appendChild(alturaBack);
    divBack.appendChild(habilidadPokemonBack);
  }
};

const searchPokemons = (event) => {
  const buscaInput = event.target.value.toLowerCase();
  const resultPokemon = ALL_POKEMONS.filter((pokemon) => {
    const matchName = pokemon.name.toLowerCase().includes(buscaInput);
    return matchName;
  });
  console.log(buscaInput);

  drawPokemons(resultPokemon);
};

const eventsListener = () => {
  document
    .querySelector(".inputSearch")
    .addEventListener("input", searchPokemons);
};

function createFooter() {
  const footer = document.createElement("footer");
  footer.className = "footer-container";
  document.body.appendChild(footer);

  const h4Footer = document.createElement("h1");
  h4Footer.className = "copyright";
  h4Footer.innerText = "Copyright (c) - Víctor León 2022";
  footer.appendChild(h4Footer);

  const divLogoFooter = document.createElement("div");
  divLogoFooter.classList.add("logoFooter-container");
  footer.appendChild(divLogoFooter);

  const imgFooter = document.createElement("img");
  imgFooter.classList.add("imgFooter");
  imgFooter.src = "https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png";
  imgFooter.alt = "Pokemon Logo Footer";
  divLogoFooter.appendChild(imgFooter);

  const divSocial = document.createElement("div");
  divSocial.classList.add("social-container");
  footer.appendChild(divSocial);

  const logoLinkedin = document.createElement("img");
  logoLinkedin.classList.add("imgLinkedin");
  logoLinkedin.src = "https://cdn-icons-png.flaticon.com/512/174/174857.png";
  logoLinkedin.href = "https://www.linkedin.com/in/victorleon0/";
  divSocial.appendChild(logoLinkedin);

  const logoFacebook = document.createElement("img");
  logoFacebook.classList.add("imgFacebook");
  logoFacebook.src = "https://cdn-icons-png.flaticon.com/512/174/174848.png";
  logoFacebook.href = "https://www.facebook.com/Victor.Leoon/";
  divSocial.appendChild(logoFacebook);

  const logoInstagram = document.createElement("img");
  logoInstagram.classList.add("imgInstagram");
  logoInstagram.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png";
  logoInstagram.href = "https://www.instagram.com/victorleon_/";
  divSocial.appendChild(logoInstagram);

  const logoGithub = document.createElement("img");
  logoGithub.classList.add("imgGithub");
  logoGithub.src = "https://cdn-icons-png.flaticon.com/512/25/25231.png";
  logoGithub.href = "https://github.com/victorleon0";
  divSocial.appendChild(logoGithub);

  const logoEmail = document.createElement("img");
  logoEmail.classList.add("imgEmail");
  logoEmail.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png";
  logoEmail.href = "mailto: victor.leon.huerta@gmail.com";
  divSocial.appendChild(logoEmail);
}

const initApp = async () => {
  const data = await getPokemonsAll();
  const pokemons = await getPokemonById(data.results);
  createHeader();
  drawPokemons(pokemons);
  eventsListener();
  createFooter();

  pokemons.forEach((pokemon) => {});
};

initApp();
