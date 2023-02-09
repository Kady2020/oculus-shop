$(window).scroll(function () {
  if ($(window).scrollTop() > 80) {
    $('.header').addClass('scroll');
  }
  else {
    $('.header').removeClass('scroll');
  }
});
