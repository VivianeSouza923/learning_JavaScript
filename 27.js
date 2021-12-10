// Gravando mensagens - aula 27

$(function() {
    $('#azul').click(function() {
        $('p').css("background-color", "blue");
        $('p').fadeOut();
        $('p').delay(1000);
        $('p').fadeIn();
    });
    $('#vermelho').click(function() {
        $('p').css("background-color", "red");
        $('#mensagem').text("Cor alterada com sucesso");
        $('#mensagem').css('color', 'red');
        $('#mensagem').css('border', '1px solid red');
        $('#mensagem').fadeOut(3000);
    });

});