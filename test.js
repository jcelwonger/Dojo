$('#pgc-2-1-0').click(function() {
    $('.solution-content').hide();
    $('#row-planning').show();
});

$('pgc-2-1-1').click(function() {
    $('.solution-content').hide();
    $('#row-retirement').show();
});


$('widget').click(function() {
    var widgetClass = $(this).attr('class');
    var rows = ['row-planning', 'row-retirement', 'row-risk', 'row-legacy', 'row-myth'];
    for (var i = 0; i < rows.length; i++) {
        if (rows[i] == widgetClass) {
            $('.solution-content').hide();
            $('#' + rows[i]).show();
        }
    }
});
