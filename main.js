const URL = "https://pokeapi.co/api/v2/pokemon/"

const btn = document.getElementById("btn-search");
const searchInput = document.getElementById('search');
const pokedexContainer = document.getElementById("pokedex");

function showError(msg){
    pokedexContainer.innerHTML = '<p>No se encontró ningún Pokémon</p>';
}

async function searchPokemon () {

    const searchedPokemon = searchInput.value.toLowerCase();

    try {

        const response = await fetch(URL + searchedPokemon)    

        if (!response.ok) {
            showError('No se encontró ningún pokémon llamado : + ${searchedPokemon}');
            return;
        }

        const data = await response.json();

        pokedexContainer.innerHTML = 
            `
            <h2>${data.name.toUpperCase()}</h2>
            <img src= "${data.sprites.front_default}">
            <p>Número: ${data.id}</p>
            <p>Altura: ${data.height/10}m</p>
            <p>Peso: ${data.weight/10}kg</p>
            `;
    } catch (error) {
        console.error(error);
        showError('Ha ocurrido un error al buscar el Pokémon')
    }
}

btn.addEventListener("click", searchPokemon);
