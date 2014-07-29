$(document).ready(function() {
var collection = [];
var move;
var searchQuery = "skateboard, hats";
var myApiKey = 'gyz1gkwjb5bucyw7vj4evh8d';
var limit = 150;
//    $('#store').one('click', function() {
//        $('body').append('<button id="coke">Get recent listings for this store</button>');
//        $.ajax({
//            url: 'https://openapi.etsy.com/v2/shops/TriforceInk.js?api_key=gyz1gkwjb5bucyw7vj4evh8d',
//            type: 'GET',
//            dataType: 'jsonp',
//            success: function(movie_response) {
//                for (var x = 0; x < movie_response.results.length; x++) {
//                    console.log(movie_response);
//                    $('#work').append('<div id="spot"><p><b>' + movie_response.results[x].shop_name + '</b></p><p>'+movie_response.results[x].title+'</p></div>')
//                }
//                $('#crack').html('Get recent listings for this store');
//                if ($('#crack').html() === 'Get recent listings for this store') {
    $.ajax({
        url: 'https://openapi.etsy.com/v2/listings/active.js?api_key='+ myApiKey + '&keywords=' +searchQuery + '&limit=' + limit,
        type: 'GET',
        dataType: 'jsonp',
        success: function(movie_response) {
            for (var j = 0; j < movie_response.results.length; j++) {
                move = {};
                console.log(movie_response);
                move.image_url = movie_response.results[j].url_170x135;
                move.title = movie_response.results[j].title;
                move.price = movie_response.results[j].price;
                move.listing_id = movie_response.results[j].listing_id;
                collection.push(move);
//                console.log(collection);
                $('#eachone').append('<div style="border-style: solid; border-radius:15px; float: right; padding:10px;background-color:black; color: white; margin: 10px; width: 250px; height: 300px;" class="' + movie_response.results[j].listing_id + '" id="snot"><p>' + movie_response.results[j].title + '</p><img src="' + move.image_url + '"><p>Price $'+movie_response.results[j].price+'</p><br><button style="color: black" class="button" id="'+movie_response.results[j].listing_id+'">Add to cart</button></div>')

            }

        },
        error: function(error_response) {
            console.log(error_response);
        }
    });


//                }

                $(document).on('click', '.button', function() {
                    console.log($(this).attr('id'));
                    console.log($(this).parent().attr('class'));
                    console.log(move);
                    var coop;
                    for (var h = 0; h < collection.length; h++) {
                        console.log(collection[h].listing_id);
                        console.log($(this).parent().attr('class'));
                            if (collection[h].listing_id === parseInt($(this).parent().attr('class'))) {
                            coop = JSON.stringify(collection[h]);
                        }
                    }

                    $.ajax({
                        url: '/new_wish/',
                        type: 'POST',
                        dataType: 'html',
                        data: coop,
                        success: function (movie_response) {

                            $('#movieInfoContainer').append('<p>Title '+ movie_response+'</p>');
                            console.log(movie_response['Title']);
                        },
                        error: function (error_response) {
                            console.log(error_response);
                        }
                    });


                });
//            },
//            error: function(error_response) {
//                console.log(error_response);
//            }
//        });
//    })
});

window.onscroll = scroll;

function scroll () {
alert("scroll event detected! " + window.pageXOffset + " " + window.pageYOffset);
// note: you can use window.innerWidth and window.innerHeight to access the width and height of the viewing area
//}