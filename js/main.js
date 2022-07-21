$(document).ready(function() {


    // adding numeric values in divs
    var val = "one"
    var y = $('.nums .f-row div')
    for (let i = 0; i < y.length; i++) {
        $(y[i]).append($(y[i]).attr("data-option") + '<br> <span>' + $(y[i]).attr("data-value") + '</span>')
        $(y[i]).find('img:first-of-type,img:last-of-type').hide()
        $(y[i]).find('span').css("visibility", "hidden")
    }

    // reset answers function
    $('.icons .reload').click(function() {
            $('.first div').css("visibility", "visible")
            for (let i = 0; i < y.length; i++) {
                $(y[i]).empty()
                $(y[i]).append('<img src="imgs/images/crossMark-small.png" alt="">')
                $(y[i]).append('<img src="imgs/images/tikMark-small.png" alt="">')
                $(y[i]).append($(y[i]).attr("data-option") + '<br> <span>' + $(y[i]).attr("data-value") + '</span>')
                $(y[i]).find('img:first-of-type,img:last-of-type').hide()
                $(y[i]).find('span').css("visibility", "hidden")
                $('.icons .showAns').css('opacity', '1')
                $('.first div').css({
                    "background": "#eee",
                    "color": "#333"
                })

            }
        })
        // show answers function
    $('.icons .showAns').click(function() {
        $('.first div').css("visibility", "hidden")
        for (let i = 0; i < y.length; i++) {
            $(y[i]).empty()
            $(y[i]).append('<img src="imgs/images/crossMark-small.png" alt="">')
            $(y[i]).append('<img src="imgs/images/tikMark-small.png" alt="">')
            $(y[i]).append($(y[i]).attr("data-option") + '<br> <span>' + $(y[i]).attr("data-value") + '</span>')
            $(y[i]).find('img:first-of-type').hide()
            $(y[i]).find('img:last-of-type').show()
            $('.first div').css({
                "background": "#eee",
                "color": "#333"
            })
            $(this).css('opacity', '.5');
        }
    })

    // matching divs with values
    $('.first div').click(function() {
            var x = $(this)
            $(this).css({
                "background": "rgb(14, 186, 188)",
                "color": "white"
            })

            // case 1 not matching
            y.click(function() {
                if (x.attr("data-value") !== $(this).attr("data-value")) {
                    $(this).find('audio').remove()
                    $(this).find('img:last-of-type').hide()
                    $(this).find('img:first-of-type').show()
                    $(this).find('img:last-of-type').next().append('<audio autoplay><source src="audio/Buzzer.mp3"></audio>')
                    setTimeout(() => {
                        $(this).find('img:first-of-type').hide()
                        $(this).find('audio').remove()
                    }, 1000);

                    // case 2 matching
                } else {
                    x.css("visibility", "hidden");
                    $(this).find('audio').remove()
                    $(this).find('img:first-of-type').hide()
                    $(this).find('img:last-of-type').show()
                    $(this).find('span').css("visibility", "visible")
                    x.css({
                        "background": "#eee",
                        "color": "#333"
                    })
                    $(this).find('img:last-of-type').next().append('<audio autoplay><source src="audio/Correct.mp3"></audio>')
                    setTimeout(() => {
                        $(this).find('audio').remove()
                    }, 1000);
                }
            })
        })
        // $(window).resize(function() {
        //     if ($(window).width() < 890) {
        //         $('.container').css({
        //             'width': '90%',
        //             'margin': 'auto'
        //         })
        //     }

    // });
    // $(window).resize(function() {
    //     $('body').height($(window).heigth).css({
    //         "margin": "0",
    //         "transform": "scaleY($(window).heigth)",
    //         "height": "100%"
    //     });
    // });
});