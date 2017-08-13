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

// navbar effect on scroll
// $(document).ready(function(){
//    var scroll_start = 0;
//    var startchange = $('#startchange');
//    var offset = startchange.offset();
//    $(document).scroll(function() {
//       scroll_start = $(this).scrollTop();
//       if(scroll_start > offset.top) {
//           $('#navbarscroll').css('background-color', 'rgba(71,71,71, 0.3)');
//        } else {
//           $('#navbarscroll').css('background-color', 'transparent');
//        }
//    });
// });
