$(function(){

    $('.gnb-depth1-link').on('mouseenter',function(){
        $('.gnb-depth2').delay(500).stop().fadeIn(1000);
        $('.gnb-bg').stop().animate({
            height:275
        },300);
    });

    $('.gnb-depth1-link').on('mouseleave',function(){
        $('.gnb-depth2').stop().fadeOut(30);
        $('.gnb-bg').stop().animate({
            height:0
        });
    });

    //var gnbbg = $('.gnb-bg');
    //gnbbg.animate({height: '275px', opacity: '0.8'}, "slow");
    //gnbbg.animate({height: '275px', opacity: '0.4'}, "slow");
    //gnbbg.animate({height: '275px', opacity: '0.8'}, "slow");
    //gnbbg.animate({height: '275px', opacity: '0.4'}, "slow");
    //gnbbg.animate({height: '275px', opacity: '0.8'}, "slow");
    //gnbbg.animate({height: '275px', opacity: '0.0'}, "slow");

});
