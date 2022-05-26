
    let pokemon = [];
    for(let i = 1; i <= 150; i++) {
        let response = {fetch('https://pokeapi.co/api/v2/pokemon/${i}');
        .then(response => {
            return response.json();
        })
        .then(response => {
            return response;
        })
        .catch((error) => {
            console.log("Ha habido un error al obtener los pokemons", error)
        })}
        pokemon.push(response); 
        console.log(pokemon);
    } 
   
    
