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

  $('.container01').on('mousemove', function(e){

    $('.el').attr({
      cx : e.pageX,
      cy : e.pageY
    })

  });

});

$(window).on('load', function() {
  pageLoaded();
});
