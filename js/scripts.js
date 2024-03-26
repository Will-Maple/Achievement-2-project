let pokemonList = [
    {name: 'Weedle', height: 0.3, types: ['bug', 'poison']},
    {name: 'Pidgey', height: 0.3, types: ['flying', 'normal']}, 
    {name: 'Bellsprout', height: 0.7, types: ['grass', 'poison']}
 ]

 for (let i = 0; i < pokemonList.length; i++) {
    document.write("<p>" + pokemonList[i].name + " (height: " + pokemonList[i].height + ")");
    if (pokemonList[i].height > 0.6) {
        document.write(" - WOWZA! That's a Biggie!")
    }
    document.write("</p>")
 }