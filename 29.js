// Declaração múltipla de CSS - aula 29

$(function() {
    $('#azul').click(function() {
        $('p').css("background-color", "blue");
        $('p').fadeOut();
        $('p').delay(1000);
        $('p').fadeIn();
    });
    $('#vermelho').click(function() {
        $('p').css("background-color", "red");
        $('#mensagem')
            .text("Cor alterada com sucesso")
            .css({
                color: 'red',
                border: '1px solid red',
                backgroundColor: '#F08080'
            })
            .delay(3000)
            .fadeOut('fast');
    });

});