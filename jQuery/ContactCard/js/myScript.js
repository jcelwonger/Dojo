function attachDivHandlers() {
    $('#userInfoSidebar div').click(function(e) {
        e.stopPropagation();
        if ($(this).children('h3').is(':hidden')) {
            $(this).children('h1,h4').hide();
            $(this).children('h3').show();
            alert('if wins');
        } else {
            $(this).children('h1, h4').show();
            $(this).children('h3').hide();
            alert('else wins');
        };
    });
};

$(document).ready(function() {
    attachDivHandlers();
    $('form').submit(function(e) {
        // Do not allow the page to reload
        e.preventDefault();
        // Gather Variables
        var firstName = $(this).find('input[name="first_name"]').val();
        var lastName = $(this).find('input[name="last_name"]').val();
        var description = $(this).find('textarea[name="description"]').val();
        // Create a new div
        var newUserInfoBox = "<div><h1>" + firstName + " " + lastName + "</h1><h4>Click for description!</h4><h3>" + description + "</h3></div>";
        // Populate the userInfoSidebar with the info from the form and attach handlers
        $('#userInfoSidebar').append(newUserInfoBox);
        $('#userInfoSidebar div h3').hide();
        attachDivHandlers();
        //Reset the form
        $('form')[0].reset();

    });
});
