if ($('#map').length > 0) {
  var map = new Map()
  map.init({
    selector: '#map',
    center: $('.concreate-adress').html(),
    zoom: 16,
    placemarks: [
      {
        address: $('.concreate-adress').html(),
        options: [
          { key: 'draggable', value: false },
          { key: 'iconLayout', value: 'default#image' },
          {
            key: 'iconImageHref',
            value: '/theme/portal-donbassa/img/icons/map-marker-icon.png'
          }
        ],
        properties: [
          {
            key: 'balloonContentHeader',
            value: $('.map-placemarks-title').html()
          }
        ]
      }
    ]
  })
}

$(document).ready(function () {
  /*hamburger*/
  var windowWidth = $(window).width()

  $('.toggle_mnu').click(function () {
    $('.toggle_mnu .sandwich').toggleClass('active')
  })

  if (windowWidth < 769) {
    $('.header-menu ul a').click(function () {
      $('.header-menu').fadeOut(600)
      $('.sandwich').toggleClass('active').append('<span>')
    })

    $('.toggle_mnu').click(function () {
      if ($('.header-menu').is(':visible')) {
        $('.header-menu').fadeOut(600)
        $('.header-menu ul li a').removeClass('fadeInUp animated')
      } else {
        $('.header-menu').fadeIn(600)
        $('.header-menu li a').addClass('fadeInUp animated')
      }
    })
  }
  $('.header-menu__sub_button').click(function () {
    if ($('.header-menu__sub_list').is(':visible')) {
      $('.header-menu__sub_list').fadeOut(600)
      $('.header-menu__sub_list li a').removeClass('fadeInUp animated')
    } else {
      $('.header-menu__sub_list').fadeIn(600)
      $('.header-menu__sub_list li a').addClass('fadeInUp animated')
    }
  })
  /*hamburger*/

  /*hamburger-news*/
  $('.toggle_mnu__rubrick').click(function () {
    if ($('#dotscustom').is(':visible')) {
      $('#dotscustom').fadeOut(600)
      $('#dotscustom').attr('style', 'display: none !important')
    } else {
      $('#dotscustom').fadeIn(600)
      $('#dotscustom').attr('style', 'display: block !important')
    }
  })

  $('.toggle_mnu__rubrick').click(function () {
    $('.toggle_mnu__rubrick .sandwich').toggleClass('active')
  })
  /*hamburger-news*/

  /*show authorize submenu*/
  $(document).on('click', '#authorized-user-profile', function (event) {
    event.preventDefault()
    var submenu = $(this).closest('form').find('.currency-panel__submenu')
    /*console.log( submenu );*/
    /*if($(this).hasClass('show')){
         $(this).removeClass('show');
         submenu.slideUp('500');
         } else {
         $(this).addClass('show');
         submenu.slideDown('500');
         }*/
    $(this).toggleClass('show')
    submenu.slideToggle()
    return false
  })
  $(document).on('click', function (e) {
    if ($(e.target).closest('#authorized-user-profile').length != 1) {
      $('.currency-panel__submenu').slideUp('500')
      $('#authorized-user-profile').removeClass('show')
    }
  })
  /*close show authorize submenu*/

  $('.home-content__wrap_slider').owlCarousel({
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
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 1,
        nav: true,
        loop: true
      },
      1200: {
        items: 1,
        nav: true,
        loop: true
      }
    }
  })

  $('.rubrick-slider__wrap').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText: true,
    navigation: true,
    pagination: true,
    items: 1,
    dotsContainer: '#dotscustom',
    singleItem: false,
    mouseDrag: false,
    touchDrag: false,
    responsiveClass: true
  })

  /*afisha top slider*/
  $('.afisha-top-slider__wrap').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    navText: true,
    navigation: true,
    /*navigationText: true,*/
    pagination: true,
    autoplay: true,
    autoplayTimeout: 9000,
    items: 3,
    dots: true,
    singleItem: false,
    mouseDrag: false,
    touchDrag: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2,
        nav: true
      },
      1000: {
        items: 3,
        nav: true,
        loop: true
      },
      1200: {
        items: 3,
        nav: true,
        loop: true
      }
    }
  })
  /*close afisha top slider*/

  /*company-home slider*/
  $('.company-slider__box').owlCarousel({
    loop: true,
    margin: 25,
    nav: true,
    navText: true,
    navigation: true,
    /*navigationText: true,*/
    pagination: true,
    autoplay: false,
    autoplayTimeout: 9000,
    items: 1,
    dots: true,
    singleItem: false,
    mouseDrag: false,
    touchDrag: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 1,
        nav: true,
        loop: true
      },
      1200: {
        items: 1,
        nav: true,
        loop: true
      }
    }
  })
  /*company-home top slider*/

  var carousel1 = '.js-carousel-1'
  var carousel2 = '.js-carousel-2'
  var carousel3 = '.js-carousel-3'
  var carousel4 = '.js-carousel-4'

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
    singleItem: false
  })
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
    singleItem: false
  })
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
    singleItem: false
  })
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
    singleItem: false
  })

  $('.customNextBtn').click(function () {
    owlCarousel1.trigger('next.owl.carousel')
    owlCarousel2.trigger('next.owl.carousel')
    owlCarousel3.trigger('next.owl.carousel')
    owlCarousel4.trigger('next.owl.carousel')
    return false
  })
  $('.customPrevBtn').click(function () {
    owlCarousel1.trigger('prev.owl.carousel', [300])
    owlCarousel2.trigger('prev.owl.carousel', [300])
    owlCarousel3.trigger('prev.owl.carousel', [300])
    owlCarousel4.trigger('prev.owl.carousel', [300])
    return false
  })

  /*afisha*/
  $('.fancybox').fancybox({
    prevEffect: 'fade',
    nextEffect: 'fade',
    closeBtn: true,
    arrows: true,
    nextClick: true,
    helpers: {
      thumbs: {
        width: 40,
        height: 40
      }
    }
  })
  /*afisha*/

  // hover stoke
  // $(".mouse-area").mouseover(function () {
  //
  //     var visible = $(this).parent();
  //     if (visible.hasClass("hover")) {
  //         visible.removeClass("hover").animate({left: '0'}, 500);
  //     }
  //     else {
  //         $(".stock__item_visible").removeClass("hover").animate({left: '0'}, 500);
  //         visible.addClass("hover").animate({left: '-291px'}, 500);
  //     }
  // });
  /*$(".stock__item_visible").click(function (e) {
     e.preventDefault();
     $(".stock__item_visible").removeClass('stock__item_visible_left').animate({left: '0'}, 100);
     $(this).addClass('stock__item_visible_left').animate({left: '-291px'}, 100);
     });
     $(".stock__item_close").click(function (e) {

     $(".stock__item_visible").removeClass('stock__item_visible_left').animate({left: '0'}, 100);

     });*/
  // hover stoke

  /*show ads block on mobile*/
  $(document).on('click', '.ads__trigger', function () {
    event.preventDefault()
    var box = $(this).next('.ads__box'),
      link = $(this).parent().find('.more')

    if (box.hasClass('open')) {
      box.removeClass('open').slideUp('fast')
      link.css({ display: 'none' })
    } else {
      box.addClass('open').slideDown('fast')
      link.css({ display: 'block' })
    }
  })
  /*close ads block on mobile*/

  /*show photo block on mobile*/
  $(document).on('click', '.photo__trigger', function (e) {
    event.preventDefault()
    var box = $('.photo__box')
    box.slideToggle('slow')
  })
  /*close photo block on mobile*/

  /*send message modal*/
  $(document).on('click', '.footer__send', function () {
    $('#overlay').fadeIn(400, function () {
      $('.modal-send').css('display', 'block').animate({ opacity: 1 }, 200)
    })
    return false
  })
  $(document).on('click', '.modal-send__close, #overlay', function () {
    $('.modal-send').animate({ opacity: 0 }, 200, function () {
      $(this).css('display', 'none')
      $('#overlay').fadeOut(400)
    })
  })

  /*send message modal validation*/
  /*var validMassage = new Validation();
     validMassage.init({
     classItem: 'valid',
     eventElement: '#send-message-submit'
     });*/
  /*close send message modal validation*/
  /*close send message modal*/

  /*callback modal*/
  $(document).on('click', '#callback', function () {
    event.preventDefault()
    $('#black-overlay').fadeIn(400, function () {
      $('#modal-callback').css('display', 'block').animate({ opacity: 1 }, 200)
    })
  })
  $(document).on('click', '#black-overlay', function () {
    $('#modal-callback').animate({ opacity: 0 }, 200, function () {
      $(this).css('display', 'none')
      $('#black-overlay').fadeOut(400)
    })
  })
  /*close callback modal*/

  /*send message modal*/
  $(document).on('click', '#send-message', function () {
    event.preventDefault()
    $('#black-overlay').fadeIn(400, function () {
      $('#modal-send-message')
        .css('display', 'block')
        .animate({ opacity: 1 }, 200)
    })
  })
  $(document).on('click', '#black-overlay', function () {
    $('#modal-send-message').animate({ opacity: 0 }, 200, function () {
      $(this).css('display', 'none')
      $('#black-overlay').fadeOut(400)
    })
  })
  /*close message modal*/

  /*modal about error*/
  $(document).on('click', '#send-error-message', function () {
    $('#black-overlay').fadeIn(400, function () {
      $('#error-message').css('display', 'block').animate({ opacity: 1 }, 200)
    })
    return false
  })
  $(document).on('click', '#black-overlay', function () {
    $('#error-message').animate({ opacity: 0 }, 200, function () {
      $(this).css('display', 'none')
      $('#black-overlay').fadeOut(400)
    })
  })
  /*close modal about error*/

  /*open modal order delivery*/
  $(document).on('click', '#order-delivery', function () {
    event.preventDefault()
    $('#black-overlay').fadeIn(400, function () {
      $('#modal-order-delivery')
        .css('display', 'block')
        .animate({ opacity: 1 }, 200)
    })
  })
  $(document).on('click', '#black-overlay', function () {
    $('#modal-order-delivery').animate({ opacity: 0 }, 200, function () {
      $(this).css('display', 'none')
      $('#black-overlay').fadeOut(400)
    })
  })
  /*close modal order delivery*/

  /*add business review*/
  $(document).on('click', '#add-review', function (event) {
    event.preventDefault()
    $('#black-overlay').fadeIn(400, function () {
      $('#modal-review').css('display', 'block').animate({ opacity: 1 }, 200)
    })
  })
  $(document).on('click', '#black-overlay', function () {
    $('#modal-review').animate({ opacity: 0 }, 200, function () {
      $(this).css('display', 'none')
      $('#black-overlay').fadeOut(400)
    })
  })
  /* $(document).on('click', '#modal-review-submit', function (event) {
         event.preventDefault();
         $('#modal-review').animate({opacity: 0}, 200,
             function () {
                 $(this).css('display', 'none');
                 $('#modal-review-success').css('display', 'block').animate({opacity: 1}, 200);
             }
         );
     });*/
  $(document).on('click', '#black-overlay', function () {
    $('#modal-review-success').animate({ opacity: 0 }, 200, function () {
      $(this).css('display', 'none')
      $('#black-overlay').fadeOut(400)
    })
  })
  /*close add business review*/

  /*open modal order delivery*/
  $(document).on('click', '.add-comment, .ask', function () {
    $('#black-overlay').fadeIn(400, function () {
      $('#modal-add-comment')
        .css('display', 'block')
        .animate({ opacity: 1 }, 200)
    })
    return false
  })
  $(document).on('click', '#black-overlay', function () {
    $('#modal-add-comment').animate({ opacity: 0 }, 200, function () {
      $(this).css('display', 'none')
      $('#black-overlay').fadeOut(400)
    })
  })
  /*close modal order delivery*/

  /*open company modal*/
  $(document).on('click', '.show-company-modal', function () {
    event.preventDefault()
    $('#black-overlay').fadeIn(400, function () {
      $('#modal-company-rew')
        .css('display', 'block')
        .animate({ opacity: 1 }, 200)
    })
  })
  $(document).on('click', '#black-overlay', function () {
    $('#modal-company-rew').animate({ opacity: 0 }, 200, function () {
      $(this).css('display', 'none')
      $('#black-overlay').fadeOut(400)
    })
  })
  /*close*/

  /*open modal faq*/
  /*$(document).on('click', '.ask', function () {
        event.preventDefault();
        $('#black-overlay').fadeIn(400,
            function () {
                $('#modal-faq').css('display', 'block').animate({opacity: 1}, 200);
            });
    });
    $(document).on('click', '#black-overlay', function () {
        $('#modal-faq').animate({opacity: 0}, 200,
            function () {
                $(this).css('display', 'none');
                $('#black-overlay').fadeOut(400);
            }
        );
    });*/
  /*close modal faq*/

  /* open tabs*/
  $('.page__tabs_target').click(function (event) {
    $('.page__tabs_targett').removeClass('page__tabs_active')
    $(this).addClass('page__tabs_active')
    event.preventDefault()
    var target = $(this).data('tab')
    $('.page__tabcontent').hide()
    $('.' + target).show()
  })
  /* close tabs */

  /* komunalka */
  $('.komunalka__item').hover(function (e) {
    e.preventDefault()
    $('.komunalka__item').removeClass('komunalka__line_active')
    $(this).addClass('komunalka__line_active')
  })
  /* komunalka */

  /*show header input field*/
  $(document).on('click', '.search-input', function (e) {
    e.preventDefault()
    if ($(this).hasClass('search_input_acive')) {
      $(this).removeClass('search_input_acive', { duration: 1000 })
      if (window.innerWidth < 992) {
        $('.header-ipanel .select').css({
          width: '107px',
          overflow: 'visible',
          'min-width': '15%',
          transition: '.5s ease'
        })
      }
    } else {
      $(this).addClass('search_input_acive', { duration: 1000 })
      if (window.innerWidth < 992) {
        $('.header-ipanel .select').css({
          width: '0',
          overflow: 'hidden',
          'min-width': '0',
          transition: '.5s ease'
        })
      }
    }
  })
  /*close show header input field*/

  /*show social links on main page*/
  $(document).on('click', '.open-soc', function (event) {
    event.preventDefault()
    var prev = $(this).prev('.hide-social')
    if ($(this).hasClass('open')) {
      $(this).removeClass('open')
      prev.hide()
    } else {
      $('.open-soc').removeClass('open')
      $('.hide-social').hide()
      $(this).addClass('open')
      prev.css({ display: 'flex' })
    }
  })
  // $(document).on('click', '.open-soc', function (event) {
  //     event.preventDefault();
  //     $(this).next('.open-soc').hide();
  // $(this).next('.hide-social').show();
  // });
  /*close show social links on main page*/

  /*datapicker*/
  $(document).on('click', '.datepicker-wrap', function () {
    $('.datepicker-inline').slideToggle()
  })
  $('.datepicker-wrap').datepicker({
    inline: false,
    onShow: function (dp, animationCompleted) {
      if (!animationCompleted) {
        log('start showing')
      } else {
        log('finished showing')
      }
    },
    onHide: function (dp, animationCompleted) {
      if (!animationCompleted) {
        log('start hiding')
      } else {
        log('finished hiding')
      }
    },
    onSelect: function () {
      $('.datepicker-inline').slideToggle()
    }
  })
  /*datapicker*/

  /* scroll fixed socials */
  if (window.innerWidth > 770) {
    $('#aside').hcSticky()
  }

  /*consultants tabs*/
  jQuery('.page__tabs_target').click(function (e) {
    jQuery('.page__tabs_target').removeClass('page__tabs_active')
    jQuery(this).addClass('page__tabs_active')
    jQuery('.consultants__aside_item').removeClass('current')
    jQuery('.consultants__main_item').removeClass('current')
    e.preventDefault()
    var t = jQuery(this).attr('data-tab')
    var t1 = jQuery(this).attr('data-tab-main')
    jQuery('.consultants__aside_item').fadeOut(500),
      jQuery('#' + t)
        .addClass('current')
        .fadeIn(500)
    jQuery('.consultants__main_item').fadeOut(500),
      jQuery('#' + t1)
        .addClass('current')
        .fadeIn(500)
  })
  /*consultants tabs*/

  $('ul.tabs__caption').each(function () {
    $(this)
      .find('li')
      .each(function (i) {
        $(this).click(function () {
          $(this)
            .addClass('active')
            .siblings()
            .removeClass('active')
            .closest('div.tabs')
            .find('div.tabs__content')
            .removeClass('active')
            .eq(i)
            .addClass('active')
        })
      })
  })

  $('.consultation-slider').owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    smartSpeed: 500,
    navText: [
      '<img src="/theme/portal-donbassa/img/icons/arrow-left.png" >',
      '<img src="/theme/portal-donbassa/img/icons/arrow-right.png" >'
    ],
    responsiveClass: true,
    pagination: true,
    items: 4,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      660: {
        items: 1,
        nav: false
      },
      768: {
        items: 3,
        margin: 28
      },
      980: {
        items: 4,
        margin: 12
      }
    }
  })

  /*consulting accordion menu*/
  /* $(document).on('click', '.accordion-menu a', function (event) {
     event.preventDefault();
     var list = $(this).next('ul');
     if(list.hasClass('open')){
     list.removeClass('open').slideUp('400');
     } else {
     list.addClass('open').slideDown('400');
     }
     });*/
  /*close consulting accordion menu*/

  $('.accordion-menu ul li a').on('click', function (event) {
    event.preventDefault()
    if ($(this).hasClass('section') || $(this).next('ul').length == 0) {
      location.href = $(this).attr('href')
      // $(this).next("ul").toggleClass("up-child");
    } else {
      $(this).next('ul').toggleClass('up-child')
    }
  })

  /*weather slider*/
  var whetherSlider = $('.home-content__sidebar_weather__slider')
  whetherSlider.owlCarousel({
    loop: true,
    nav: true,
    margin: 0,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      660: {
        items: 1
      },
      770: {
        items: 1
      },
      960: {
        items: 1
      },
      1200: {
        items: 1
      }
    }
  })
  /*close weather slider*/

  /*business owl.slider*/
  var businessSlider = $('.business__photos')
  businessSlider.owlCarousel({
    loop: false,
    nav: true,
    margin: 0,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      660: {
        items: 4
      },
      770: {
        items: 4
      },
      960: {
        items: 5
      },
      1200: {
        items: 6
      }
    }
  })
  businessSlider.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY > 0) {
      businessSlider.trigger('next.owl')
    } else {
      businessSlider.trigger('prev.owl')
    }
    e.preventDefault()
  })
  /*close businnes owl.slider*/

  /*business sidebar script*/
  /*$('.business__sidebar--items ul li a').on('click', function (event) {
     event.preventDefault();
     if ($(this)[0].hasAttribute('data-id')) {
     var dataId = $(this).attr('data-id'),
     mainBlock = $('#business-sidebar-main'),
     hoverBlock = $('#business-sidebar-hover-' + dataId);
     if (hoverBlock.length > 0) {
     mainBlock.animate({width: "toggle"}, 400, function () {
     hoverBlock.animate({width: "toggle"}, 400, function () {
     hoverBlock.css({height: "auto"});
     });
     });
     }
     }
     });
     $('.business__sidebar--hover-trigger').on('click', function (event) {
     event.preventDefault();
     var mainBlock = $('#business-sidebar-main'),
     hoverBlock = $(this).closest('.business__sidebar--hover-items');
     /!*console.log(hoverBlock);*!/
     hoverBlock.animate({width: "toggle"}, 400, function () {
     mainBlock.animate({width: "toggle"}, 400, function () {
     mainBlock.css({height: "auto"});
     });
     });
     });*/
  /*close business sidebar script*/

  var businessElement = $('#business-sidebar')
  if (businessElement.length > 0) {
    var businessElementPosition = businessElement.offset().top
    $(window).scroll(function () {
      fixedScroll(businessElement, businessElementPosition, $('.footer'))
    })
  }
  /*business sidebar scroll*/
  if (businessElement.length > 0) {
    $(window).scroll(function () {
      fixedScroll(businessElement, businessElementPosition, $('.what-say'))
    })
  }
  /*close business sidebar scroll*/

  //promotion

  var /*promotionElement = $('#promotion-sidebar'),*/
    shopReviewsSidebar = $('#shop-reviews-sidebar'),
    shopCartSidebar = $('#shop-sidebar-cart')

  // if ($(window).width() > 992) {
  //   if (promotionElement.length > 0) {
  //      var promotionElementPosition = promotionElement.offset().top;
  //      $(window).scroll(function () {
  //          fixedScroll(promotionElement, promotionElementPosition, $('.footer'));
  //      });
  //  }
  // }

  if (shopReviewsSidebar.length > 0) {
    var shopReviewsPosition = shopReviewsSidebar.offset().top
    $(window).scroll(function () {
      fixedScrollReviews(
        shopReviewsSidebar,
        shopReviewsPosition,
        $('.view-more-reviews')
      )
    })
  }

  if (shopCartSidebar.length > 0) {
    var shopCartSidebarPosition = shopCartSidebar.offset().top
    $(window).scroll(function () {
      fixedScroll(shopCartSidebar, shopCartSidebarPosition, $('.footer'))
    })
  }
  /*single business sidebar scroll*/
  // var stockElement = $('#business-stock-sidebar');
  // if (stockElement.length > 0) {
  // var stockElementPosition = stockElement.offset().top;
  // $(window).scroll(function () {
  // fixedScroll(stockElement, stockElementPosition, $('.footer'));
  // });
  // }

  /* close single business sidebar scroll

        social sidebar scroll
    // var socialElement = $('.social-wrapper');
    // if (socialElement.length > 0) {
    //     var socialElementPosition = socialElement.offset().top;
    //     $(window).scroll(function () {
    //         fixedScroll(socialElement, socialElementPosition, $('.footer'));
    //     });
    // }
        close social sidebar scroll*/

  /*parser sidebar scroll*/
  var parserElement = $('#parser-sidebar')
  if (parserElement.length > 0) {
    var parserElementPosition = parserElement.offset().top
    $(window).scroll(function () {
      fixedScroll(parserElement, parserElementPosition, $('.footer'))
    })
  }
  /*close single business sidebar scroll*/

  /*show business reviews*/
  $(document).on('click', '.business__reviews--item .links__more', function () {
    event.preventDefault()
    var revBlock = $(this)
      .closest('.business__reviews--item')
      .find('.descr p:last-of-type')
    if (revBlock.hasClass('full')) {
      revBlock.removeClass('full')
      $(this).text('Скрыть отзыв')
    } else {
      revBlock.addClass('full')
      $(this).text('Читать весь отзыв')
    }
  })
  /*close business reviews*/

  /*business item businessScroll*/
  $(document).on('click', '.businessScroll', function (event) {
    /*функция прокрутки на блок страницы при клике по элементам меню */ event.preventDefault()
    var href = $(this).attr('href')
    var target = $(href)
    var top = target.offset().top
    $('html,body').animate({ scrollTop: top }, 1000)
    return false
  })
  /*close business item businessScroll*/

  /*business pkg tabs*/
  $('.business__tab-content--wrapper').each(function (i) {
    if (i != 0) {
      $(this).hide(0)
    }
  })
  // $(document).on('click', '.business__tab-links a', function (e) {
  //     e.preventDefault();
  //     var tabId = $(this).attr('href');
  //     $('.business__tab-links a').removeClass('active');
  //     $(this).addClass('active');
  //     $('.business__tab-content--wrapper').hide(0);
  //     $(tabId).fadeIn();
  // });
  /*close business pkg tabs*/

  /*single business goods tabs*/
  $('.business__goods-content--wrapper').each(function (i) {
    if (i != 0) {
      $(this).hide(0)
    }
  })
  $(document).on('click', '.business__goods-tabs a', function (e) {
    e.preventDefault()
    var tabId = $(this).attr('href')
    $('.business__goods-tabs a').removeClass('active')
    $(this).addClass('active')
    $('.business__goods-content--wrapper').hide(0)
    $(tabId).fadeIn()
  })
  /*close single business goods tabs*/

  /*add business review*/
  $(document).on('click', '#add-review', function (event) {
    event.preventDefault()
    var revTextarea = $(this).next('.business__form')
    if (revTextarea.hasClass('open')) {
      revTextarea.removeClass('open').slideUp('fast')
    } else {
      revTextarea.addClass('open').slideDown('fast')
    }
  })
  /*close add business review*/

  /*modal delivery second step show*/
  $(document).on(
    'click',
    '.modal-callback__first-step .show-more',
    function (event) {
      event.preventDefault()
      var first = $('#modal-order-delivery').find(
          '.modal-callback__first-step'
        ),
        second = $('#modal-order-delivery').find('.modal-callback__second-step')

      first.slideUp('500')
      second.slideDown('500')
    }
  )
  $(document).on('click', '.modal-callback__trigger', function (event) {
    event.preventDefault()
    var textarea = $(this).next('.modal-callback__textarea')
    if ($(this).hasClass('open')) {
      $(this).removeClass('open')
      textarea.slideUp('500')
    } else {
      $('.modal-callback__trigger').removeClass('open')
      $('.modal-callback__textarea').slideUp('500')
      $(this).addClass('open')
      textarea.slideDown('500')
    }
  })
  /*close modal delivery second step show*/

  /*add form fields user cabinet companys*/

  //закоментировал 22.03.2018

  // $(document).on('click', '.cabinet__add-company-form--wrapper .cabinet__add-field', function (event) {
  //     event.preventDefault();
  //     var wrapper = $(this).closest('.cabinet__add-company-form--wrapper').next('.cabinet__add-company-form--hover-wrapper'),//влок в который добовляются поля
  //         // addedBox = $(this).closest('.cabinet__add-company-form').find('.cabinet__add-company-form--wrapper').html(),//элементы, которые добавляются
  //         count = wrapper.attr('data-count'),//счетчик
  //         maxCount = parseInt($(this).attr('max-count'));//максимальное количество полей
  //     /*console.log( maxCount );*/
  //     /* console.log( addedBox );*/
  //     if (count < maxCount) { //условие
  //         $(this).closest('.cabinet__add-company-form--wrapper').next('.cabinet__add-company-form--hover-wrapper').attr('data-count', parseInt(count) + 1);//увеличиваем счетчик на 1
  //         $(wrapper).append('<div class="cabinet__add-company-form--hover-elements">' +
  //             '<p class="cabinet__add-company-form--title"></p>' +
  //             '<input class="cabinet__add-company-form--field" type="text" name="mytext[]">' +
  //             '<a href="#" class="cabinet__remove-pkg"></a>' +
  //             '<p class="cabinet__add-company-form--notice"></p>' +
  //             '</div>');//добавляем поля
  //     }
  //
  // });

  // end закоментировал 22.03.2018

  /*$(document).on('click', '.cabinet__add-company-form--hover-wrapper .cabinet__remove-pkg', function (event) {
     event.preventDefault();
     var wrapper = $(this).closest('.cabinet__add-company-form--hover-wrapper'),//влок в который добовляются поля
     addedBox = $(this).closest('.cabinet__add-company-form--hover-elements'),//элементы, которые добавляются
     count = wrapper.attr('data-count');//счетчик
     addedBox.remove();
     wrapper.attr('data-count', parseInt(count) - 1);//увеличиваем счетчик на 1
     });*/
  /*close form fields user cabinet companys*/

  /*add form fields in user cabinet*/
  /*$(document).on('click', '.cabinet__add-company-form--wrapper .cabinet__add-pkg', function (event) {
     event.preventDefault();
     /!* console.log( 111 );*!/
     var wrapper = $(this).closest('.cabinet__add-company-form--wrapper').next('.cabinet__add-company-form--hover-wrapper'),//влок в который добовляются поля
     // addedBox = $(this).closest('.cabinet__add-company-form').find('.cabinet__add-company-form--wrapper').html(),//элементы, которые добавляются
     count = wrapper.attr('data-count');//счетчик

     /!* console.log( addedBox );*!/
     if (count < 5) { //условие на максимум 10 полей
     $(this).closest('.cabinet__add-company-form--wrapper').next('.cabinet__add-company-form--hover-wrapper').attr('data-count', parseInt(count) + 1);//увеличиваем счетчик на 1
     $(wrapper).append('<div class="cabinet__add-company-form--hover-elements">' +
     '<p class="cabinet__add-company-form--title">Категория</p>' +
     '<select class="cabinet__add-company-form--field" name="" id="form-select">' +
     '<option value="1"></option>' +
     '<option value="2"></option>' +
     '<option value="3"></option>' +
     '<option value="4"></option>' +
     '<option value="5"></option>' +
     '</select>' +
     '<a href="#" class="cabinet__remove-pkg"></a>' /!*+
     '<p class="cabinet__add-company-form--notice"></p>'*!/ +
     '</div>');//добавляем поля
     }

     });*/

  //Закоментировал 22.03.2018

  // $(document).on('click', '.cabinet__add-company-form--hover-wrapper .cabinet__remove-pkg', function (event) {
  //     event.preventDefault();
  //     removeField($(this));
  // });
  /*close add form fields in user cabinet*/

  //Закоментировал 22.03.2018

  /*show cabinet menu*/
  $(document).on('click', '.cabinet__wrapper > h1', function () {
    if (window.innerWidth < 600) {
      var cabinetMenu = $(this).closest('.cabinet').find('.cabinet__nav')
      console.log(cabinetMenu)
      if ($(this).hasClass('open')) {
        $(this).removeClass('open')
        cabinetMenu.removeClass('open')
      } else {
        $(this).addClass('open')
        cabinetMenu.addClass('open')
      }
    }
  })
  $(document).on('click', function (e) {
    if ($(e.target).closest('#authorized-user-profile').length != 1) {
      $('.currency-panel__submenu').slideUp('500')
      $('#authorized-user-profile').removeClass('show')
    }
  })
  /*close show cabinet menu*/

  /*show mobile cabinet toolbar*/
  $(document).on('click', '#cabinet--mobile-trigger', function (event) {
    event.preventDefault()
    var tollbar = $('.cabinet__tollbar')
    if ($(this).hasClass('show')) {
      $(this).removeClass('show')
      tollbar.removeClass('show')
    } else {
      $(this).addClass('show')
      tollbar.addClass('show')
      /*$('#black-overlay').fadeIn(400);*/
    }
    /*if(window.innerWidth < 661){
         $(document).on('click', function (e) {
         if ($(e.target).closest('.cabinet__tollbar').length != 1) {
         $('.cabinet__tollbar').removeClass('show');
         $('#cabinet--mobile-trigger').removeClass('show');
         }
         });
         } */
  })
  /*close mobile cabinet toolbar*/

  /*show cabinet tariff description*/
  $(document).on('click', '.cabinet__packages--about', function (event) {
    event.preventDefault()
    var target = $(this).attr('href'),
      targetBlock = $(target),
      top = $('.cabinet__packages--notification').offset().top
    /*console.log( top );*/

    if ($(this).hasClass('open')) {
      targetBlock.slideUp()
      $(this).removeClass('open')
    } else {
      $('.cabinet__packages--about').removeClass('open')
      $('.cabinet__packages--hover-block').slideUp()
      targetBlock.slideDown()
      $(this).addClass('open')
      if ($('.cabinet__packages--notification').length > 0) {
        $('html, body').animate({ scrollTop: top }, 'slow')
      }
    }
  })
  /*close script*/

  /*search form option select*/
  $(document).on('click', '.js-search-option ', function (event) {
    event.preventDefault()
    var optionBox = $(this).next('.search-panel__result--option')
    if ($(this).hasClass('open')) {
      $(this).removeClass('open')
      optionBox.slideUp('400')
    } else {
      $(this).addClass('open')
      optionBox.slideDown('400')
    }
  })
  $(document).on(
    'click',
    '.search-panel__result--option > a',
    function (event) {
      /*  event.preventDefault();*/
      var optionName = $(this).text(),
        optionPlace = $(this)
          .closest('.search-panel__result')
          .find('.js-search-option')
      optionPlace.text(optionName) //меняем имя
      $('.js-search-option').removeClass('open')
      $('.search-panel__result--option').slideUp('400')
    }
  )

  /*close search form option select*/

  /*go to top scroll*/
  $.fn.scrollToTop = function () {
    $(this).hide().removeAttr('href')
    if ($(window).scrollTop() >= '250') $(this).fadeIn('slow')
    var scrollDiv = $(this)
    $(window).scroll(function () {
      if ($(window).scrollTop() <= '250') {
        $(scrollDiv).fadeOut('slow')
      } else {
        $(scrollDiv).fadeIn('slow')
      }
    })
    $(this).click(function () {
      $('html, body').animate({ scrollTop: 0 }, 'slow')
    })
  }
  $('#Go_Top').scrollToTop()
  /*close go to top scroll*/

  /*show upload img prev in cabinet*/
  $('#news-photo').change(function () {
    readURL(this)
  })
  /*close show upload img prev in cabinet*/

  /*show parser text*/
  /*$(document).on('click', '.parser__element--more', function () {
        event.preventDefault();
        var text = $(this).prev('.parser__element--descr');

        if (text.length > 0) {
            $(this).hide();
            text.removeClass('parser__element--descr').addClass('parser__element--text-show');
        }
    });*/
  $(document).on('click', '.parser__element--tools > .comments', function () {
    event.preventDefault()
    var comments = $(this).closest('.parser__element--tools').next()
    $(this).toggleClass('show-comments')
    comments.slideToggle()
    return false
  })
  /*close*/

  /*parser container*/

  /*close*/

  /*show shop toolbar menu*/

  /*close*/

  /*show fixed right toolbar*/
  $(document).on('click', '.fix-button__trigger', function () {
    var rigthToolbar = $(this).parent()
    if ($(this).hasClass('open-fix-toolbar')) {
      $(this).removeClass('open-fix-toolbar')
      rigthToolbar.removeClass('show-fix-menu')
    } else {
      $(this).addClass('open-fix-toolbar')
      rigthToolbar.addClass('show-fix-menu')
    }
  })
  $(document).on('click', function (e) {
    if ($(e.target).closest('.fix-button').length != 1) {
      $('.fix-button').removeClass('show-fix-menu')
      $('.fix-button__trigger').removeClass('open-fix-toolbar')
    }
  })
  /*close*/

  /*commercial list scrypt*/
  $(document).on('click', '.commercial__trigger', function () {
    var list = $(this).next('.commercial__category-list')
    list.slideToggle('fast')
  })
  $(document).on('click', '.commercial__category-list li', function () {
    var listText = $(this).html(),
      listAttr = $(this).attr('data-id'),
      list = $(this).parent()

    list.slideUp('fast')
    $('.commercial__trigger .commercial__trigger--title')
      .html(listText)
      .attr('data-id', listAttr)
  })
  /*close*/

  $.fancybox.defaults.thumbs = { showOnStart: true }

  /*commercial slider*/
  if ($('.commercial__ads-slider').length > 0) {
    $('.commercial__ads-slider--single').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.commercial__ads-slider--nav'
    })
    $('.commercial__ads-slider--nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.commercial__ads-slider--single',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      vertical: true,
      arrows: false,
      verticalSwiping: true
    })
  }
  /*close*/

  /*===============Замена плейсхолдера в поиске================*/

  // var el = document.querySelector(".placeholder-xs");
  // function searchPlaceholder() {
  //
  //     if ($(window).width() <= 420) {
  //         el.placeholder = "Поиск";
  //     }
  //     else  {
  //         el.placeholder = "Поиск по объявлениям";
  //     }
  // }
  // searchPlaceholder();
  // $(window).resize(function () {
  //     searchPlaceholder();
  // });
  /*===============end замена плейсхолдера в поиске================*/

  if ($(window).width() > 992) {
    if ($('#promotion-sidebar').length > 0) {
      $('#promotion-sidebar').stickySidebar({
        topSpacing: 30,
        bottomSpacing: 30
      })
    }

    //     var businessElement = $('#promotion-sidebar');
    //     if (businessElement.length > 0) {
    //         var businessElementPosition = businessElement.offset().top;
    //         $(window).scroll(function () {
    //             fixedScroll(businessElement, businessElementPosition, $('.footer'));
    //         });
    //     }
    var businessElementS = $('#promotions-sidebar')
    if (businessElementS.length > 0) {
      var businessElementPositionS = businessElementS.offset().top
      $(window).scroll(function () {
        fixedScroll(
          businesfixedScrollsElementS,
          businessElementPositionS,
          $('.footer')
        )
      })
    }
  }
})

