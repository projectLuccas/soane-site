function entrar() {

    const senha = document.getElementById("senha").value;
    const erro = document.getElementById("erro");

    if (senha === "soso") {

        iniciarQuiz();

    } else {

        erro.textContent = "Senha incorreta... qual é seu apelido? Dica: 4 letras";

    }
}

let pontos = 0;

const respostasCorretas = {
    1: "a",
    2: "c",
    3: "b"
};

function iniciarQuiz() {

    document.getElementById("telaSenha").style.display = "none";

    document.getElementById("quiz").style.display = "flex";

    document.getElementById("pergunta1").style.display = "block";
}

function responder(pergunta, resposta) {

    document.getElementById("resultadoQuiz").textContent = "";
    if (resposta === respostasCorretas[pergunta]) {

        pontos++;

        document.getElementById("pergunta" + pergunta).style.display = "none";

        if (pergunta < 3) {

            document.getElementById("pergunta" + (pergunta + 1)).style.display = "block";

        } else {

            finalizarQuiz();

        }

    } else {

        document.getElementById("resultadoQuiz").textContent =
            "Errou palhaça, pega a visão...";
    }
}

function finalizarQuiz() {

    document.getElementById("resultadoQuiz").textContent =
        "Parabens, você acertou tudo! Sabia que você conhecia a gente";

    setTimeout(() => {

        document.getElementById("quiz").style.display = "none";

        document.getElementById("site").style.display = "block";

        window.scrollTo(0, 0);

    }, 1800);
}

function voltarPergunta(perguntaAtual) {

    document.getElementById("pergunta" + perguntaAtual).style.display = "none";

    const perguntaAnterior = perguntaAtual - 1;

    document.getElementById("pergunta" + perguntaAnterior).style.display = "block";

    document.getElementById("resultadoQuiz").textContent = "";
}

function mostrarSenha() {
    const senha = document.getElementById("senha");

    if (senha.type === "password") {
        senha.type = "text";
    } else {
        senha.type = "password";
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

    const surpresa = document.getElementById("surpresa");
    const audioBox = document.getElementById("audioBox");


    surpresa.style.display = "none";
    audioBox.style.display = "none";

   
    telaSenha.style.display = "flex";

  
    senha.value = "";
    erro.textContent = "";


    window.scrollTo(0, 0);
}

function irParaQuiz() {

    // Esconde o site principal
    document.getElementById("site").style.display = "none";

    // Mostra o quiz
    document.getElementById("quiz").style.display = "flex";

    // Esconde todas as perguntas
    document.getElementById("pergunta1").style.display = "none";
    document.getElementById("pergunta2").style.display = "none";
    document.getElementById("pergunta3").style.display = "none";

    // Começa novamente pela pergunta 1
    document.getElementById("pergunta1").style.display = "block";

    // Limpa mensagens
    document.getElementById("resultadoQuiz").textContent = "";

    // Volta para o topo
    window.scrollTo(0, 0);
}