    $(document).ready(function() {
        $('img').hover(
            function() {
                var origImg = $(this).attr('src');
                $(this).attr('src', $(this).attr('alt-target'));
                $(this).attr('alt-target', origImg);
            },
            function() {
                var newImg = $(this).attr('src');
                $(this).attr('src', $(this).attr('alt-target'));
                $(this).attr('alt-target', newImg);
            });
    });
