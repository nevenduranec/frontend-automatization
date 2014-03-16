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

    });


});