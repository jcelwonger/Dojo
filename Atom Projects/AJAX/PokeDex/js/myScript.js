$(document).ready(function() {
    for (var i = 1; i <= 151; i++) {
        var pokeURL = '<img src="http://pokeapi.co/media/img/' + i + '.png" alt="" alt-url="' + i + '"/>';
        $('#pokemon').append(pokeURL);
    };
});
