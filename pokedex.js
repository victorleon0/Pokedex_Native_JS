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
    const pokemon = await response.json()
    const poke = {
      name: pokemon.name,
      id: pokemon.id,
      type: pokemon.types.map((type) => type.type.name),
      image: pokemon.sprites["front_default"],
    };
    console.log(poke);
    ALL_POKEMONS.push(poke);
  }
  return ALL_POKEMONS;
};


const drawPokemons = (list) =>{

    for(pokemon of list){
        const div = document.createElement('div');
        div.className = "card"
        const img = document.createElement('img');
        img.className = "imgPokemon"
        const h3 = document.createElement('h3');
        img.setAttribute('src',pokemon.image);
        h3.innerText = pokemon.name;
        div.appendChild(h3);
        div.appendChild(img);
        document.body.appendChild(div);
    }
}



const initApp = async () => {
  const data = await getPokemonsAll();
  const pokemons = await getPokemonById(data.results);
  drawPokemons (pokemons)
  pokemons.forEach (pokemon => {
    console.log(pokemon)
  })
    
};


initApp();
