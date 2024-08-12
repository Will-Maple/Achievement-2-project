let pokemonRepository = (function () {
    let pokemonList = [];
    let apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=150'
  
    function add(pokemon) {
      pokemonList.push(pokemon);
    }
  
    function getAll() {
      return pokemonList;
    }

    function showDetails(pokemon) {
      loadDetails(pokemon).then(function () {
        console.log(pokemon);
      });
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

    function loadList() {
        return fetch(apiURL).then(function (response) {
        return response.json();
    }).then(function (json) {
        json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
      };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

    function loadDetails(item) {
      let url = item.detailsUrl;
        return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      }).catch(function (e) {
        console.error(e);
    });
  }

    return {
      add: add,
      getAll: getAll,
      loadList: loadList,
      loadDetails: loadDetails,
      showDetails: showDetails,
      addListItem: addListItem
    };
  })()
  
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

function dividing(dividend, divisor) {
    if (divisor === 0) {
        return "You're trying to divide by 0."
    }
    else {
        let div = dividend / divisor;
        return div;
    }
}