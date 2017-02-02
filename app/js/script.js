$(document).ready(function () {
  $(".home-content__wrap_slider").owlCarousel({
    loop: true,
    margin: 30,
    nav : true,
    navText: true,
    navigation:true,
    /*navigationText: true,*/
    pagination : true,
    items: 1,
    dots: true,
    singleItem:false,
    responsiveClass:true,
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


  /*send message modal*/
  $(document).on('click', '.footer__send', function () {
    event.preventDefault();
    $('#overlay').fadeIn(400,
        function () {
          $('.modal-send').css('display', 'block').animate({opacity: 1}, 200);
        });
  });
  $(document).on('click','.modal-send__close, #overlay',function () {
    $('.modal-send').animate({opacity: 0}, 200,
        function () {
          $(this).css('display', 'none');
          $('#overlay').fadeOut(400);
        }
    );
  });
  /*close send message modal*/

});
