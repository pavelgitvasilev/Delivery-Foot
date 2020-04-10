$(document).ready(function () {
  const modal = $('.modal');
  const basket = $('.button__basket');
  const close = $('.modal__close')

  $(basket).click(function () {
    $(modal).addClass('modal--visible');
  });

  $(close).click(function () {
    $(modal).removeClass('modal--visible');
  });

  new WOW().init();

});