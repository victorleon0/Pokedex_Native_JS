const pokedex = document.getElementById("#pokedex");
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
    ALL_POKEMONS.push(pokemon);
  }
  return ALL_POKEMONS;
};

const initApp = async () => {
  const data = await getPokemonsAll();
  const pokemons = await getPokemonById(data.results);
  console.log(pokemons)
  pokemons.forEach (pokemon => {
    console.log(pokemon)
  })
    
};


initApp();
