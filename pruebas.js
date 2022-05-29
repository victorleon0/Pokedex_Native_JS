function createContainer () {
    const containerHeader = document.createElement ("div");
    container.classList.add('containerHeader');
    document.body.appendChild(containerHeader);
  
    const containerPokedex = document.createElement ("div");
    container.classList.add('containerPokedex');
    document.body.appendChild(containerPokedex);
  
    const containerFooter = document.createElement ("div");
    container.classList.add('containerFooter');
    document.body.appendChild(containerFooter);
    return container;
  }
  
  function createHeader (container) {
    const header = document.createElement ("header");
  
    const h1 = document.createElement ("h1");
    h1.innerText = "Bootcamp Score Project";
    header.appendChild(h1);
  
    const divLogo = document.createElement ("div");
    divLogo.classList.add("logo");
    header.appendChild(divLogo);
  
    const img = document.createElement ("img");
    img.classList.add("img");
    img.src = "https://d1fdloi71mui9q.cloudfront.net/S8HhvUnnRgmjyhySHtWl_ZQMaRWd21TfV5AsU";
    img.alt = "Upgrade Logo";
    divLogo.appendChild(img)
  
    const companyName = document.createElement ("div");
    companyName.innerText = "Upgrade Hub";
    divLogo.appendChild(companyName)
  
    container.appendChild(header);  
  }
  
  const drawPokemons = (list) =>{
  
    for(pokemon of list){
        const div = document.createElement('div');
        div.className = "card"
  
        const img = document.createElement('img');
        img.className = "imgPokemon"
        img.setAttribute('src',pokemon.image);
  
        const h3 = document.createElement('h3');
        h3.innerText = pokemon.name;
  
        const p = document.createElement('p');
        p.innerText = pokemon.type;
  
        div.appendChild(p);
        div.appendChild(h3);
        div.appendChild(img);
        document.body.appendChild(div);
    }
  }


const eventListeners = () => {
  document.querySelector()

}




  function createFooter () {
    const footer = document.createElement ("footer");
    footer.className = "footer"
  
    const divFooter = document.createElement ("div");
    div.innerText = "divFooter";
    footer.appendChild(div);
  
  
    const img = document.createElement ("img");
    img.classList.add("img");
    img.src = "https://static.wikia.nocookie.net/batallas-versus-ff/images/d/db/Pok%C3%A9mon_Logo.png/revision/latest?cb=20150420214003&path-prefix=es";
    img.alt = "Pokemon Logo";
    divFooter.appendChild(img)
  
  
    container.appendChild(footer);  
  }


  const drawFooter = (pokemonFooter) => {
    const pokemonFooter = document.createElement("div");
    bodyFooter.className = "pokemonFooter"
    document.body.appendChild(pokemonFooter);
  
    const divFooter = document.createElement("div");
    divFooter.className = "footer";
  
    const divLogoFooter = document.createElement("div");
    divLogo.classList.add("logoFooter");
    divFooter.appendChild(divLogoFooter);
  
    const imgFooter = document.createElement("img");
    imgFooter.classList.add("imgFooter");
    imgFooter.src = "https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png";
    imgFooter.alt = "Pokemon Logo";
    divFooter.appendChild(img);
  
    const h4 = document.createElement("h4");
    h4.innerText = "Copyright - Víctor León - 2022";
    h4.className = "copyright";
  
    divFooter.appendChild(p);
    divFooter.appendChild(h4);
    divFooter.appendChild(imgFooter);
  };



  const searchPokemons = (event) => {

    const searchInput = event.target.value.toLowerCase();
    const resultPokemon = ALL_POKEMONS.filter((pokemon) => {
      const searchName = pokemon.name.toLowerCase().includes(searchInput);
      const searchId = pokemon.id === Number(inputValue);
  
      return searchName || searchId;
    });
  
    drawPokemons(resultPokemon);
  };
  
  const addAllMyEventsListeners = () => {
    document.getElementsByClassName(".inputSearch").addEventListener("input", searchPokemons);
  };
  
  
  


  const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}