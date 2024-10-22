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
      let titleElement = document.querySelector('.modal-title')
      let modalText1 = document.querySelector('#modal-text1')
      let modalText2 = document.querySelector('#modal-text2')
      let modalImg = document.querySelector('#modal-img')
      let typesNames = pokemon.types.map(typesItem => typesItem.type.name).join(', ');
      let height = 'Height = ' + pokemon.height;
      let types = 'Pokemon Types = ' + typesNames;
      modalImg.classList.add('img-fluid');
      modalImg.alt = 'Image of' + pokemon.name;

      titleElement.innerText = pokemon.name;
      modalText1.innerHTML = height;
      modalText2.innerHTML = types;
      modalImg.src = pokemon.imageUrl;
    }

    function addListItem(pokemon) {
        let pokemonButtons = document.querySelector('.pokemon-list');
        let buttonTemplate = document.querySelector('#modal-btn');
        let button = buttonTemplate.cloneNode(false);
        button.classList.remove("hidden")
        button.innerText = pokemon.name;


        button.addEventListener('click', function(event) {
          loadDetails(pokemon).then(showDetails)
        });
        pokemonButtons.appendChild(button);
    }

   async function loadList() {
    try  {
        const response = await fetch(apiURL);
        const json = await response.json();
        json.results.forEach((item) => {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      } catch (error) {
          console.error(':( Error loading pokemon List :(', error);
      }
   }

    async function loadDetails(item) {
      let url = item.detailsUrl;
        return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
        return item;
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