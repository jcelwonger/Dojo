$(document).ready(function() {
    $('img').click(function() {
        var houseURL = $(this).attr('alt');
        var apiURL = 'http://anapioficeandfire.com/api/houses?name=';
        apiURL += houseURL;
        $.get(apiURL, function(res) {
            var htmlString = '<fieldset id="houseDetails"><legend>House Details</legend>';
            htmlString += '<h3>Name: ' + res[0].name + '</h3>';
            htmlString += '<h3>Words: ' + res[0].words + '</h3>';
            htmlString += '<h3>Region: ' + res[0].region + '</h3>';
            htmlString += '<h3>Coat of Arms: ' + res[0].coatOfArms + '</h3>';
            htmlString += '<h3>Titles: ';
            for (var i = 0; i < res[0].titles.length; i++) {
                htmlString += res[0].titles[i] + ', ';
            }
            htmlString = htmlString.replace(/,\s*$/, "");
            htmlString += '</h3>';
            htmlString += '</fieldset>';
            $('#houseInfo').html(htmlString);
        });
    });
});
