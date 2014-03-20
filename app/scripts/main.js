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

    function viewport() {
        var e = window, a = 'inner';
        if (!('innerWidth' in window )) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return {
            width : e[ a+'Width' ],
            height : e[ a+'Height' ]
        };
    }
    function updateVw(){

        var vw = (viewport().width/100);
        if(viewport().width < 1270){
            vw = (viewport().width/70);
        }

        if(viewport().width < 800){
            vw = (viewport().width/60);
        }


        if(vw > 16) {
            vw = 16;
        }


        if (viewport().width <= 602) {
            var freeze = parseFloat($('html').attr('style').match(/[+-]?\d+\.\d+/g)) || 13;
            vw = freeze + 0.1;
        }

        jQuery('html').css({
            'font-size' : vw + 'px'
        });
    }


    jQuery(window).resize(function(){
        updateVw();
    }).trigger('resize');

});