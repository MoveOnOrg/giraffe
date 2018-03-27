$('.input-block textarea, .input-block select, .input-block input').focus(function() {
  $(this).parents('.input-block:first').addClass('active');
});
$('.input-block textarea, .input-block select, .input-block input').blur(function() {
  $(this).parents('.input-block:first').removeClass('active');
});
