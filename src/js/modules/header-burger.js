$(document).ready(function () {
  $(".burger").click(function (event) {
    $(".header,.menu,.burger").toggleClass("active");
    $("body").toggleClass("lock");
  });

  $('.menu__link,.header__logo,.header__busket').click(function (event) {
    $(".header,.menu,.burger").removeClass('active');
    $('body').removeClass('lock');
  });
});
