$(document).ready(function() {
    for (var i = 1; i <= 151; i++) {
        // Create the URL to display the Pokemon
        var pokeURL = '<img src="http://pokeapi.co/media/img/' + i + '.png" alt="" pokeID="' + i + '"/>';
        // Append the images to the Pokemon div
        $('#pokemon').append(pokeURL);
    };
    $('img').click(function() {
        // Get the PokemonID
        var pokeID = $(this).attr('pokeID');
        // Create the new URL
        var pokedexURL = 'http://pokeapi.co/api/v1/pokemon/' + pokeID;
        $.get(pokedexURL, function(res) {
            var pokeName = '<h1>' + res.name + '</h1>';
            var pokeImg = '<img src="http://pokeapi.co/media/img/' + pokeID + '.png" />';
            var pokeTypes = "";
            pokeTypes += "<h4>Types</h4><ul>";
            for (var i = 0; i < res.types.length; i++) {
                pokeTypes += "<li>" + res.types[i].name + "</li>";
            };
            pokeTypes += "</ul>";
            var pokeHeight = "<h4>Height</h4><p>" + res.height + "</p>";
            var pokeWeight = "<h4>Weight</h4><p>" + res.weight + "</p>";
            $('#pokeName').html(pokeName);
            $('#pokeImg').html(pokeImg);
            $('#pokeTypes').html(pokeTypes);
            $('#pokeHeight').html(pokeHeight);
            $('#pokeWeight').html(pokeWeight);
        });

    });
});
