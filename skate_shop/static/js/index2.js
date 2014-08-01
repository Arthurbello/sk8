$(document).ready(function() {
var collection = [];
var move;
var searchQuery = "skateboard, hats";
var myApiKey = 'gyz1gkwjb5bucyw7vj4evh8d';
var limit = 150;
var hatQuery = 'hats';
var skateQuery = 'skateboard';
var shoeQuery = 'shoes';
var count = 0;



$('.ex').on('mouseover', function() {

        $(this).animate({color : 'red'}, 500);
    });

    $('.ex').on('mouseout', function() {

        $(this).css('color', 'grey');
    });

    $('.ex').on('click', function() {

        $(this).parent().fadeOut('slow');
    });
//    $(function () {
//    $(window).scroll(function () {
//        var $myDiv = $('#sidebar-wrapper');
//        var y = $(this).scrollTop();
//        $('#results').text(y);
//        x = y - 300;
//        $myDiv.animate({height: '700px'},2500);
//    }).scroll();
//});
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
        url: 'http://api.walmartlabs.com/v1/search?apiKey=56zf44rf7s5n3v4598qsq4j2&query=skateboard&responseGroup=full&numItems: 100',
        type: 'GET',
        dataType: 'jsonp',
        success: function(movie_response) {
            console.log(movie_response);
            for (var j = 0; j < movie_response.items.length; j++) {
                move = {};
                console.log(movie_response);
                move.image_url = movie_response.items[j].thumbnailImage;
                move.title = movie_response.items[j].name;
                move.price = movie_response.items[j].salePrice;
                move.listing_id = movie_response.items[j].itemId;
                collection.push(move);
//                console.log(collection);
                $('#eachone').append('<div style="border-style: solid; border-radius:15px; float: right; padding:10px;background-color:black; color: white; margin: 10px; width: 250px; height: 340px;" class="' + movie_response.items[j].itemId + '" id="snot"><p>' + movie_response.items[j].name + '</p><div style="text-align: center; background-color: white"><img src="' + move.image_url + '"></div><br><p style="text-align: center">Price $'+movie_response.items[j].salePrice+'</p><br><button data-price="'+movie_response.items[j].salePrice+'" style="color: black" class="button">Add to cart</button></div>')

            }




        },
        error: function(error_response) {
            console.log(error_response);
        }
    });


