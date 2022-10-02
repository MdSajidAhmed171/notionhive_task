$(document).ready(function(){
    $('.dropdown-toggle').click(function() {
        $('.full-nav').css({
          'background-color': 'white',
          'color': '#022C3B',
        });
        $('.navbar-brand').css({
          'color': '#022C3B',
        });
        $('.nav-link').css({
          'color': '#022C3B',
        });
        $('.top_right a').css({
          'color': '#022C3B',
          'border-left': '1px solid rgba(0, 0, 0, 0.2)',
        });
        $('.phone svg').css({
          'filter': 'invert(48%) sepia(79%) saturate(276%) hue-rotate(86deg) brightness(18%) contrast(119%)'
        });
        $('.search_box svg').css({
          'filter': 'invert(48%) sepia(79%) saturate(276%) hue-rotate(86deg) brightness(18%) contrast(119%)'
        });
        $('.search_box a').css({
          'color': '#022C3B'
        });
        
        $('span').css({
          'color': '#022C3B'
        });
    });

});