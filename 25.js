// efeito fade - aula 25

$(function() {
    $('#azul').click(function() {
        $('p').css("background-color", "blue");
        $('p').fadeOut();
    });
    $('#vermelho').click(function() {
        $('p').css("background-color", "red");
        $('p').fadeOut('slow');
        $('p').delay(3000);
        $('p').fadeIn('slow');

    });

});