//последний закомментированный скрипт

/*fixed div function*/
function fixedScroll(element, elementPosition, blockElement) {
  //функция фиксированного блока, с селекторами элемента, его позиционирования и преграждающего блока
  var top = $(document).scrollTop(),
    blockingElement = blockElement.offset().top - 30,
    height = element.outerHeight() //высота элемента, включающая внутренние и внешние отступы
  console.log(blockingElement)
  if (window.innerWidth > 1200) {
    if (top > elementPosition && top < blockingElement - height) {
      element.addClass('fixed').removeClass('absolute')
    } else if (top > blockingElement - height) {
      element
        .addClass('absolute')
        .removeClass(
          'fixed'
        ) /*.css({'position': 'absolute', 'bottom': '50px', 'right': '0'})*/
    } else {
      element.removeClass('fixed')
    }
  }
}
function fixedScrollReviews(element, elementPosition, blockElement) {
  //функция фиксированного блока, с селекторами элемента, его позиционирования и преграждающего блока
  var top = $(document).scrollTop(),
    blockingElement = blockElement.offset().top,
    height = element.outerHeight() //высота элемента, включающая внутренние и внешние отступы
  if (window.innerWidth > 1200) {
    if (top > elementPosition && top < blockingElement - height) {
      element.addClass('fixed-reviews').removeClass('absolute-reviews')
    } else if (top > blockingElement - height) {
      element
        .removeClass('fixed-reviews')
        .addClass(
          'absolute-reviews'
        ) /*.css({'position': 'absolute', 'bottom': '50px', 'right': '0'})*/
    } else {
      element.removeClass('fixed-reviews')
    }
  }
}

