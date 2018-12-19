module.exports = (function(){
  $('.section-advantages__btn .btn').click(function() {
    $('.section-advantages__list').toggleClass('active');
    $(this).toggleClass('active');
  });

})();