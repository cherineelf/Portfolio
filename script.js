// Changing navbar color on scroll

$(window).on('scroll', function(){
  if($(window).scrollTop()) {
    $('.navbar').addClass('black');
  }
  else {
    $('.navbar').removeClass('black');
  }
});

// Smooth scrolling effect

$(document).ready(function(){
  var scrolllink = $('.scroll');

  // smooth scrolling
  scrolllink.click(function(e){
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  })
});


// button changing body color when clicked

$('.btn').click(function () {
  $('body').toggleClass('l-active');
  $('h2').toggleClass('l-active2');
});


// fading background
$(document).on("scroll", function() {
  var scrollTop = $(document).scrollTop()
  var scrollBottom = scrollTop + $(window).height()

  var pageBottom = $(document).height()

  var diff =  pageBottom - scrollBottom

  var opacity = 1 - diff / 800

  $("div.fade-bg").css("opacity", opacity)

})
