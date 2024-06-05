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
  
    return {
      add: add,
      getAll: getAll
    };
  })()

pokemonRepository.getAll().forEach(function(pokemon) {
    document.write("<p>" + pokemon.name + " (height: " + pokemon.height + ")");
    if (pokemon.height > 0.6) {
        document.write(" - WOWZA! That's a Biggie!")
    }
    document.write("</p>")
 })()

function dividing(dividend, divisor) {
    if (divisor === 0) {
        return "You're trying to divide by 0."
    }
    else {
        let div = dividend / divisor;
        return div;
    }
}