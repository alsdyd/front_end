function loadingLogo(){

  var loadingLogo = $('.loading_logo');
  var bgPosition = 0;

  var tId = setInterval(function(){

    bgPosition -= 200;

    loadingLogo.css({
      'background-position' : bgPosition
    });

    if( bgPosition <= -15800 ){
      bgPosition = 0;
    }

  }, 30);

}

function pageLoaded(){
  $('.wrap').delay(3000).fadeIn(1000);
  $('.loading_section').delay(3000).fadeOut(2000, function(){
    $(this).remove();
  });
}


$(function(){

  loadingLogo();

});

$(window).on('load', function() {
  pageLoaded();
});