/*close fixed div function*/

/*set anonymous profile in div*/
function anonymRecall() {
  var box = $('.modal-account-rew__selector').find('.button__item'), //переменная для профиля
    boxAnon = $('.modal-account-rew__selector').find('.button__anon-item'), //переменная для ананимного профиля
    profileName = $('.modal-account-rew__selector')
      .find('.button__name')
      .text(),
    colors = ['#A2ACF7 ', '#F8CB00 ', '#99D7F5 ']

  var firstSymbol = profileName[0], //находим первый символ в массиве
    anonymousName = firstSymbol //добовляем его в имя анонимного пользователя

  for (
    var i = 1;
    i < profileName.length;
    i++ //циклом идем по строке с именем пользователя начиная со второго символа
  ) {
    anonymousName += '*' //добавляем со второго символа звездочку
  }

  if ($('#anonymousRecall:checked').length === 0) {
    //если чекбокс не отмечен
    box.show() //показываем профиль
    boxAnon.hide().find('.button__anon-name').text('') //
    $('.modal-account-rew__selector').find('.button__anon-symbol').text('')
  } else {
    //если отмечен
    var color = colors[Math.floor(Math.random() * colors.length)]
    box.hide()
    boxAnon.find('.button__anon-avatar').css('background-color', color)
    $('.js-review-anon-avatar').attr('data-color', color)
    boxAnon.show().find('.button__anon-name').text(anonymousName)
    $('.modal-account-rew__selector')
      .find('.button__anon-symbol')
      .text(firstSymbol)
  }
}

