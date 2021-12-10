// efeito Delay - aula 26

$(function() {
    $('#azul').click(function() {
        $('p').css("background-color", "blue");
        $('p').fadeOut();
    });
    $('#vermelho').click(function() {
        $('p').css("background-color", "red");
        $('p').fadeOut(3000);
        $('p').fadeIn(5000);

    });

});