$(document).ready(function() {
    $('#thesearcher').on('click', function() {
        var query = $('#thesearch').val();
        $('#newson').hide();
        $.ajax({
            url: '/user/' + query,
            type: 'GET',
            dataType: 'html',
            success: function(movie_response) {
                console.log(query);
                    console.log(movie_response);
                    $('#thediv').append(movie_response)



            },
            error: function(error_response) {
                console.log(error_response);
            }
        });
    });
});
