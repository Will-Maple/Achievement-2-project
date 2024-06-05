let pokemonList = [
    {name: 'Weedle', height: 0.3, types: ['bug', 'poison']},
    {name: 'Pidgey', height: 0.3, types: ['flying', 'normal']}, 
    {name: 'Bellsprout', height: 0.7, types: ['grass', 'poison']}
 ]

function printArrayDetails(array) {
 for (let i = 0; i < array.length; i++) {
    document.write("<p>" + pokemonList[i].name + " (height: " + pokemonList[i].height + ")");
    if (pokemonList[i].height > 0.6) {
        document.write(" - WOWZA! That's a Biggie!")
    }
    document.write("</p>")
 }
}

printArrayDetails(pokemonList);

function dividing(dividend, divisor) {
    if (divisor === 0) {
        return "You're trying to divide by 0."
    }
    else {
        let div = dividend / divisor;
        return div;
    }
}