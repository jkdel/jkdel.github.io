$(function() {
    $('.banner-text-content').css({
        'position' : 'absolute',
        'top' : '50%',
        'margin-top' : -$('.banner-text-content').outerHeight()/2
    });
});

$(document).ready(function() {
    var head = document.getElementsByTagName('head')[0],style = document.createElement('style');
    style.type = 'text/css';
    style.styleSheet.cssText = ':before,:after{content:none !important;}';
    head.appendChild(style);
    setTimeout(function(){
      head.removeChild(style);
    }, 0);
});