/*close set anonymous profile in div*/

/*show img prew*/
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader()

    reader.onload = function (e) {
      $('#blah').attr('src', e.target.result)
    }

    reader.readAsDataURL(input.files[0])
  }
}

/*close function*/

/*remove field*/
function removeField(selector) {
  var wrapper = selector.closest('.cabinet__add-company-form--hover-wrapper'), //влок в который добовляются поля
    addedBox = selector.closest('.cabinet__add-company-form--hover-elements'), //элементы, которые добавляются
    count = wrapper.attr('data-count') //счетчик
  addedBox.remove()
  wrapper.attr('data-count', parseInt(count) - 1) //увеличиваем счетчик на 1
}

/*close function*/
//scroll header fixed

// $(window).scroll(function () {
//     if ($(this).scrollTop() >= $(this).height()) {
//         $('.header').addClass('scrolled');
//     } else {
//         $('.header').removeClass('scrolled');
//     }
// });

// $(document).on('click', '.subscribe-scroll', function (event) {
//     event.preventDefault();
//     var href = $(this).attr('href');
//     var target = $(href);
//     var top = target.offset().top;
//
//     $('html,body').animate({scrollTop: top}, 1000);
//     return false;
// });

//Фиксированная шапка для телефонов и планшетов (создаеться клон оригинальной шапки)!======================
var options = {
  offset: 46
}
var header = new Headhesive('.header', options)
//end Фиксированная шапка для телефонов и планшетов (создаеться клон оригинальной шапки)!======================

