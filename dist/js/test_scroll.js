$(function(){

    var $fir = $('#topBox'),
        fir_fir = $fir.children('div').eq(0),
        fir_sec = $fir.children('div').eq(1),
        fir_thi = $fir.children('div').eq(2),
        $mid = $('#midBox'),
        mid_fir = $mid.children('div').eq(0),
        mid_sec = $mid.children('div').eq(1),
        mid_thi = $mid.children('div').eq(2),
        $last = $('#botBox'),
        last_fir = $last.children('div').eq(0),
        last_sec = $last.children('div').eq(1),
        last_thi = $last.children('div').eq(2);

    fir_fir.delay(300).animate({opacity: 1, left: 50}, 500);
    fir_sec.delay(600).animate({opacity: 1, left: 600}, 500);
    fir_thi.delay(900).animate({opacity: 1, left: 1150}, 500);
    
    
    $(window).scroll(function(){

        var height = $(document).scrollTop();

        if(height >= 300){
            
            $mid.stop().animate({opacity: 1}, 500);
            mid_fir.delay(300).animate({opacity: 1, top: 50}, 500);
            mid_sec.delay(600).animate({opacity: 1, top: 50}, 500);
            mid_thi.delay(900).animate({opacity: 1, top: 50}, 500);
            
        }
        
        if(height >= 1000){
            
            $last.stop().animate({opacity: 1}, 500);
            last_fir.delay(300).animate({opacity: 1}, 500);
            last_sec.delay(600).animate({opacity: 1}, 500);
            last_thi.delay(900).animate({opacity: 1}, 500);
            
        }

    });
    
    var height = $(document).scrollTop();
    
    if(height >= 300){
            
        $mid.stop().animate({opacity: 1}, 500);
        mid_fir.stop().animate({opacity: 1}, 500);
        mid_sec.stop().animate({opacity: 1}, 500);
        mid_thi.stop().animate({opacity: 1}, 500);

    }

    if(height >= 1000){

        $last.stop().animate({opacity: 1}, 500);
        last_fir.stop().animate({opacity: 1}, 500);
        last_sec.stop().animate({opacity: 1}, 500);
        last_thi.stop().animate({opacity: 1}, 500);

    }
});