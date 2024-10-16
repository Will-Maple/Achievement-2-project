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
      let modalContainer = document.querySelector('#modal-container');
      modalContainer.innerHTML = '';
      modalContainer.classList.add('is-visible');
      let modal = document.createElement('div');
      modal.classList.add('modal');

      let closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.classList.add('btn');
      closeButtonElement.classList.add('btn-secondary');
      closeButtonElement.classList.add('btn-sm');
      closeButtonElement.innerText = 'hide details';
      closeButtonElement.addEventListener('click', hideDetails);

      let titleElement = document.createElement('h1');
      titleElement.innerText = pokemon.name;

      let contentElement1 = document.createElement('p');
      let contentElement2 = document.createElement('p');
      let typesNames = pokemon.types.map(typesItem => typesItem.type.name).join(", ");
      contentElement1.innerText = 'Height = ' + pokemon.height;
      contentElement2.innerText = 'Pokemon Types = ' + typesNames;

      let imageElement = document.createElement('img');
      imageElement.src = pokemon.imageUrl;

      modal.appendChild(closeButtonElement);
      modal.appendChild(titleElement);
      modal.appendChild(contentElement1);
      modal.appendChild(contentElement2);
      modal.appendChild(imageElement);
      modalContainer.appendChild(modal);
      modal.classList.add('is-visible');

      modalContainer.addEventListener('click', (e) => {
        let target = e.target;
        if (target === modalContainer) {
          hideDetails();
        }
      });
    }

    function hideDetails() {
      let modalContainer = document.querySelector('#modal-container');
      modalContainer.classList.remove('is-visible');
    }

    window.addEventListener('keydown', (e) => {
      let modalContainer = document.querySelector('#modal-container');
      if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideDetails();  
      }
    });

    function addListItem(pokemon) {
        let pokemonButtons = document.querySelector('.pokemon-list');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-main');
        button.classList.add('btn');
        button.classList.add('btn-link');
        
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

    function loadDetails(item) {
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

/* function dividing(dividend, divisor) {
    if (divisor === 0) {
        return "You're trying to divide by 0."
    }
    else {
        let div = dividend / divisor;
        return div;
    }
} */