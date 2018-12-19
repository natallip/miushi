module.exports = (function(){
  let $options = {
    loop:true,
    responsive:{
      0:{
        center: true,
        items: 1,
        margin: 20,
        stagePadding: 52,
        dots: false,
        nav:false
      },
      768:{
        items:3,
        margin: 20,
        stagePadding: 0,
        center: false,
        nav:true,
      },
      1200:{
        items:4,
        margin: 20,
        center: false,
        nav:true,
      }
    }
  };
  $('#menu-news').owlCarousel($options);
  $('#menu-sales').owlCarousel($options);
  $('.section-news__item').click(function () {
    let $name = $(this).attr('data-name');

    $(this).addClass('active').siblings().removeClass('active');

    $('.section-news__slider').filter(function () {
      return $(this).attr('data-slider') == $name;
      }).addClass('active').siblings().removeClass('active');
    });
})();