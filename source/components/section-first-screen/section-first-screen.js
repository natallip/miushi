module.exports = (function(){
  $('#top-slider').owlCarousel({
    loop:true,
    dots: true,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        nav:false
      },
      1600: {
        items:1,
        nav:true
      }
    }
  })
})();