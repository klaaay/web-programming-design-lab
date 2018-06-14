$(document).ready(function () {
    $('.wall').hover(function () {
        $(this).css('box-shadow', '0 0 5px lightblue');
    }, function () {
        $(this).css('box-shadow', '');
    });
    $('#send').click(function (event) {
        var text;
        event.preventDefault();
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        text = $('#text-area').val();
        var $sb = $('<div>' + text + '</div>');
        $('.wall').append($sb);
        var text_height = $sb.height();
        var text_width = $sb.width();
        console.log(text_height);
        $sb
        .hover(function(){
            $(this).css('border','2px solid orange');
        },function(){
            $(this).css('border', 'none');
        })
        .css({
            position: 'absolute',
            color: 'rgb(' + r + ',' + g + ',' + b + ')',
            top:parseInt(((Math.random() * ($('.wall').height() - text_height)) + text_height),10 )
        }).animate({
            right: 0 + (($(window).width() - $('.wall').width()) / 2)
        }, 5000).fadeOut()
        $('#text-area').val('');
    })

    $('#clear').click(function(event){
        event.preventDefault();
        $('.wall').empty();
    })
});