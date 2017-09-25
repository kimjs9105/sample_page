/**
* Created by N_01 on 2017-07-14.
*/
$(document).on("ready",function(){
    var tab_keyboard = 9;

    var show_hidden_link = function(event){

        /*if (event.keyCody === 9) {

            var div_hidden = document.getElementsByClassName('hidden');

            //div_hidden.style.display = div_hidden.style.display == 'none' ? 'block' : 'none' ;

            alert("tabkey nob!");

        }*/

        alert("tabkey");
    }

    var jump_fn = function(){

        $('.hidden_menu_show').on('keydown', function(event){


                if (event.which === 9) {

                 var div_hidden = document.getElementsByClassName('hidden');

                 //div_hidden.style.display == 'none' ? 'block' : 'none' ;

                 alert("tabkey!!");

                 }

                //alert("tabkey nob!");

        });

    }

    jump_fn();

});//document