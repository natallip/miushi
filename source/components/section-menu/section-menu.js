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
  $('#menu-sets').owlCarousel($options);
  $('#menu-rolls').owlCarousel($options);
  $('#menu-pizza').owlCarousel($options);
  $('#menu-woks').owlCarousel($options);
})();