const pokemonTable = []
const container = document.getElementsByClassName('container')

function fetchTruc (){
    for (let i = 1; i < 151; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon-form/${i}/?limit=151`
    fetch(url)
        .then( data => data.json())
        .then( pokemon => {
            console.log(pokemon)
            let div = document.createElement('div')
            container[0].appendChild(div)
            let pokeName = document.createElement('h2')
            pokeName.innerHTML= pokemon.name
            div.appendChild(pokeName)
            let pokimage = document.createElement('img')
            pokimage.setAttribute('src', pokemon.sprites.front_shiny)
            div.appendChild(pokimage)
        });
    };
}
fetchTruc()