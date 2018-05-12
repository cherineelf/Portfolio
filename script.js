//Changement de couleur de la navbar au scroll

$(window).on('scroll', function(){
  if($(window).scrollTop()) {
    $('.navbar').addClass('black');
  }
  else {
    $('.navbar').removeClass('black');
  }
});
