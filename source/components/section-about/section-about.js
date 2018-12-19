module.exports = (function(){
  $('.section-about__btn .btn').click(function() {
    $('.section-about__text').toggleClass('active');
    $(this).toggleClass('active');
  });
})();