//                }


            $(document).on('click', '.button', function() {
                count = count + $(this).data('price');


                console.log(parseFloat(count));
                $('#num').text('$'+parseFloat(count));

                $('#overlay').fadeIn("slow");
//                $('#overlay_div').fadeIn("slow");
                setTimeout(function(){ $("#overlay").fadeOut('slow'); }, 3000);
//                setTimeout(function(){ jQuery("#overlay_div").fadeOut('slow'); }, 3000);
                    console.log($(this).attr('id'));
                    console.log($(this).parent().attr('class'));
                    console.log(move);
                    var coop;
                    for (var h = 0; h < collection.length; h++) {
                        console.log(collection[h].itemId);
//                        console.log(collection[h]);
                        console.log(parseInt($(this).parent().attr('class')));
                            if (collection[h].listing_id === parseInt($(this).parent().attr('class'))) {
                                console.log(collection[h]);
                            coop = JSON.stringify(collection[h]);
                        }
                    }

                    $.ajax({
                        url: '/new_wish/',
                        type: 'POST',
                        dataType: 'html',
                        data: coop,
                        success: function (movie_response) {

                            $('#cartContainer').append('<p>Title '+ movie_response+'</p>');
                            console.log(movie_response['price']);

                        },
                        error: function (error_response) {
                            console.log(error_response);
                        }
                    });


                });
    $('#Hats').on('click', function() {
        $('#eachone').html('');
        $.ajax({
        url: 'http://api.walmartlabs.com/v1/search?apiKey=56zf44rf7s5n3v4598qsq4j2&query=snapback&responseGroup=full&numItems: 100',
        type: 'GET',
        dataType: 'jsonp',
        success: function(movie_response) {
            console.log(movie_response);
            for (var j = 0; j < movie_response.items.length; j++) {
                move = {};
                console.log(movie_response);
                move.image_url = movie_response.items[j].thumbnailImage;
                move.title = movie_response.items[j].name;
                move.price = movie_response.items[j].salePrice;
                move.listing_id = movie_response.items[j].itemId;
                collection.push(move);
//                console.log(collection);
                $('#eachone').append('<div style="border-style: solid; border-radius:15px; float: right; padding:10px;background-color:black; color: white; margin: 10px; width: 250px; height: 340px;" class="' + movie_response.items[j].itemId + '" id="snot"><p>' + movie_response.items[j].name + '</p><div style="text-align: center"><img src="' + move.image_url + '"></div><br><p style="text-align: center">Price $'+movie_response.items[j].salePrice+'</p><br><button data-price="'+movie_response.items[j].salePrice+'"style="color: black" class="button" id="'+movie_response.items[j].itemId+'">Add to cart</button></div>')

            }

        },
        error: function(error_response) {
            console.log(error_response);
        }
    });

    });

    $('#Shoes').on('click', function() {
        $('#eachone').html('');
        $.ajax({
        url: 'http://api.walmartlabs.com/v1/search?apiKey=56zf44rf7s5n3v4598qsq4j2&query=skate+shoes&responseGroup=full&numItems: 100',
        type: 'GET',
        dataType: 'jsonp',
        success: function(movie_response) {
            console.log(movie_response);
            for (var j = 0; j < movie_response.items.length; j++) {
                move = {};
                console.log(movie_response);
                move.image_url = movie_response.items[j].thumbnailImage;
                move.title = movie_response.items[j].name;
                move.price = movie_response.items[j].salePrice;
                move.listing_id = movie_response.items[j].itemId;
                collection.push(move);
//                console.log(collection);
                $('#eachone').append('<div style="border-style: solid; border-radius:15px; float: right; padding:10px;background-color:black; color: white; margin: 10px; width: 250px; height: 340px;" class="' + movie_response.items[j].itemId + '" id="snot"><p>' + movie_response.items[j].name + '</p><div style="text-align: center"><img src="' + move.image_url + '"></div><br><p style="text-align: center">Price $'+movie_response.items[j].salePrice+'</p><br><button data-price="'+movie_response.items[j].salePrice+'" style="color: black" class="button" id="'+movie_response.items[j].itemId+'">Add to cart</button></div>')

            }

        },
        error: function(error_response) {
            console.log(error_response);
        }
    });

    });


    $('#accessories').on('click', function() {
        $('#eachone').html('');
        $.ajax({
        url: 'http://api.walmartlabs.com/v1/search?apiKey=56zf44rf7s5n3v4598qsq4j2&query=knee+guard&responseGroup=full&numItems: 100',
        type: 'GET',
        dataType: 'jsonp',
        success: function(movie_response) {
            console.log(movie_response);
            for (var j = 0; j < movie_response.items.length; j++) {
                move = {};
                console.log(movie_response);
                move.image_url = movie_response.items[j].thumbnailImage;
                move.title = movie_response.items[j].name;
                move.price = movie_response.items[j].salePrice;
                move.listing_id = movie_response.items[j].itemId;
                collection.push(move);
//                console.log(collection);
                $('#eachone').append('<div style="border-style: solid; border-radius:15px; float: right; padding:10px;background-color:black; color: white; margin: 10px; width: 250px; height: 340px;" class="' + movie_response.items[j].itemId + '" id="snot"><p>' + movie_response.items[j].name + '</p><div style="text-align: center"><img src="' + move.image_url + '"></div><br><p style="text-align: center">Price $'+movie_response.items[j].salePrice+'</p><br><button data-price="'+movie_response.items[j].salePrice+'" style="color: black" class="button" id="'+movie_response.items[j].itemId+'">Add to cart</button></div>')

            }

        },
        error: function(error_response) {
            console.log(error_response);
        }
    });

    });


    $('#Skateboards').on('click', function() {
        $('#eachone').html('');
        $.ajax({
        url: 'http://api.walmartlabs.com/v1/search?apiKey=56zf44rf7s5n3v4598qsq4j2&query=skateboard&responseGroup=full&numItems: 100',
        type: 'GET',
        dataType: 'jsonp',
        success: function(movie_response) {
            console.log(movie_response);
            for (var j = 0; j < movie_response.items.length; j++) {
                move = {};
                console.log(movie_response);
                move.image_url = movie_response.items[j].thumbnailImage;
                move.title = movie_response.items[j].name;
                move.price = movie_response.items[j].salePrice;
                move.listing_id = movie_response.items[j].itemId;
                collection.push(move);
//                console.log(collection);
                $('#eachone').append('<div style="border-style: solid; border-radius:15px; float: right; padding:10px;background-color:black; color: white; margin: 10px; width: 250px; height: 340px;" class="' + movie_response.items[j].itemId + '" id="snot"><p>' + movie_response.items[j].name + '</p><div style="text-align: center"><img src="' + move.image_url + '"></div><br><p style="text-align: center">Price $'+movie_response.items[j].salePrice+'</p><br><button data-price="'+movie_response.items[j].salePrice+'" style="color: black" class="button" id="'+movie_response.items[j].itemId+'">Add to cart</button></div>')

            }

        },
        error: function(error_response) {
            console.log(error_response);
        }
    });

    });

//function readURL(input) {
//            if (input.files && input.files[0]) {
//                var reader = new FileReader();
//
//                reader.onload = function (e) {
//                    $('#blah')
//                        .attr('src', e.target.result)
//                        .width(150)
//                        .height(200);
//                };
//
//                reader.readAsDataURL(input.files[0]);
//            }
//        }
});


//$(window).scroll(function() {
//   if($(window).scrollTop() + $(window).height() > $(document).height() - 600) {
//       alert("near bottom!");
//   }
//});