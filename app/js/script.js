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


});