//Скрип заменяет тег 'h1' в продублированной шапке на тег 'a' (SEO) !======================
$('.headhesive .header-logo').replaceWith(function (index, oldHTML) {
  return $("<a href='/' class='header-logo'>").html(oldHTML)
})
//Конец Скрип заменяет тег 'h1' в продублированной шапке на тег 'a' (SEO) !======================

//currency cehcked

$(function () {
  $('.check-item>span').hide()
  $('#subcat li').click(function () {
    $(this).find('span:last').toggle()
  })
})

/*=================================================================
/  header second menu
==================================================================*/
$('.owl-header-second-menu').owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  navigation: true,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
  ],
  pagination: true,
  items: 6
})

/*=================================================================
/close  header second menu
==================================================================*/

/*=================================================================
/ header second mobile menu
==================================================================*/
window.onload = function () {
  $('.button-second-menu a').click(function () {
    $('.mobile-second-menu').slideToggle('slide', function () {
      $('.lvl-1').fadeIn()
    })
  })

  $('.mobile-menu-broad').click(function () {
    $('.shop__sidebars').toggleClass('active-menu')
  })
  $('.single-shop__desires').click(function () {
    $(this).toggleClass('active')
    return false
  })
  $('.mobile-menu-broad-close').click(function () {
    $('.shop__sidebars').removeClass('active-menu')
  })

  var itemID,
    activeMenuParent,
    i = 1,
    backBtnAttr,
    parentMenu,
    parentElement

  //переход на следующий уровень
  function transition(thisItem) {
    // находим айдишник пункта меню на который нам надо переключиться
    itemID = $(thisItem).attr('data-id')
    // находим его родителя и записываем его айдишник в атрибут кнопки
    activeMenuParent = $(thisItem).parents('.lvl-' + i++)
    $('.back-btn').attr('data-active', activeMenuParent.attr('data-parent-id'))
    // показываем нужное меню и прячем текущее
    $(itemID).fadeIn(100)
    $(thisItem).parents('.menu').fadeOut(100)
    // по умолчанию кнопка спрятана
    if ($('.back-btn').attr('data-active') !== 1) {
      $('.back-btn').fadeIn(100)
    }
  }

  function back(backBtn, maxMenuLevel) {
    // получаем айдишник меню, которое на уровень выше
    backBtnAttr = $(backBtn).attr('data-active')
    // прячем все менюшки и показываем нужную
    $('.menu').fadeOut(100)
    $(backBtnAttr).fadeIn(100)
    // проверка уровня меню. если уровень меню выше первого, то понижаем, если равен или на один меньше, то вычитаем 2 уровня (это для последнего уровня меню), иначе - указываем, что это первый уровень, присваиваем атрибуту кнопки 1 и прячем её
    if (i > 1) {
      i--
    } else if (i === maxMenuLevel || i === maxMenuLevel - 1) {
      i = i - 2
    } else {
      i = 1
      $(backBtn).attr('data-active', '1')
      $(backBtn).fadeOut(100)
    }
    // находим кнопку с айдишником в кнопке в меню на уровень выше
    parentMenu = $('[data-id="' + backBtnAttr + '"]')
    // получаем меню, в которое нам нужно вернуться
    parentElement = parentMenu.parents('.menu').attr('data-parent-id')
    // присваиваем кнопке в атрибут айдишник кнопки
    $(backBtn).attr('data-active', parentElement)
  }

  // навигация по менюшкам
  $(document).on('click', '.menu-btn', function () {
    transition($(this))
  })

  // кнопка возврата. вторым аргументом передаём количество уровней меню. в данном случае 4
  $(document).on('click', '.back-btn', function () {
    back($(this), '3')
  })

  $(document).on('click', '.header-close', function () {
    var backBtn = $('.back-btn')
    i = 1
    $('.mobile-second-menu').fadeOut()
    backBtn.attr('data-active', 1)
    backBtn.hide()
    $('[data-parent-id]').hide()
  })

  // var headerMenuClose = document.querySelector('.mobile-second-menu .header-close');
  // var secondHeaderMenu = document.querySelector('.mobile-second-menu');
  // if (headerMenuClose !== null) {
  //     headerMenuClose.onclick = function () {
  //         secondHeaderMenu.style.display = 'none';
  //         $('.header-m-arrow').hide();
  //     };
  // }
  // $(document).on('click', '.mobile-menu-lvl-1 li', function () {
  //
  //     var id = $(this).attr('data-menu-id'),
  //         menuLv2 = $('.mobile-menu-lvl-2[data-menu-id="' + id + '"]'),
  //         parentClass = $(this).parent()[0].className,
  //         parentId = $(this).parent().attr('data-menu-id');
  //     $('.header-m-arrow').attr('data-ParentClass', parentClass);
  //     $('.header-m-arrow').attr('data-ParentId', parentId);
  //     console.log(parentClass);
  //     if ($.trim(menuLv2.html()).length) {
  //         menuLv2.css({
  //             display: 'flex'
  //         });
  //         $('.header-m-arrow').css('display', 'flex');
  //         $('.mobile-menu-lvl-1').fadeOut('fast');
  //         return false;
  //     } else {
  //     }
  // });
  // $(document).on('click', '.mobile-menu-lvl-2 li', function () {
  //     var id = $(this).attr('data-menu-id');
  //     var menuLv3 = $('.mobile-menu-lvl-3[data-menu-id="' + id + '"]'),
  //         parentClass = $(this).parent()[0].className,
  //         parentId = $(this).parent().attr('data-menu-id');
  //     $('.header-m-arrow').attr('data-ParentClass', parentClass);
  //     $('.header-m-arrow').attr('data-ParentId', parentId);
  //     if ($.trim(menuLv3.html()).length) {
  //         menuLv3.css({
  //             display: 'flex'
  //         });
  //         $('.header-m-arrow').css('display', 'flex');
  //         $('.mobile-menu-lvl-2').fadeOut('fast');
  //         return false;
  //     } else {
  //     }
  // });
  // var flag = true;
  // $(document).on('click', '.header-m-arrow', function () {
  //     var _class = $(this).attr('data-ParentClass'),
  //         _id = $(this).attr('data-ParentId');
  //     flag = false;
  //
  //     var menu = $('[class = ' + '"' + _class + '"][data-menu-id=' + '"' + _id + '"]');
  //     if (menu.hasClass('mobile-menu-lvl-2') && !flag) {
  //         _id = 1;
  //         _class = 'mobile-menu-lvl-1';
  //         menu = $('[class = ' + '"' + _class + '"][data-menu-id=' + '"' + _id + '"]');
  //
  //
  //     }
  //
  //
  //     menu.fadeIn('fast');
  // });

  if ($('section').hasClass('header-second-menu')) {
    var parentDiv = document
      .querySelector('.submenu-wrapper-yet')
      .getBoundingClientRect().right
    var children = document.querySelectorAll('.menu-lvl-2')
    for (var i = 0; i < children.length; i++) {
      if (children[i].getBoundingClientRect().right >= parentDiv) {
        children[i].style.left = '-265px'
        children[i].style.right = 'auto'
      }
    }
  } else {
  }
}

