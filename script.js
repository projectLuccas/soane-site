function entrar() {
    const senha = document.getElementById("senha").value;
    const erro = document.getElementById("erro");

    if (senha === "soso") {
        iniciarQuiz();
    } else {
        erro.textContent = "Senha incorreta... qual é seu apelido? Dica: 4 letras";
    }
}

function alternarSenha(botao) {
    const senha = document.getElementById("senha");

    if (senha.type === "password") {
        senha.type = "text";
        botao.textContent = "👁️";
    } else {
        senha.type = "password";
        botao.textContent = "🙈";
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


/* ================================= */
/* ESTATÍSTICAS DO RELACIONAMENTO */
/* ================================= */


// Estatísticas iniciais
let estatisticas = JSON.parse(
    localStorage.getItem("estatisticasSoane")
) || [

    {
        emoji: "📞",
        nome: "Ligações",
        valor: "1333"
    },

    {
        emoji: "😂",
        nome: "Momentos de drama",
        valor: "8170"
    },

    {
        emoji: "🍔",
        nome: "Comidas juntos",
        valor: "50"
    },

    {
        emoji: "⚽",
        nome: "Babas na Sexta Feira",
        valor: "0, que eu não sou maluco de deixar minha esposa."
    }

];



/* ================================= */
/* CALCULAR DIAS JUNTOS */
/* ================================= */

function calcularDiasJuntos() {

    const inicio = new Date("2026-02-13T00:00:00");

    const agora = new Date();

    const diferenca = agora - inicio;

    const dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    );

    document.getElementById("diasEstatistica").textContent = dias;

}



/* ================================= */
/* ABRIR ESTATÍSTICAS */
/* ================================= */

function abrirEstatisticas() {

    calcularDiasJuntos();

    atualizarEstatisticas();

    document.getElementById("painelEstatisticas").style.display = "flex";

}



/* ================================= */
/* FECHAR ESTATÍSTICAS */
/* ================================= */

function fecharEstatisticas() {

    document.getElementById("painelEstatisticas").style.display = "none";

}



/* ================================= */
/* MOSTRAR ESTATÍSTICAS */
/* ================================= */

function atualizarEstatisticas() {

    const lista =
        document.getElementById("listaEstatisticas");

    lista.innerHTML = "";


    // Dias juntos
    lista.innerHTML += `

        <div class="estatistica dias-estatistica">

            <div class="icone-stat">
                ❤️
            </div>

            <div class="info-stat">

                <span id="diasEstatistica">
                    0
                </span>

                <small>
                    Dias juntos
                </small>

            </div>

        </div>

    `;


    // Estatísticas personalizadas
    estatisticas.forEach((stat) => {

        lista.innerHTML += `

            <div class="estatistica">

                <div class="icone-stat">
                    ${stat.emoji}
                </div>

                <div class="info-stat">

                    <span>
                        ${stat.valor}
                    </span>

                    <small>
                        ${stat.nome}
                    </small>

                </div>

            </div>

        `;

    });


    calcularDiasJuntos();

}


const momentos = [

    {
        data: "13/02/2026",
        emoji: "❤️",
        titulo: "O dia em que nos conhecemos",
        descricao: "No morro do gato, em Leo Sacana."
    },

    {
        data: "01/03/2026",
        emoji: "💕",
        titulo: "Primeiro dia que saímos",
        descricao: "A partir daqui que neguinha se apaixonou e eu entreguei o primeiro anel (laele)."
    },

    {
        data: "13/04/2026",
        emoji: "💍",
        titulo: "Começamos a namorar",
        descricao: "Grande dia que eu entreguei o verdadeiro anel pro meu amor ❤️."
    },

    {
        data: "12/06/2026",
        emoji: "🍕",
        titulo: "Primeiro dia dos namorados",
        descricao: "Tomei aquele fumo gostoso no Oliva, mas valeu a pena demais com meu amor."
    },

    {
        data: "29/06/2026",
        emoji: "🏠",
        titulo: "Veio pra minha casa",
        descricao: "Primeira vez que neguinha veio em minha casa e ainda assistiu o jogo comigo."
    },

    {
        data: "25/07/2026",
        emoji: "🏠",
        titulo: "Fui pra casa de Neguinha",
        descricao: "Conheci a familia de Neguinha, depois da minha astúcia e fiz história."
    },

    {
        data: "14/11/2026",
        emoji: "🌴",
        titulo: "Primeira viagem",
        descricao: "Vamos passar juntos em Aracaju meu aniversário e vai ser nossa primeira viagem juntos!"
    }



];

function abrirCalendario() {

    const painel = document.getElementById("painelCalendario");
    const lista = document.getElementById("listaMomentos");

    lista.innerHTML = "";

    momentos.forEach((momento) => {

        lista.innerHTML += `
            <div class="momento">

                <div class="momento-data">
                    ${momento.emoji} ${momento.data}
                </div>

                <div class="momento-titulo">
                    ${momento.titulo}
                </div>

                <div class="momento-descricao">
                    ${momento.descricao}
                </div>

            </div>
        `;

    });

    painel.style.display = "flex";
}


function fecharCalendario() {

    document.getElementById("painelCalendario").style.display = "none";

}



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

document.addEventListener("click", function(event) {

    const coracoes = ["❤️", "💕", "💖", "💗", "💓"];

    for (let i = 0; i < 3; i++) {

        const coracao = document.createElement("div");

        coracao.classList.add("coracao-clique");

        coracao.textContent =
            coracoes[Math.floor(Math.random() * coracoes.length)];

        coracao.style.left =
            (event.clientX + (Math.random() * 40 - 20)) + "px";

        coracao.style.top =
            (event.clientY + (Math.random() * 40 - 20)) + "px";

        document.body.appendChild(coracao);

        setTimeout(() => {
            coracao.remove();
        }, 1500);
    }

});