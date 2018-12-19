module.exports = (function(){
  let accordion = function () {
    $('.footer__trigger').click(function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).siblings('.footer__list').hide(300).removeClass('active');
      } else {
        $('.footer__trigger').removeClass('active');
        $('.footer__list').hide(300).removeClass('active');

        $(this).addClass('active');
        $(this).siblings('.footer__list').fadeIn(500).addClass('active');
      }
    });
  };
  if ($(window).width() < 1200) {
    accordion();
  }
  $(window).resize(function () {
    if ($(window).width() < 1200) {
      accordion();
    }
  });
})();