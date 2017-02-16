
$(document).ready(function () {



    $(".home-content__wrap_slider").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: true,
        navigation: true,
        /*navigationText: true,*/
        pagination: true,
        items: 1,
        dots: true,
        singleItem: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 1,
                nav: true,
            },
            1000: {
                items: 1,
                nav: true,
                loop: true,
            },
            1200: {
                items: 1,
                nav: true,
                loop: true,

            }
        }
    });

    var carousel1 = '.js-carousel-1';
    var carousel2 = '.js-carousel-2';
    var carousel3 = '.js-carousel-3';
    var carousel4 = '.js-carousel-4';

// Initialize plugin
  var owlCarousel1 = $(carousel1).owlCarousel({
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    margin: 30,
    nav: true,
    navText: true,
    navigation: true,
    /*navigationText: true,*/
    pagination: true,
    items: 1,
    dots: true,
    singleItem: false,
  });
  var owlCarousel2 = $(carousel2).owlCarousel({
      loop: true,
      margin: 30,
      mouseDrag: false,
      touchDrag: false,
      nav: true,
      navText: true,
      navigation: true,
      /*navigationText: true,*/
      pagination: true,
      items: 1,
      dots: true,
      singleItem: false,
  });
  var owlCarousel3 = $(carousel3).owlCarousel({
      loop: true,
      margin: 30,
      mouseDrag: false,
      touchDrag: false,
      nav: true,
      navText: true,
      navigation: true,
      /*navigationText: true,*/
      pagination: true,
      items: 1,
      dots: true,
      singleItem: false,
  });
  var owlCarousel4 = $(carousel4).owlCarousel({
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      margin: 30,
      nav: true,
      navText: true,
      navigation: true,
      /*navigationText: true,*/
      pagination: true,
      items: 1,
      dots: true,
      singleItem: false,
  });

  $('.customNextBtn').click(function() {
      owlCarousel1.trigger('next.owl.carousel');
      owlCarousel2.trigger('next.owl.carousel');
      owlCarousel3.trigger('next.owl.carousel');
      owlCarousel4.trigger('next.owl.carousel');
      return false;
  })
  $('.customPrevBtn').click(function() {
    owlCarousel1.trigger('prev.owl.carousel', [300]);
    owlCarousel2.trigger('prev.owl.carousel', [300]);
    owlCarousel3.trigger('prev.owl.carousel', [300]);
    owlCarousel4.trigger('prev.owl.carousel', [300]);
    return false;

})





    /*afisha*/
    $('.fancybox').fancybox({
       prevEffect : 'fade',
       nextEffect : 'fade',

       closeBtn  : true,
       arrows    : true,
       nextClick : true,

       helpers : {
           thumbs : {
               width  : 40,
               height : 40

           }
       }
    });
    /*afisha*/
    // hover stoke
    $(".mouse-area").mouseover(function () {

        var visible = $(this).parent();
        if (visible.hasClass("hover")) {
            visible.removeClass("hover").animate({left: '0'}, 400);
        }
        else {
            $(".stock__item_visible").removeClass("hover").animate({left: '0'}, 400);
            visible.addClass("hover").animate({left: '-261px'}, 400);
        }
    });
    // hover stoke

    /*show ads block on mobile*/
    $(document).on('click', '.ads__trigger', function () {
        event.preventDefault();
        var box = $(this).next('.ads__box'),
            link = $(this).parent().find('.more');

        if (box.hasClass('open')) {
            box.removeClass('open').slideUp('fast');
            link.css({display: "none"});
        } else {
            box.addClass('open').slideDown('fast');
            link.css({display: "block"});
        }

    });
    /*close ads block on mobile*/

    /*show photo block on mobile*/
    $(document).on('click', '.photo__trigger', function (e) {
        event.preventDefault();
        var box = $('.photo__box');
        box.slideToggle('slow');
    });
    /*close photo block on mobile*/

    /*send message modal*/
    $(document).on('click', '.footer__send', function () {
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function () {
                $('.modal-send').css('display', 'block').animate({opacity: 1}, 200);
            });
    });
    $(document).on('click', '.modal-send__close, #overlay', function () {
        $('.modal-send').animate({opacity: 0}, 200,
            function () {
                $(this).css('display', 'none');
                $('#overlay').fadeOut(400);
            }
        );
    });

    /*send message modal validation*/
    var validMassage = new Validation();
    validMassage.init({
        classItem: 'valid',
        eventElement: '#send-message-submit'
    });
    /*close send message modal validation*/
    /*close send message modal*/

    // open tabs
    $('.page__tabs_target').click(function(event) {
    $('.page__tabs_target').removeClass('page__tabs_active');
          $(this).addClass('page__tabs_active');
          event.preventDefault();
          var target = ($(this).data('tab'));

          $('.page__tabcontent').hide();
          $("."+ target).show();
        });
        // close tabs
        $(".komunalka__item").click(function(e) {
        e.preventDefault();
        $(".komunalka__item").removeClass('komunalka__line_active');
        $(this).addClass('komunalka__line_active');
        })
    // input
    $(".search-input").click(function(e) {
      e.preventDefault();
      $(".search-input").removeClass('search_input_acive');
      $(this).addClass('search_input_acive', {duration:1000});
    })
    // input

    $('.open-soc').click(function(event) {
      // $(this).next('.hide-social').slideToggle();
      var prev = $(this).prev('.hide-social');
        $(this).siblings('.hide-social').not(prev).slideUp("slow");
        prev.slideToggle("slow");
      return false;
    });


    /* scroll fixed side-bar */

    jQuery(function () {
        jQuery(window).scroll(function () {
            var top = jQuery(document).scrollTop(),
                h = jQuery("body").css("height");
            if (top < 68) {
                jQuery("#aside").removeClass("move");

            } else {
                jQuery("#aside").addClass("move");
            }
        });
    });
});