/*=================================================================
/ close header second mobile menu
==================================================================*/

/*=================================================================
/ scroll social-sidebar single news
==================================================================*/
$(window).scroll(function () {
  var top = $(document).scrollTop(),
    h = $('body').css('height')
  if (top < 649) {
    $('.social-wrapper').addClass('move')
    $('.social-wrapper').hcSticky()
  } else {
    $('.social-wrapper').hcSticky()
  }
})

/*=================================================================
/ close scroll social-sidebar single news
==================================================================*/

$(document).ready(function () {
  $('.menu-lvl-1 li').hover(
    function () {
      clearTimeout($.data(this, 'timer'))
      $('.submenu-wrapper', this).slideDown(200)
      $('.submenu-wrapper', this).css({
        visibility: 'visible',
        display: 'block'
      })
    },
    function () {
      $('.submenu-wrapper', this).slideUp(200)
      $.data(
        this,
        'timer',
        setTimeout(
          $.proxy(function () {
            $('.submenu-wrapper', this).slideUp(200)
          }),
          200
        )
      )
    }
  )

  $('.yet .submenu-wrapper-yet li').hover(function () {
    $(this).toggleClass('active-menu')
  })

  $(document).on('click', '#fix-button-head', function (event) {
    var submenu = $(this).closest('.fix-button-head').find('.list')
    /*console.log( submenu );*/
    /*if($(this).hasClass('show')){
         $(this).removeClass('show');
         submenu.slideUp('500');
         } else {
         $(this).addClass('show');
         submenu.slideDown('500');
         }*/
    $(this).toggleClass('show')
    submenu.slideToggle()
  })
  $(document).on('click', function (e) {
    if ($(e.target).closest('#fix-button-head').length != 1) {
      $('.list').slideUp('500')
      $('#fix-button-head').removeClass('show')
    }
  })

  /*=================================================================
    / folding post parsing page
    ==================================================================*/
  $(document).on('click', '.parser__close', function () {
    $('.single-parser-element').slideToggle('slow')
    $('.parser__close').toggleClass('change')
    $('.parser__close').text(function (i, text) {
      return text === 'закрыть элемент' ? 'раскрыть элемент' : 'закрыть элемент'
    })
    return false
  })
  /*=================================================================
    / close folding post parsing page
    ==================================================================*/

  /*=================================================================
    / Личный кабинет статистика компании, сворачивание блока при клике
    ==================================================================*/
  $(document).on('click', '.company-static-close', function () {
    $('.cabinet-company-statistic__body').slideToggle('slow')
    $('.company-static-close').toggleClass('change')
    $('.company-static-close').text(function (i, text) {
      return text === 'развернуть блок статистики'
        ? 'свернуть блок статистики'
        : 'развернуть блок статистики'
    })
    return false
  })
  /*=================================================================
    / end кабинет статистика компании, сворачивание блока при клике
    ==================================================================*/

  /*=================================================================
    / Исправление картинок в ie-11, edge
    ==================================================================*/

  if (!Modernizr.objectfit) {
    $('.owl-item .item').each(function () {
      var $container = $(this),
        imgUrl = $container.find('img').prop('src')
      if (imgUrl) {
        $container
          .css('backgroundImage', 'url(' + imgUrl + ')')
          .addClass('compat-object-fit')
      }
    })
  }

  if (!Modernizr.objectfit) {
    $('.item a').each(function () {
      var $container = $(this),
        imgUrl = $container.find('img').prop('src')
      if (imgUrl) {
        $container
          .css('backgroundImage', 'url(' + imgUrl + ')')
          .addClass('object-fit')
      }
    })
    $('.business__sm-item--img').each(function () {
      var $container = $(this),
        imgUrl = $container.find('img').prop('src')
      if (imgUrl) {
        $container
          .css('backgroundImage', 'url(' + imgUrl + ')')
          .addClass('object-fit')
      }
    })
    $('.item-img').each(function () {
      var $container = $(this),
        imgUrl = $container.find('img').prop('src')
      if (imgUrl) {
        $container
          .css('backgroundImage', 'url(' + imgUrl + ')')
          .addClass('object-fit')
      }
    })
    $('.thumbnail-wrapper').each(function () {
      var $container = $(this),
        imgUrl = $container.find('img').prop('src')
      if (imgUrl) {
        $container
          .css('backgroundImage', 'url(' + imgUrl + ')')
          .addClass('object-fit')
      }
    })
    $('.thumb').each(function () {
      var $container = $(this),
        imgUrl = $container.find('img').prop('src')
      if (imgUrl) {
        $container
          .css('backgroundImage', 'url(' + imgUrl + ')')
          .addClass('compat-object-fit')
      }
    })
    $('.average-ad-item-thumb').each(function () {
      var $container = $(this),
        imgUrl = $container.find('img').prop('src')
      if (imgUrl) {
        $container
          .css('backgroundImage', 'url(' + imgUrl + ')')
          .addClass('object-fit')
      }
    })
    $('.slide-link').each(function () {
      var $container = $(this),
        imgUrl = $container.find('img').prop('src')
      if (imgUrl) {
        $container
          .css('backgroundImage', 'url(' + imgUrl + ')')
          .addClass('object-fit')
      }
    })
    $('.slick-slide').each(function () {
      var $container = $(this),
        imgUrl = $container.find('img').prop('src')
      if (imgUrl) {
        $container
          .css('backgroundImage', 'url(' + imgUrl + ')')
          .addClass('object-fit')
      }
    })
    $('.recommended .img a').each(function () {
      var $container = $(this),
        imgUrl = $container.find('img').prop('src')
      if (imgUrl) {
        $container
          .css('backgroundImage', 'url(' + imgUrl + ')')
          .addClass('object-fit')
      }
    })
    $('.stock__sm-item--img').each(function () {
      var $container = $(this),
        imgUrl = $container.find('img').prop('src')
      if (imgUrl) {
        $container
          .css('backgroundImage', 'url(' + imgUrl + ')')
          .addClass('object-fit')
      }
    })
  }

  /*=================================================================
   / end Исправление картинок в ie-11, edge
   ==================================================================*/

  /*=================================================================
    / меню категорий для страницы магазина
    ==================================================================*/
  $('.shop__categories--list li ').hover(
    function () {
      clearTimeout($.data(this, 'timer'))
      $('.shop__categories--sub-menu', this).slideDown(0)
      $('.shop__categories--sub-menu', this).css({
        display: 'flex'
      })
    },
    function () {
      $('.shop__categories--sub-menu', this).slideUp(0)
      $.data(
        this,
        'timer',
        setTimeout(
          $.proxy(function () {
            $('.shop__categories--sub-menu', this).slideUp(0)
          }),
          0
        )
      )
    }
  )

  $('.shop__categories--list li').hover(function () {
    $(this).toggleClass('active-link')
  })
  /*=================================================================
    / end меню категорий для страницы магазина
    ==================================================================*/

  /*=================================================================
    / Выпадающий селект с датами, для страницы всех акций
    ==================================================================*/
  $('.all-actions__select').on('click', '.init', function () {
    $(this)
      .closest('.all-actions__select')
      .children('li:not(.init)')
      .slideToggle()
  })

  var allOptions = $('.all-actions__select').children('li:not(.init)')

  $('.all-actions__select').on('click', 'li:not(.init)', function () {
    allOptions.removeClass('selected')
    $(this).addClass('selected')
    $('.all-actions__select').children('.init').html($(this).html())
    allOptions.slideUp()
  })

  $('.all-actions__select .input-date input').bind('click', function () {
    return false
  })

  $('.all-actions__select').click(function () {
    $(this).toggleClass('select-init')
  })
  $('.all-actions__select .input-group.date').datepicker({
    format: 'dd.mm.yyyy'
  })
  $('.action-flt-btn').click(function () {
    alert(
      'The selected Value is ' +
        $('.all-actions__select').find('.selected').data('value')
    )
  })
  /*=================================================================
   /  end Выпадающий селект с датами, для страницы всех акций
   ==================================================================*/

  /*=================================================================
   /   страница одного товара (Магазин)
   ==================================================================*/

  //Ретинг звездочек на странице одного товара
  $('.stars li')
    .on('mouseover', function () {
      var onStar = parseInt($(this).data('value'), 10)

      $(this)
        .parent()
        .children('li.star')
        .each(function (e) {
          if (e < onStar) {
            $(this).addClass('hover')
          } else {
            $(this).removeClass('hover')
          }
        })
    })
    .on('mouseout', function () {
      $(this)
        .parent()
        .children('li.star')
        .each(function (e) {
          $(this).removeClass('hover')
        })
    })
  $('.stars li').on('click', function () {
    var onStar = parseInt($(this).data('value'), 10)
    var stars = $(this).parent().children('li.star')
    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected')
    }
    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected')
    }
    var ratingValue = parseInt($('.stars li.selected').last().data('value'), 10)
    var msg = ''
    if (ratingValue > 1) {
      msg = 'Thanks! You rated this ' + ratingValue + ' stars.'
    } else {
      msg =
        'We will improve ourselves. You rated this ' + ratingValue + ' stars.'
    }
    responseMessage(msg)
  })

  function responseMessage(msg) {
    $('.success-box').fadeIn(200)
    $('.success-box div.text-message').html('<span>' + msg + '</span>')
  }

  //end Ретинг звездочек на странице одного товара

  //Выбираем количество товаров
  $(document).on('click', '.plus', function () {
    var count = $(this).siblings('.number'),
      val = parseInt($(this).siblings('.number').val())
    if (val == 999) {
      return false
    } else {
      count.val(val + 1)
      $('.js-single-addtocart').attr('data-quantity', count.val())
      $('.js-single-favorites').attr('data-quantity', count.val())
    }
    return false
  })

  $(document).on('click', '.minus', function () {
    var count = $(this).siblings('.number')
    var counter = parseInt(count.val()) - 1
    counter = counter < 1 ? 1 : counter
    count.val(counter)
    count.change()
    $('.js-single-addtocart').attr('data-quantity', counter)
    $('.js-single-favorites').attr('data-quantity', counter)
    return false
  })
  // end Выбираем коли
  // чество товаров

  // слайдер товаров
  if ($('div').hasClass('single-shop__gallery')) {
    $('.single-shop__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      draggable: false,
      asNavFor: '.single-shop__slider-nav'
    })
    $('.single-shop__slider-nav').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: '.single-shop__slider',
      dots: false,
      centerPadding: '10px',
      arrows: false,
      vertical: true,
      centerMode: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 660,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        }
      ]
    })
  }
  // end слайдер товаров

  // инициализация табов
  $('.single-shop__tabs').lightTabs()
  //end инициализация табов

  //фиксация левого сайдбара при скролле
  var promotionElement = $('#store-info')
  if (promotionElement.length > 0) {
    var promotionElementPosition = promotionElement.offset().top
    $(window).scroll(function () {
      fixedScroll(promotionElement, promotionElementPosition, $('.footer'))
    })
  }
  //end фиксация левого сайдбара при скролле

  //owl-carousel для секции другие товары, планшет и телефон
  // if (window.innerWidth < 992) {
  //     $('.single-shop-carousel').slick({
  //         dots: false,
  //         infinite: true,
  //         speed: 300,
  //         slidesToShow: 4,
  //         slidesToScroll: 4,
  //         prevArrow: $('.prev'),
  //         nextArrow: $('.next'),
  //         responsive: [
  //             {
  //                 breakpoint: 992,
  //                 settings: {
  //                     slidesToShow: 4,
  //                     slidesToScroll: 1
  //                 }
  //             },
  //             {
  //                 breakpoint: 700,
  //                 settings: {
  //                     slidesToShow: 3,
  //                     slidesToScroll: 1
  //                 }
  //             },
  //             {
  //                 breakpoint: 600,
  //                 settings: {
  //                     slidesToShow: 2,
  //                     slidesToScroll: 1,
  //                     margin: 5
  //                 }
  //             }
  //         ]
  //     });
  // }

  //end owl-carousel для секции другие товары

  /*=================================================================
    / end  страница одного товара (Магазин)
    ==================================================================*/

  $(document).on('click', '.broad-more', function () {
    $('.shop-hidden', this).slideToggle('slow')
    $('.slide-text', this).toggleClass('active')
    $('.slide-text', this).text(function (i, text) {
      return text === 'eщё' ? 'скрыть' : 'eщё'
    })
    return false
  })

  $(document).on('click', '#shop-toolbar-trigger', function () {
    $('.broad-category__sidebar').toggleClass('active')
    if ($(this).hasClass('show-trigger')) {
      $(this).removeClass('show-trigger')
    } else {
      $(this).addClass('show-trigger')
    }
  })

  $(document).on('click', ' #add-review-promotions', function (event) {
    event.preventDefault()
    $('#black-overlay').fadeIn(400, function () {
      $('#modal-review-promotions')
        .css('display', 'block')
        .animate({ opacity: 1 }, 200)
    })
  })
  $(document).on('click', '#black-overlay', function () {
    $('#modal-review-promotions').animate({ opacity: 0 }, 200, function () {
      $(this).css('display', 'none')
      $('#black-overlay').fadeOut(400)
    })
  })

  $('.business__company-price .heart').click(function () {
    $(this).toggleClass('like')
    return false
  })

  $('a#add-cart-btn').click(function (event) {
    event.preventDefault()
    $('#black-overlay').fadeIn(400, function () {
      $('#modal-add-cart')
        .css('display', 'block')
        .animate({ opacity: 1, top: '50%' }, 200)
    })
  })

  $('#modal_close, #black-overlay').click(function () {
    $('#modal-add-cart').animate({ opacity: 0, top: '45%' }, 200, function () {
      $(this).css('display', 'none')
      $('#black-overlay').fadeOut(400)
    })
  })

  $(document).on('click', '.home-content-item', function (e) {
    e.preventDefault()
    var id = $(this).attr('data-id')
    if ($(this).hasClass('visible-text-about')) {
      $(this)
        .parent()
        .find($('.text-about[data-id=' + id + ']'))
        .slideUp()
      $(this).removeClass('visible-text-about')
    } else {
      $('.home-content-item').removeClass('visible-text-about')
      $(this).addClass('visible-text-about')
      $('.text-about').slideUp()
      $(this)
        .parent()
        .find($('.text-about[data-id=' + id + ']'))
        .slideDown()
    }
  })

  // Модальное окно для обратной связи в одно компании

  $('a.feedback-btn').click(function (event) {
    event.preventDefault()
    $('#black-overlay').fadeIn(400, function () {
      $('#feedback-modal')
        .css('display', 'block')
        .animate({ opacity: 1, top: '50%' }, 200)
    })
  })

  $('#black-overlay').click(function () {
    $('#feedback-modal').animate({ opacity: 0, top: '45%' }, 200, function () {
      $(this).css('display', 'none')
      $('#overlay').fadeOut(400)
    })
  })

  $(document).on('click', '.form-delivery-link', function () {
    $('.form-delivery-container').slideToggle('fast')
    return false
  })

  //*-------------------------------------------------------------------------------------------------
  // Сворачивание разворачивание фильтров на странице с фильтрами категорий магазин + активный чекбокс
  // ------------------------------------------------------------------------------------------------*/
  $(document).on('click', '.shop__filter-title', function () {
    $(this).toggleClass('active')
  })

  $('.shop__filter-list label').change(function () {
    $(this).toggleClass('active')
  })
  //*-------------------------------------------------------------------------------------------------
  // end Сворачивание разворачивание фильтров на странице с фильтрами категорий магазин + активный чекбокс
  // ------------------------------------------------------------------------------------------------*/

  // $(window).scroll(function () {
  //     var headerHeight = $('.header').innerHeight();
  //     var contentHeight = $('.business__content').innerHeight();
  //     var sidebarHeight = $('.promotions-sidebar').height();
  //     var sidebarBottomPos = contentHeight - sidebarHeight;
  //     var trigger = $(window).scrollTop() - headerHeight;

  //     if ($(window).scrollTop() >= headerHeight) {
  //         $('.promotions-sidebar').addClass('fixed');
  //     } else {
  //         $('.promotions-sidebar').removeClass('fixed');
  //     }

  //     if (trigger >= sidebarBottomPos) {
  //         $('.promotions-sidebar').addClass('absolute');
  //     } else {
  //         $('.promotions-sidebar').removeClass('absolute');
  //     }
  // });

  var listHTML = document.querySelector('.jsShopCategories').innerHTML
  var changeBtnText = document.querySelector('.jsChangeText')

  document
    .querySelector('.jsChangeShopCategories')
    .addEventListener('click', function (e) {
      $.ajax({
        url: 'https://da-info.pro/api/sima/category',
        method: 'GET',
        xhrFields: {
          withCredentials: false
        },
        success: function (value) {
          var obj = JSON.parse(value)
          var objThis = ''
          var liTemplate = ''
          var list = document.querySelector('.jsShopCategories')
          if (list.classList.contains('shopFlag')) {
            changeBtnText.innerHTML = 'Категории магазинов ДНР'
            list.innerHTML = ''
            list.innerHTML = listHTML
            list.classList.remove('shopFlag')
          } else {
            changeBtnText.innerHTML = 'Вернуть категории'
            list.innerHTML = ''
            for (var i = 0; i < obj.length; i++) {
              objThis = obj[i]

              if (objThis.subCat.length > 0) {
                liTemplate +=
                  '<li><a href="/shop/' +
                  objThis.full_slug +
                  '">' +
                  objThis.name +
                  '</a>' +
                  '<div class="shop__categories--sub-menu" style="display: none; width: 250px; right: -250px; height: 100%; overflow-y: auto;"><div class="column-sub-menu" style="width: 100%;">'

                for (var j = 0; j < objThis.subCat.length; j++) {
                  liTemplate +=
                    '<a class="column-sub-menu__title" href="/shop/' +
                    objThis.subCat[j].full_slug +
                    '">' +
                    objThis.subCat[j].name +
                    '</a>'
                  if (objThis.subCat.length - 1 === j)
                    liTemplate += '</div></div></li>'
                }
              } else {
                liTemplate +=
                  '<li><a href=""/shop/' +
                  objThis.full_slug +
                  '">' +
                  objThis.name +
                  '</a></li>'
              }
            }
            list.innerHTML = liTemplate
            list.classList.add('shopFlag')
          }
          $('.shop__categories--list li ').hover(
            function () {
              clearTimeout($.data(this, 'timer'))
              $('.shop__categories--sub-menu', this).slideDown(0)
              $('.shop__categories--sub-menu', this).css({
                display: 'flex'
              })
            },
            function () {
              $('.shop__categories--sub-menu', this).slideUp(0)
              $.data(
                this,
                'timer',
                setTimeout(
                  $.proxy(function () {
                    $('.shop__categories--sub-menu', this).slideUp(0)
                  }),
                  0
                )
              )
            }
          )

          $('.shop__categories--list li').hover(function () {
            $(this).toggleClass('active-link')
          })
        }
      })
    })

  var listHTMLmob = document.querySelector('.jsShopCategoriesMob').innerHTML
  var changeBtnTextMob = document.querySelector('.jsChangeTextMob')

  document
    .querySelector('.jsChangeShopCategoriesMob')
    .addEventListener('click', function (e) {
      $.ajax({
        url: 'https://da-info.pro/api/sima/category',
        method: 'GET',
        xhrFields: {
          withCredentials: false
        },
        success: function (value) {
          var obj = JSON.parse(value)
          var liTemplateMob = ''
          var listMob = document.querySelector('.jsShopCategoriesMob')
          if (listMob.classList.contains('shopFlagMob')) {
            changeBtnTextMob.innerHTML = 'Категории магазинов ДНР'
            listMob.innerHTML = ''
            listMob.innerHTML = listHTMLmob
            listMob.classList.remove('shopFlagMob')
          } else {
            changeBtnTextMob.innerHTML = 'Вернуть категории'
            listMob.innerHTML = ''
            for (var i = 0; i < obj.length; i++) {
              liTemplateMob +=
                '<li class="btn-lvl-1"><a href=""/shop/' +
                obj[i].full_slug +
                '"><img src="">' +
                obj[i].name +
                '</a></li>'
            }
            listMob.innerHTML =
              '<ul class="mobile-menu-lvl-1 lvl-1 menu">' +
              liTemplateMob +
              '</ul>'
            listMob.classList.add('shopFlagMob')
          }
        }
      })
    })
})
