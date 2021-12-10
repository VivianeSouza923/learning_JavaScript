// Encadeamento em bloco - aula 28

$(function() {
    $('#azul').click(function() {
        $('p').css("background-color", "blue");
        $('p').fadeOut();
        $('p').delay(1000);
        $('p').fadeIn();
    });
    $('#vermelho').click(function() {
        $('p').css("background-color", "red").text("Cor alterada com sucesso").css('color', 'red').css('border', '1px solid red').delay(3000).fadeOut('fast');
    });

});