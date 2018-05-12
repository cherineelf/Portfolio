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
