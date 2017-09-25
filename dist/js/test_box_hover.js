/**
 * Created by N_01 on 2017-07-19.
 */
function startApp(){

    let $test_box = $('.test_box'),
        $hover_span = $('.hov_span');

    $test_box.on('mouseenter',function(){

        let self = $(this),
            $box_top = self.offset().top,
            $box_left = self.offset().left,
            $box_bottom = $box_top + 300,
            $box_right = $box_left + 300;

            console.log("top : "+$box_top);
            console.log("left : "+$box_left);
            console.log("bottom : "+$box_bottom);
            console.log("right : "+$box_right);

        $(document).mousemove(function(e){
            
            if($box_top < e.pageX < $box_bottom){

                $hover_span.animate({top: 0, left: 0}, 1000)

            }
            


        })

    });

    
        
    // alert('hi')
};

document.addEventListener("DOMContentLoaded", function() {
  startApp();
});