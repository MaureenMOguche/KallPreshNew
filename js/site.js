$(window).on('load', function(){
    $('#status').fadeOut();
    $('#preloader').fadeOut();
})

$(function (){
    $('.home-inner img:gt(0)').hide();
    setInterval(function (){
        $('.home-inner :first-child').fadeOut().next('img').fadeIn().end().appendTo('.home-inner');
    }, 4000);
})