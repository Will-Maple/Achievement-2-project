let pokemonRepository = (function () {
    let pokemonList = [
        {name: 'Weedle', height: 0.3, types: ['bug', 'poison']},
        {name: 'Pidgey', height: 0.3, types: ['flying', 'normal']}, 
        {name: 'Bellsprout', height: 0.7, types: ['grass', 'poison']}
    ];
  
    function add(pokemon) {
      pokemonList.push(pokemon);
    }
  
    function getAll() {
      return pokemonList;
    }

    function showDetails (pokemon) {
      console.log(pokemon);
    }

    function addListItem(pokemon) {
        let pokemonButtons = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-main');
        button.addEventListener('click', function(event) {
          showDetails(pokemon);
        });
        listItem.appendChild(button);
        pokemonButtons.appendChild(listItem);
    }

    return {
      add: add,
      getAll: getAll,
      showDetails: showDetails,
      addListItem: addListItem
    };
  })()

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon)
    /*if (pokemon.height > 0.6) {
        document.write(" - WOWZA! That's a Biggie!")
    }*/
 })

function dividing(dividend, divisor) {
    if (divisor === 0) {
        return "You're trying to divide by 0."
    }
    else {
        let div = dividend / divisor;
        return div;
    }
}