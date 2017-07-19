$(function() {

                                    /***** Common scripts *****/

    //SVG Fallback
    //if(!Modernizr.svg) {
    //    $("img[src*='svg']").attr("src", function() {
    //        return $(this).attr("src").replace(".svg", ".png");
    //    });
    //};

                                 /* E-mail Ajax Send */

    //Documentation & Example: https://github.com/agragregra/uniMail
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

                             /* E-mail Ajax Send example */

    //$("form.callback").submit(function() { //Change
    //    var th = $(this);
    //    $.ajax({
    //        type: "POST",
    //        url: "/mail.php", //Change
    //        data: th.serialize()
    //    }).done(function() {
    //        $(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn(); // alert("Thank you!");
    //        setTimeout(function() {
    //            $(th).find('.success').removeClass('active').fadeOut();// Done Functions
    //            th.trigger("reset");
    //        }, 3000);
    //    });
    //    return false;
    //});

                                /* Chrome Smooth Scroll */
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {

    };

                                /* Prevent Drag for a, img */

    $("img, a").on("dragstart", function(event) { event.preventDefault(); });


                                /* Scroll page to top */

    $(window).scroll(function () {
        if ($(this).scrollTop() > $(this).height()) {
            $('.top').addClass('active');
        } else {
            $('.top').removeClass('active');
        }
    });

    $('.top').click(function () {
        $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
    });


                                    /* Preloader */

    $(window).on('load', function () {
        $('.preloader').delay(1000).fadeOut('slow');
    });

                            /***** Aditional scripts *****/

                                    /* Mmenu */

    //var $menu = $('#my-menu').mmenu({
    //    extensions: [ 'theme-black', 'effect-menu-slide', 'pagedim-black' ],    // 'widescreen' -don"t work
    //    navbar: {
    //        title: '<img src="img/logo.svg" alt="Салон красоты Смитлер">'
    //    },
    //    offCanvas: {
    //        position: 'right'
    //    }
    //});

                                  /* Humburgers */

    //var $humburger = $(".hamburger");
    //var API = $menu.data( "mmenu" );
    //
    //$humburger.on( "click", function() {
    //    API.open();
    //});
    //
    //API.bind( "open:finish", function() {
    //    setTimeout(function() {
    //        $humburger.addClass( "is-active" );
    //    }, 100);
    //});
    //API.bind( "close:finish", function() {
    //    setTimeout(function() {
    //        $humburger.removeClass( "is-active" );
    //    }, 100);
    //});




        /* Owl-carousel (если карусель заружена, сделать блоки одинаковой высоты) */

    //$('.carousel-services').on('initialized.owl.carousel', function () {
    //    setTimeout(function () {
    //        carouselService()
    //    }, 100);
    //});

    //Owl-carousel

    //$('.carousel-services').owlCarousel({
    //    loop: true,
    //    nav: true,
    //    smartSpeed: 700,
    //    navText: ['<i class="fa fa-angle-double-left">', '<i class="fa fa-angle-double-right">'],
    //    responsiveClass: true,
    //    dots: false,
    //    responsive: {
    //        0: {
    //            items: 1
    //        },
    //        800: {
    //            items: 2
    //        },
    //        1100: {
    //            items: 3
    //        }
    //    }
    //});


                    /* Blocks the same height for owl-carousel for images */

    //function carouselService() {
    //    $('.carousel-services__item').each(function () {
    //        var ths = $(this),
    //            thsh = ths.find('.carousel-services__content').outerHeight();
    //        ths.find('.carousel-services__image').css('min-height', thsh);
    //    });
    //}carouselService();


                            /* Add last/first span for cms */

    //$('.carousel-services__composition .carousel-services__header').each(function () {
    //    var ths = $(this);
    //    ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>')); // выделяет последнее слово в span
    //});
    //
    //
    //$('section .h2').each(function () {
    //    var ths = $(this);
    //    ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));  // выделяет первое слово в span
    //});


                                 /* Selectize */
    //$('select').selectize();


                            /* Resize Window (in the end) */

    //function onResize() {
    //    $('.carousel-services__content').equalHeights();  // for owl-carousel,
    //}onResize();
    //window.onresize = function () {
    //    onResize()
    //};

                                 /* Superfish */


    $('.top-line .sf-menu').superfish({
        cssArrows: false
    });


});
