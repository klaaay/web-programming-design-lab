$(function() {
    var $width_circle;
    var $width_rect;
    var $width_rect_mid;
    var $width_rect_small;
    $(window).ready(function() {
        $width_circle = $('.circle').width();
        $(".circle").css({
            height: $width_circle
        });
    })
    $(window).resize(function() {
        $width_circle = $('.circle').width();
        $(".circle").css({
            height: $width_circle
        });
    })

    $(window).ready(function() {
        $width_rect = $('.rect').width();
        $(".rect").css({
            height: $width_rect
        });
    })
    $(window).resize(function() {
        $width_rect = $('.rect').width();
        $(".rect").css({
            height: $width_rect
        });
    })

    $(window).ready(function() {
        $width_rect_mid = $('.mid-rect').width();
        $(".mid-rect").css({
            height: $width_rect_mid
        });
    })
    $(window).resize(function() {
        $width_rect_mid = $('.mid-rect').width();
        $(".mid-rect").css({
            height: $width_rect_mid
        });
    })
    $(window).ready(function() {
        $width_rect_small = $('.small-rect').width();
        $(".small-rect").css({
            height: $width_rect_small
        });
    })
    $(window).resize(function() {
        $width_rect_small = $('.small-rect').width();
        $(".small-rect").css({
            height: $width_rect_small
        });
    })
})