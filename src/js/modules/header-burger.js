$(document).ready(function () {
  $(".burger").click(function (event) {
    $(".header,.menu-header,.burger").toggleClass("active");
    $("body").toggleClass("lock");
  });

  $('.menu__link,.header__logo,.header__busket').click(function (event) {
    $(".header,.menu-header,.burger").removeClass('active');
    $('body').removeClass('lock');
  });
});
