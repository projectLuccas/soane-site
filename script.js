function entrar() {
    const senha = document.getElementById("senha").value;
    const erro = document.getElementById("erro");

    if (senha === "soso") {

        sessionStorage.setItem("soaneDesbloqueado", "true");

        document.getElementById("telaSenha").style.display = "none";
        document.getElementById("quiz").style.display = "none";
        document.getElementById("menu").style.display = "flex";

        salvarTelaAtual("menu");

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

    document.getElementById("resultadoQuiz").innerHTML = `
        <p>🎉 Neguinha é sabida dms kkkkkkkkk tá de parabens meu amor! ❤️</p>

        <button class="botao-voltar-jogos" onclick="voltarParaJogos()">
    🎮 Voltar para Jogos
</button>
    `;

}

function voltarParaJogos() {

    document.getElementById("quiz").style.display = "none";

    document.getElementById("paginaJogos").style.display = "flex";

    window.scrollTo(0, 0);

    salvarTelaAtual("jogos");
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

    const elementoDias = document.getElementById("diasEstatistica");

    if (elementoDias) {
        elementoDias.textContent = dias;
    }
}



/* ================================= */
/* ABRIR ESTATÍSTICAS */
/* ================================= */

function abrirEstatisticas() {

    atualizarEstatisticas();

    calcularDiasJuntos();

    document.getElementById("painelEstatisticas").style.display = "flex";

salvarTelaAtual("estatisticas");
}



/* ================================= */
/* FECHAR ESTATÍSTICAS */
/* ================================= */

function fecharEstatisticas() {

    document.getElementById("painelEstatisticas").style.display = "none";

    salvarTelaAtual("menu");

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

    salvarTelaAtual("calendario");

}


function fecharCalendario() {

    document.getElementById("painelCalendario").style.display = "none";
    
    salvarTelaAtual("menu");
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

function abrirPaginaPrincipal() {

    document.getElementById("menu").style.display = "none";
    document.getElementById("paginaJogos").style.display = "none";

    document.getElementById("site").style.display = "block";

    window.scrollTo(0, 0);

    salvarTelaAtual("site");
}

function voltarAoMenu() {

    document.getElementById("site").style.display = "none";
    document.getElementById("paginaMomentos").style.display = "none";
    document.getElementById("paginaMensagem").style.display = "none";
    document.getElementById("paginaSoane").style.display = "none";
    document.getElementById("paginaSurpresa").style.display = "none";
    document.getElementById("paginaReclamacoes").style.display = "none";
    document.getElementById("paginaJogos").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("paginaESe").style.display = "none";
    document.getElementById("menu").style.display = "flex";

    window.scrollTo(0, 0);

    salvarTelaAtual("menu");
}

function abrirMomentos() {

    document.getElementById("menu").style.display = "none";
    document.getElementById("paginaJogos").style.display = "none";

    document.getElementById("paginaMomentos").style.display = "flex";

    fotoAtual = 0;
    atualizarGaleria();

    window.scrollTo(0, 0);

    salvarTelaAtual("momentos");
}


function abrirMensagem() {

    document.getElementById("menu").style.display = "none";

    document.getElementById("paginaMensagem").style.display = "flex";

    window.scrollTo(0, 0);
}


function abrirModoSoane() {

    document.getElementById("menu").style.display = "none";

    document.getElementById("paginaSoane").style.display = "flex";

    window.scrollTo(0, 0);
}


function abrirSurpresa() {

    document.getElementById("menu").style.display = "none";

    document.getElementById("paginaSurpresa").style.display = "flex";

    window.scrollTo(0, 0);
}

/* =========================================
   GALERIA - NOSSOS MOMENTOS
========================================= */

const fotosGaleria = [
    {
        imagem: "foto1.jpeg",
        titulo: "A princesa do HS 🏥",
        texto: "Linda, maravilhosa, minha branquinha no trabalho",
        selo: "TRABALHADORA👸"
    },

    {
        imagem: "foto2.jpeg",
        titulo: "A gatinha pequena 📸",
        texto: "Desde pequenininha com a carinha bontinha e gaiata ❤️",
        selo: "LINDINHA 👧"
    },

    {
        imagem: "foto3.jpeg",
        titulo: "A Bela e a Fera ❤️",
        texto: "Me estressou no dia falando do passado, mas eu amo kkkkkkkkk",
        selo: "ME FAZ RAIVA😡"
    },

    {
        imagem: "foto4.jpeg",
        titulo: "Mimando a bonitinha 👜",
        texto: "Essa é linda, eu segurando a bolsa da bonitinha e ela fazendo graça",
        selo: "MIMADA 💅🏻"
    },

    {
        imagem: "foto5.jpeg",
        titulo: "Gaiatinha desde pequena 🤡",
        texto: "A mesma coisa de hoje, gaiatinha, bonitinha, linda, te amo ❤️",
        selo: "MINHA FAVORITA ❤️"
    }
];

let fotoAtual = 0;


function atualizarGaleria() {

    const foto = fotosGaleria[fotoAtual];

    const imagem = document.getElementById("fotoGaleria");
    const titulo = document.getElementById("tituloFoto");
    const texto = document.getElementById("textoFoto");
    const selo = document.querySelector(".selo-foto");

    imagem.classList.remove("foto-trocando");

    void imagem.offsetWidth;

    imagem.src = foto.imagem;

    titulo.textContent = foto.titulo;

    texto.textContent = foto.texto;

    selo.textContent = foto.selo;

    document.getElementById("numeroFoto").textContent =
        fotoAtual + 1;

    imagem.classList.add("foto-trocando");
}


function fotoProxima() {

    fotoAtual++;

    if (fotoAtual >= fotosGaleria.length) {
        fotoAtual = 0;
    }

    atualizarGaleria();
}


function fotoAnterior() {

    fotoAtual--;

    if (fotoAtual < 0) {
        fotoAtual = fotosGaleria.length - 1;
    }

    atualizarGaleria();
}


function interagirFoto() {

    const imagem = document.getElementById("fotoGaleria");

    imagem.classList.add("clicada");

    criarCoracoesGaleria();

    setTimeout(() => {
        imagem.classList.remove("clicada");
    }, 500);
}


function criarCoracoesGaleria() {

    const coracoes = ["❤️", "💕", "💖", "😂"];

    for (let i = 0; i < 8; i++) {

        const coracao = document.createElement("div");

        coracao.textContent =
            coracoes[
                Math.floor(Math.random() * coracoes.length)
            ];

        coracao.style.position = "fixed";

        coracao.style.left =
            (50 + Math.random() * 30 - 15) + "%";

        coracao.style.top =
            (55 + Math.random() * 15) + "%";

        coracao.style.fontSize =
            (18 + Math.random() * 15) + "px";

        coracao.style.pointerEvents = "none";

        coracao.style.zIndex = "99999";

        coracao.style.animation =
            "subirCoracaoGaleria 1.2s ease forwards";

        document.body.appendChild(coracao);

        setTimeout(() => {
            coracao.remove();
        }, 1200);
    }
}


document.getElementById("totalFotos").textContent =
    fotosGaleria.length;


    /* =========================================
   CENTRAL DE RECLAMAÇÕES DA SOSO
========================================= */

/*
    EDITE AS RECLAMAÇÕES
*/

const reclamacoesSoso = [
    "Você tá chato ",
    "Você tá demorando para responder",
    "Você tá errado",
    "Você não tá me dando atenção"
];


/*
    Guarda as reclamações escolhidas
*/

let reclamacoesSelecionadas = [];

let textoReclamacaoOutro = "";


/*
    Cria as opções automaticamente
*/

function carregarReclamacoes() {

    const lista = document.getElementById("listaReclamacoes");

    lista.innerHTML = "";

    reclamacoesSoso.forEach((reclamacao, index) => {

        lista.innerHTML += `
            <div class="opcao-reclamacao">

                <label>

                    <input
                        type="checkbox"
                        class="checkbox-reclamacao"
                        value="${reclamacao}"
                    >

                    <span>${reclamacao}</span>

                </label>

            </div>
        `;

    });
}

function abrirQuiz() {

    document.getElementById("paginaJogos").style.display = "none";

    document.getElementById("quiz").style.display = "flex";

    document.getElementById("pergunta1").style.display = "block";
    document.getElementById("pergunta2").style.display = "none";
    document.getElementById("pergunta3").style.display = "none";

    document.getElementById("resultadoQuiz").textContent = "";

    window.scrollTo(0, 0);

    salvarTelaAtual("quiz");
}
/*
    Abre a página
*/
function abrirJogos() {

    document.getElementById("menu").style.display = "none";
    document.getElementById("paginaJogos").style.display = "flex";

    window.scrollTo(0, 0);

    salvarTelaAtual("jogos");
}

function abrirQuiz() {

    document.getElementById("paginaJogos").style.display = "none";
    document.getElementById("quiz").style.display = "flex";

    document.getElementById("pergunta1").style.display = "block";
    document.getElementById("pergunta2").style.display = "none";
    document.getElementById("pergunta3").style.display = "none";

    document.getElementById("resultadoQuiz").textContent = "";

    window.scrollTo(0, 0);

    salvarTelaAtual("quiz");
}



function abrirReclamacoes() {

    document.getElementById("menu").style.display = "none";
    document.getElementById("paginaJogos").style.display = "none";

    document.getElementById("paginaReclamacoes").style.display = "flex";

    carregarReclamacoes();

    document.getElementById("resultadoReclamacao").style.display = "none";
    document.getElementById("botaoCompartilhar").style.display = "none";

    window.scrollTo(0, 0);

    salvarTelaAtual("reclamacoes");
}


/*
    Ativa/desativa o campo "Outro"
*/

function alternarOutro() {

    const checkbox = document.getElementById("checkboxOutro");

    const campo = document.getElementById("textoOutro");

    if (checkbox.checked) {

        campo.disabled = false;

        campo.focus();

    } else {

        campo.disabled = true;

        campo.value = "";

    }
}


/*
    Registra a reclamação
*/

function registrarReclamacao() {

    const checkboxes =
        document.querySelectorAll(".checkbox-reclamacao");

    reclamacoesSelecionadas = [];

    checkboxes.forEach((checkbox) => {

        if (checkbox.checked) {

            reclamacoesSelecionadas.push(
                checkbox.value
            );

        }

    });


    const checkboxOutro =
        document.getElementById("checkboxOutro");

    const campoOutro =
        document.getElementById("textoOutro");


    textoReclamacaoOutro =
        campoOutro.value.trim();


    /*
        Verifica se ela não selecionou nada
    */

    if (
        reclamacoesSelecionadas.length === 0 &&
        !(
            checkboxOutro.checked &&
            textoReclamacaoOutro !== ""
        )
    ) {

        alert(
            "Soso, você precisa escolher pelo menos uma reclamação"
        );

        return;
    }


    /*
        Cria o resultado
    */

    const resultado =
        document.getElementById("resultadoReclamacao");

    let html = `
        <h2>
            🙄 Reclamação registrada!
        </h2>

        <p>
            <strong>Reclamações selecionadas:</strong>
        </p><br>

        <ul class="lista-resultado-reclamacao">
    `;


    reclamacoesSelecionadas.forEach((reclamacao) => {

        html += `
            <li>
                ☑️ ${reclamacao}
            </li>
        `;

    });


    html += `</ul>`;


    /*
        Adiciona o "Outro"
    */

    if (
        checkboxOutro.checked &&
        textoReclamacaoOutro !== ""
    ) {

        html += `
            <div class="mensagem-outro">

                <strong>
                    ✍️ Reclamação personalizada:
                </strong>

                <br><br>

                "${textoReclamacaoOutro}"

            </div>
        `;

    }


    html += `
        <p style="margin-top: 15px; text-align: center;">
            Agora Lucas vai ter que ouvir a agonia 🙄
        </p>
    `;


    resultado.innerHTML = html;

    resultado.style.display = "block";


    /*
        Mostra botão do WhatsApp
    */

    document.getElementById("botaoCompartilhar").style.display =
        "block";


    /*
        Rola até o resultado
    */

    resultado.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/*
    Compartilhar pelo WhatsApp
*/

function compartilharReclamacao() {

    let mensagem =
        "CENTRAL DE RECLAMAÇÕES DA SOSO\n\n";

    mensagem +=
        "Olá, Lucas. Soso tem algumas coisas para reclamar de você:\n\n";

    reclamacoesSelecionadas.forEach((reclamacao) => {

        mensagem +=
            reclamacao + "\n";

    });

    if (textoReclamacaoOutro !== "") {

        mensagem +=
            "\nReclamação personalizada:\n";

        mensagem +=
            "\"" + textoReclamacaoOutro + "\"\n";

    }

    mensagem +=
        "\nReclamação feita oficialmente pela Zoada da Soso.";


    const mensagemCodificada =
        encodeURIComponent(mensagem);

    const url =
        "https://wa.me/5571988214998?text=" +
        mensagemCodificada;
    window.open(
        url,
        "_blank"
    );
}

/* =========================================
   SALVAR TELA ATUAL
========================================= */

function salvarTelaAtual(tela) {
    localStorage.setItem("telaAtualSoane", tela);
}

/* =========================================
   RESTAURAR TELA AO ATUALIZAR
========================================= */

/* =========================================
   RESTAURAR TELA AO ATUALIZAR
========================================= */

window.addEventListener("load", function () {

    const desbloqueado =
    sessionStorage.getItem("soaneDesbloqueado");

    const telaAtual =
        localStorage.getItem("telaAtualSoane");

    if (desbloqueado !== "true") {
        return;
    }

    /* =========================
       MENU
    ========================= */

    if (telaAtual === "menu") {

        document.getElementById("telaSenha").style.display = "none";
        document.getElementById("quiz").style.display = "none";
        document.getElementById("menu").style.display = "flex";

    }

    /* =========================
   JOGOS
========================= */

if (telaAtual === "jogos") {

    document.getElementById("telaSenha").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("paginaJogos").style.display = "flex";

}

/* =========================
   QUIZ
========================= */

if (telaAtual === "quiz") {

    document.getElementById("telaSenha").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("paginaJogos").style.display = "none";
    document.getElementById("quiz").style.display = "flex";

    document.getElementById("pergunta1").style.display = "block";
    document.getElementById("pergunta2").style.display = "none";
    document.getElementById("pergunta3").style.display = "none";

}



    /* =========================
       NOSSA HISTÓRIA
    ========================= */

    if (telaAtual === "site") {

        document.getElementById("telaSenha").style.display = "none";
        document.getElementById("quiz").style.display = "none";
        document.getElementById("menu").style.display = "none";
        document.getElementById("site").style.display = "block";

    }

    /* =========================
       NOSSOS MOMENTOS
    ========================= */

    if (telaAtual === "momentos") {

        document.getElementById("telaSenha").style.display = "none";
        document.getElementById("quiz").style.display = "none";
        document.getElementById("menu").style.display = "none";
        document.getElementById("paginaMomentos").style.display = "flex";

        fotoAtual = 0;
        atualizarGaleria();

    }

    /* =========================
       RECLAMAÇÕES
    ========================= */

    if (telaAtual === "reclamacoes") {

        document.getElementById("telaSenha").style.display = "none";
        document.getElementById("quiz").style.display = "none";
        document.getElementById("menu").style.display = "none";
        document.getElementById("paginaReclamacoes").style.display = "flex";

        carregarReclamacoes();

        document.getElementById("resultadoReclamacao").style.display = "none";

        document.getElementById("botaoCompartilhar").style.display = "none";

    }

    /* =========================
       MENSAGEM
    ========================= */

    if (telaAtual === "mensagem") {

        document.getElementById("telaSenha").style.display = "none";
        document.getElementById("quiz").style.display = "none";
        document.getElementById("menu").style.display = "none";
        document.getElementById("paginaMensagem").style.display = "flex";

    }

    /* =========================
       MODO SOANE
    ========================= */

    if (telaAtual === "soane") {

        document.getElementById("telaSenha").style.display = "none";
        document.getElementById("quiz").style.display = "none";
        document.getElementById("menu").style.display = "none";
        document.getElementById("paginaSoane").style.display = "flex";

    }

    /* =========================
       SURPRESA
    ========================= */

    if (telaAtual === "surpresa") {

        document.getElementById("telaSenha").style.display = "none";
        document.getElementById("quiz").style.display = "none";
        document.getElementById("menu").style.display = "none";
        document.getElementById("paginaSurpresa").style.display = "flex";

    }

    /* =========================
       CALENDÁRIO
    ========================= */

    if (telaAtual === "calendario") {

        document.getElementById("telaSenha").style.display = "none";
        document.getElementById("quiz").style.display = "none";
        document.getElementById("menu").style.display = "flex";

        const painel =
            document.getElementById("painelCalendario");

        const lista =
            document.getElementById("listaMomentos");

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

    if (telaAtual === "ese") {

    document.getElementById("telaSenha").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("paginaJogos").style.display = "none";
    document.getElementById("quiz").style.display = "none";

    document.getElementById("paginaESe").style.display = "flex";

}


    /* =========================
       ESTATÍSTICAS
    ========================= */

    if (telaAtual === "estatisticas") {

        document.getElementById("telaSenha").style.display = "none";
        document.getElementById("quiz").style.display = "none";
        document.getElementById("menu").style.display = "flex";

        atualizarEstatisticas();

        calcularDiasJuntos();

        document.getElementById("painelEstatisticas").style.display = "flex";

    }

    window.scrollTo(0, 0);

});

const perguntasESe = {

    bonitinho: [
        "E se a gente pudesse voltar para um dia que já vivemos juntos, qual você escolheria?",
        "E se hoje fosse nosso último dia juntos. Depois vamo ficar 1 ano sem se ver, o que você ia fazer comigo?",
        "E se você pudesse guardar para sempre uma lembrança nossa, qual seria?",
        "E se a gente pudesse repetir nosso primeiro encontro, você mudaria alguma coisa?",
        "Qual seria a música que define nós dois?",
        "O que te lembra nós? Tipo, algo só nosso..."
    ],

    engracadinho: [
        "E se a gente trocasse de corpo por um tempo, qual seria a primeira coisa que você faria?",
        "E se a gente fosse preso. Qual seria o crime cometido por você e o que você acha que seria o meu?",
        "E se a gente ficasse preso em um elevador por 5 horas, quem ia ficar azoado primeiro?",
        "E se nossas conversas vazassem na internet, qual de nós dois seria cancelado primeiro?",
        "Quem é que fala mais entre a gente? kkkkkkkk e qual seria a frase mais falada se a gente tivesse um narrador?",
        "E se um de nós ficasse famoso do nada, quem ia se achar mais? kkkkkkkk essa é obvio boçal"
    ],

    futuro: [
        "E se a gente pudesse morar em qualquer lugar do mundo, onde seria?",
        "E se a gente ganhasse R$ 1 milhão hoje, qual seria a primeira coisa que faríamos juntos?",
        "E se a gente pudesse viajar amanhã para qualquer lugar, para onde iríamos? Tirando aracajivis",
        "E se daqui a 10 anos a gente abrisse uma caixa com coisas de hoje, o que você colocaria nela?",
        "E se a gente tivesse nossa própria casa amanhã, qual seria a primeira coisa que você compraria?",
        "E se você pudesse escolher uma coisa para a gente realizar juntos nos próximos anos, qual seria? Tirando morar junto"
    ],

    duvidas: [
        "E se você pudesse mudar uma única coisa na nossa história, mudaria alguma coisa?",
        "E se você pudesse ouvir meus pensamentos por 10 minutos, você iria gostar?",
        "E se a gente tivesse uma discussão agora. Qual seria o motivo?",
        "E se você tivesse que me contar uma coisa que nunca teve coragem de falar, o que seria?",
        "E se a gente pudesse apagar uma briga da nossa história, qual seria?",
        "E se você pudesse fazer uma pergunta e eu fosse obrigado a responder agora, o que perguntaria?"
    ]

};

let categoriaESe = "aleatorio";
let perguntasJaVistasESe = [];
let quantidadeDescobertaESe = 0;

function abrirESe() {

    document.getElementById("paginaJogos").style.display = "none";
    document.getElementById("paginaESe").style.display = "flex";

    window.scrollTo(0, 0);

    salvarTelaAtual("ese");
}

function mudarCategoriaESe(categoria) {

    categoriaESe = categoria;

    perguntasJaVistasESe = [];

    sortearESe();
}

function sortearESe() {

    let lista = [];

    if (categoriaESe === "aleatorio") {

        lista = [
            ...perguntasESe.bonitinho,
            ...perguntasESe.engracadinho,
            ...perguntasESe.futuro,
            ...perguntasESe.duvidas
        ];

    } else {

        lista = perguntasESe[categoriaESe];

    }

    let disponiveis = lista.filter(
        pergunta => !perguntasJaVistasESe.includes(pergunta)
    );

    if (disponiveis.length === 0) {

        perguntasJaVistasESe = [];
        disponiveis = lista;

    }

    const sorteada =
        disponiveis[Math.floor(Math.random() * disponiveis.length)];

    perguntasJaVistasESe.push(sorteada);

    quantidadeDescobertaESe++;

    document.getElementById("textoESe").textContent = sorteada;

    document.getElementById("contadorESe").textContent =
        quantidadeDescobertaESe + " situações descobertas";
}

function voltarParaJogosDoESe() {

    document.getElementById("paginaESe").style.display = "none";
    document.getElementById("paginaJogos").style.display = "flex";

    window.scrollTo(0, 0);

    salvarTelaAtual("jogos");
}