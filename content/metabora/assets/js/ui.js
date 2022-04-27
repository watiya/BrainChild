var gnbLayerOpen = function() { 
    var scrollPos =  $(window).scrollTop();
    $('body').attr('data-scroll', scrollPos);
    $('html').addClass('no-scroll')
    $('#gnbLayer').fadeIn(300);
}
var gnbLayerClose = function(hash) { 
    var scrollPos =  $('body').attr('data-scroll');
    $('html').removeClass('no-scroll')
    if (!hash) {
        $(window).scrollTop(scrollPos)
    }
    $('#gnbLayer').fadeOut(200);
}

var newsLayerOpen = function() { 
    var scrollPos =  $(window).scrollTop();
    $('body').attr('data-scroll', scrollPos);
    $('html').addClass('no-scroll')
    $('#newsView').fadeIn(300);
}

var newsLayerClose = function() { 
    var scrollPos =  $('body').attr('data-scroll');
    $('html').removeClass('no-scroll')
    $(window).scrollTop(scrollPos)
    $('#newsView').fadeOut(200);
}


$(document).ready(function(){
    $(window).scroll(function() {
        var scroll_top = $(this).scrollTop();
        $('.header').css({left: 0 - $(this).scrollLeft()});

        if (scroll_top > 0) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });
    $(window).resize(function() {
        if (window.innerWidth > 1264) {
            $('.gnb .layer').css('display', '');
        }
    })

    $('.btn-menu').click(function(){
        var link = $(this).attr('data-hash')
        if (window.innerWidth < 1024) { 
            gnbLayerClose(link);
        } 
        $('html, body').animate({scrollTop: $('#'+link).offset().top}, 500);
        // location.hash = link
    })
    
})

