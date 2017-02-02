// window.onload = function () {
//   //ищем элемент по селектору
//   var a = document.querySelector('.mouse-area');
//   //вешаем на него события
//   a.onmouseout = function(e) {
//     document.getElementByClassname('stock__item_hide').style.display='none';
//   }
//
//   a.onmouseover = function(e) {
//     document.getElementByClassname('stock__item_hide').style.display='block';
//   };
// }

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


  // hover stoke
   $(".mouse-area").mouseover(function(){

    var visible =  $(this).parent();
      if(visible.hasClass("hover")){
        visible.removeClass("hover").animate({left:'0'},400);
      }
      else{
        $(".stock__item_visible").removeClass("hover").animate({left:'0'},400);
        visible.addClass("hover").animate({left:'-261px'},400);
      }
  });
  // hover stoke
  
});
