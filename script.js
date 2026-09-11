function entrar() {

    const senha = document.getElementById("senha").value;
    const erro = document.getElementById("erro");
    const telaSenha = document.getElementById("telaSenha");

    if (senha === "soso") {

        telaSenha.style.display = "none";

    } else {

        erro.textContent = "Senha incorreta... qual é seu apelido? Dica: 4 letras";

    }
}


const inicio = new Date("2026-02-13T00:00:00");

function atualizarContador() {

    const agora = new Date();

    const diferenca = agora - inicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (diferenca / (1000 * 60 * 60)) % 24
    );

    const minutos = Math.floor(
        (diferenca / (1000 * 60)) % 60
    );

    const segundos = Math.floor(
        (diferenca / 1000) % 60
    );

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

setInterval(atualizarContador, 1000);

atualizarContador();


function mostrarMensagem() {

    const mensagem = document.getElementById("mensagem");
    const surpresa = document.getElementById("surpresa");

    mensagem.textContent = "Você é o meu amor, Soane. ❤️🥰";

    surpresa.style.display = "block";

}

function mostrarAudio() {
    const audioBox = document.getElementById("audioBox");

    audioBox.style.display = "block";
}

function voltarInicio() {

    const telaSenha = document.getElementById("telaSenha");
    const senha = document.getElementById("senha");
    const erro = document.getElementById("erro");

    telaSenha.style.display = "flex";

    senha.value = "";
    erro.textContent = "";

    window.scrollTo(0, 0);
}