'use strict';

$(document).ready(function() {


    $.fn.fullpage({
        scrollingSpeed: 500
    });


    $(document).bind('keydown', function(e){

        var code = (e.keyCode ? e.keyCode : e.which);

        if(code === 32) {
            $.fn.fullpage.moveSectionDown();
        }

    });

    $(document).bind('slideReady', function(){

        $('.section').removeClass('go-anim');
        $('.section.active').addClass('go-anim');


        var path = $('.go-anim.demoTime path');
        if(path.size()){
            var len = path[0].getTotalLength(path[0]);
            $(path).animate({
                'stroke-dashoffset': (9999 - len) + 'px'
            },{
                    duration: 800,
                    easing: 'linear',
                    complete: function(){
                        $(this).animate({'fill-opacity': 0.9}, 200);
                    }
                });
        }


    });


});