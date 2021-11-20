// aula 19 - validaçao de formulário

function valida() {
    var nome = document.getElementById('nome');

    if (nome.value == "") {
        alert("Formulário não pode estar em branco");
    } else {
        alert("Formulário pode ser enviado com sucesso")
    }
}