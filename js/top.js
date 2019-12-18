$(function() {

    $("#goTop").click(function() {

        $("html,body").animate({
            scrollTop: 0
        }, 1000);

        //$("html,body").animate({scrollTop:0},900,"easeOutBounce");

        return false;

    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $('#gotop').fadeIn("fast");
        } else {
            $('#gotop').stop().fadeOut("fast");
        }
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 655) {
        $('#nav').fadeIn("fast");
    } else {
        $('#nav').stop().fadeOut("fast");
    }
});;
$(function() {
    //control display of goTop button and motion
    $("#go1").click(function() {
        jQuery("html,body").animate({
            scrollTop: 60
        }, 1000);
    });
}, )
$(function() {
    //control display of goTop button and motion
    $("#go2").click(function() {
        jQuery("html,body").animate({
            scrollTop: 700
        }, 1000);
    });
}, )
$(function() {
    //control display of goTop button and motion
    $("#go3").click(function() {
        jQuery("html,body").animate({
            scrollTop:2450
        }, 1000);
    });
}, )
$(function() {
    //control display of goTop button and motion
    $("#go4").click(function() {
        jQuery("html,body").animate({
            scrollTop: 4800
        }, 1000);
    });
}, )




$(function() {
    //control display of goTop button and motion
    $("#tnvrgo1").click(function() {
        jQuery("html,body").animate({
            scrollTop: 1200
        }, 1000);
    });
}, )
$(function() {
    //control display of goTop button and motion
    $("#tnvrgo2").click(function() {
        jQuery("html,body").animate({
            scrollTop: 2400
        }, 1000);
    });
}, )
$(function() {
    //control display of goTop button and motion
    $("#tnvrgo3").click(function() {
        jQuery("html,body").animate({
            scrollTop: 3600
        }, 1000);
    });
}, )