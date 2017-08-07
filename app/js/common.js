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
    //$("form").submit(function() { //Change
    //    var th = $(this);
    //    $.ajax({
    //        type: "POST",
    //        url: "mail.php", //Change
    //        data: th.serialize()
    //    }).done(function() {
    //        alert("Thank you!");
    //        setTimeout(function() {
    //            // Done Functions
    //            th.trigger("reset");
    //        }, 1000);
    //    });
    //    return false;
    //});

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




                    /* Blocks the same height for owl-carousel for images */

    //function carouselService() {
    //    $('.carousel-services__item').each(function () {
    //        var ths = $(this),
    //            thsh = ths.find('.carousel-services__content').outerHeight();
    //        ths.find('.carousel-services__image').css('min-height', thsh);
    //    });
    //}carouselService();


                                /* Blocks the same height */

    //function carouselService() {
    //    var mh = 23;
    //    $('.services').each(function () {
    //        var ths = $(this),
    //            thsh = ths.find('.services__header').outerHeight();
    //        //console.log(thsh);
    //        if(thsh > mh) {
    //            mh = thsh;
    //        };
    //    });
    //
    //    $('.services__header').height(mh);
    //    //console.log($('.services__header').outerHeight());
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
        cssArrows: false,
        hoverClass: 'no-class',
        delay: 200
    });

                                /* Owl-carousel */

    var owl = $('.slider');
    owl.owlCarousel({
        loop: true,
        items: 1,
        itemClass: 'slide-wrap',
        nav: true,
        navText:'',  // if we have additional owl-nav, default owl-nav will be empty.
        dots: true,
        smartSpeed: 700
    });

    // nav for additional owl-nav
    $('.owl-nav__prev').click(function(){
        owl.trigger('prev.owl.carousel');
    });
    $('.owl-nav__next').click(function(){
        owl.trigger('next.owl.carousel');
    });

    //<section class="s-slider">
    //    <div class="container">
    //        <div class="owl-nav">
    //            <div class="owl-nav__prew"><i class="fa fa-angle-left"></i></div>
    //            <div class="owl-nav__next"><i class="fa fa-angle-right"></i></div>
    //        </div>
    //    </div>
    //    <div class="slider">
    //        <div class="slide"></div>
    //        <div class="slide"></div>
    //        <div class="slide"></div>
    //    </div>
    //</section>

                                    /* Mmenu */

    $(".mobile-mnu").after("<div id='my-menu'>");
    $(".sf-menu").clone().appendTo("#my-menu");
    $("#my-menu").find("*").attr("style", "");
    $("#my-menu").find("ul").removeClass("sf-menu");
    $("#my-menu").mmenu({
        extensions: [ 'theme-white', 'pagedim-black', 'fx-menu-slide'],    // 'widescreen' -don"t work
        navbar: {
            title: 'Меню'
        }
    });
                                /* Gamburger for menu */

    // https://codepen.io/agragregra/pen/bEbbmZ

    $(".mobile-mnu").click(function() {
        var mmApi = $("#my-menu").data( "mmenu" );
        mmApi.open();
        var thiss = $(this).find(".toggle-mnu");
        thiss.addClass("on");
        $(".main-mnu").slideToggle();
        return false;
    });

    //var api = $("#my-menu").data("mmenu");  // didn't work
    //api.bind("closed", function () {
    //    console.log('done');
    //    $(".toggle-mnu").removeClass("on");
    //});

    $(".ishome").click(function() {
        $(".toggle-mnu").removeClass("on");
    });


                                    /* equalHeights */

    $('.services__header').equalHeights();
    $('.services__text').equalHeights();

});
