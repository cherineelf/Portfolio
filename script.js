$(document).ready(function() {

    $('.thumbnail').hover(
      function(){
        $(this).find('.caption').slideDown(260); //.fadeIn(250)
      },
      function(){
        $(this).find('.caption').slideUp(260); //.fadeOut(205)
      }
    );
});
