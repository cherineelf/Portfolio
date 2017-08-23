// effect work project
$(document).ready(function() {

    $('.thumbnail').hover(
      function(){
        $(this).find('.caption').slideDown('slow'); //.fadeIn(250)
      },
      function(){
        $(this).find('.caption').slideUp('slow'); //.fadeOut(205)
      }
    );
});
