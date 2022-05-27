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