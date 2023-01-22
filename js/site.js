$(window).on('load', function(){
    $('#status').fadeOut();
    $('#preloader').delay(250).fadeOut();
})

$(function (){
    $('.home-inner img:gt(0)').hide();
    setInterval(function (){
        $('.home-inner :first-child').fadeOut().next('img').fadeIn().end().appendTo('.home-inner');
    }, 4000);
})