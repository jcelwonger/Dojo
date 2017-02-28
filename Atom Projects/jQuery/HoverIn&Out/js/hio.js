$(document).ready(function() {

    $('img').hover(
        function() {

            $(this).attr('src', $(this).attr('alt-target'));
        },
        function() {
            $(this).attr('src', $(this).attr('src'));
        });
});
