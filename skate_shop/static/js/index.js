$(document).ready(function() {
//    $('#post').hide();
    $('#d_form').hide();
    $('#add_post').on('click', function() {
//        $('#holder').text(' ');
//        $(function() {
   $('#d_form').dialog({ height: 850, width: 800}).css('color', 'white').css('font-family', 'Arial black');
//  });


    });

    $('#button1').on('click', function() {
        $('#lost').hide('show');
        $('#post').show('show');

    });

    $('#button3').on('click', function() {
        $('#post').hide('show');
        $('#lost').show('show');

    });

    $('.notbutton').on('click', function() {
        $(this).removeClass('notbutton');
        $(this).toggleClass('thebutton');
    });



});
