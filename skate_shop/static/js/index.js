$(document).ready(function() {
//    $('#post').hide();
    $('#d_form').hide();
    $('#add_post').on('click', function() {
//        $('#holder').text(' ');
//        $(function() {
   $('#d_form').dialog({ height: 700, width: 800});
//  });


    });

    $('#button1').on('click', function() {
        $('#post').show('show');

    });

    $('.notbutton').on('click', function() {
        $(this).removeClass('notbutton');
        $(this).toggleClass('thebutton');
    })
});
