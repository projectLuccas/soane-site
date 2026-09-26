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
    document.getElementById("paginaRoleta").style.display = "none";
    document.getElementById("paginaReclamacoes").style.display = "none";
    document.getElementById("paginaJogos").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("paginaESe").style.display = "none";
    document.getElementById("menu").style.display = "flex";
    document.getElementById("paginaSosoBrava").style.display = "none";

const paginaCertificado = document.getElementById("paginaCertificadoBocal");

if (paginaCertificado) {
    paginaCertificado.style.display = "none";
}

const paginaProximoEncontro =
    document.getElementById("paginaProximoEncontro");

if (paginaProximoEncontro) {
    paginaProximoEncontro.style.display = "none";
}

if (intervaloProximoEncontro) {
    clearInterval(intervaloProximoEncontro);
    intervaloProximoEncontro = null;
}

const paginaListaDesejos =
    document.getElementById("paginaListaDesejos");

if (paginaListaDesejos) {
    paginaListaDesejos.style.display = "none";
}

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

/* =========================================
   GALERIA - NOSSOS MOMENTOS
========================================= */

const fotosGaleria = [
    {
        imagem: "arquivos/foto1.jpeg",
        titulo: "A princesa do HS 🏥",
        texto: "Linda, maravilhosa, minha branquinha no trabalho",
        selo: "TRABALHADORA👸"
    },

    {
        imagem: "arquivos/foto2.jpeg",
        titulo: "A gatinha pequena 📸",
        texto: "Desde pequenininha com a carinha bontinha e gaiata ❤️",
        selo: "LINDINHA 👧"
    },

    {
        imagem: "arquivos/foto3.jpeg",
        titulo: "A Bela e a Fera ❤️",
        texto: "Me estressou no dia falando do passado, mas eu amo kkkkkkkkk",
        selo: "ME FAZ RAIVA😡"
    },

    {
        imagem: "arquivos/foto4.jpeg",
        titulo: "Mimando a bonitinha 👜",
        texto: "Essa é linda, eu segurando a bolsa da bonitinha e ela fazendo graça",
        selo: "MIMADA 💅🏻"
    },

    {
        imagem: "arquivos/foto5.jpeg",
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

if (telaAtual === "roleta") {

    document.getElementById("telaSenha").style.display = "none";

    document.getElementById("menu").style.display = "none";

    document.getElementById("quiz").style.display = "none";

    document.getElementById("paginaJogos").style.display = "none";

    document.getElementById("paginaSosoBrava").style.display = "none";

    document.getElementById("paginaRoleta").style.display = "flex";
}

if (telaAtual === "certificadoBocal") {

    document.getElementById("telaSenha").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("paginaJogos").style.display = "none";
    document.getElementById("paginaSosoBrava").style.display = "none";
    document.getElementById("paginaRoleta").style.display = "none";

    document.getElementById("paginaCertificadoBocal").style.display = "flex";

    carregarEstadoCertificadoBocal();
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


    else if (telaAtual === "proximoEncontro") {

    document.getElementById("telaSenha").style.display = "none";
    document.getElementById("menu").style.display = "none";

    document.getElementById("paginaProximoEncontro").style.display = "flex";

    carregarProximoEncontro();
}

else if (telaAtual === "listaDesejos") {

    document.getElementById("telaSenha").style.display = "none";
    document.getElementById("menu").style.display = "none";

    document.getElementById("paginaListaDesejos").style.display = "flex";

    renderizarDesejos();
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

    if (telaAtual === "sosoBrava") {

    document.getElementById("telaSenha").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("paginaJogos").style.display = "none";

    document.getElementById("paginaSosoBrava").style.display = "flex";

    carregarEscolhaSoso();
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

let escolhaAtualSoso = "";

const respostasSosoBrava = {

    carinho: {
        titulo: "❤️ CARINHO SOLICITADO!",
        escolha: "Quero carinho",
        mensagem: `
            <h2>❤️ CARINHO SOLICITADO!</h2>

            <p>
                Otima escolha, você sabe que eu sei fazer um carinho gostoso em você meu amor...
            </p>

            <p>
                Eu vou te dá:
            </p>

            <p>
                🤗 Abraço<br>
                💋 Beijo<br>
                ❤️ Carinho
            </p>

            <p>
                Não vou reclamar em nada, eu quero te da carinho mesmo.
            </p>
        `
    },


    conversar: {
        titulo: "💬 SOSO QUER CONVERSAR",
        escolha: "Quero conversar",
        mensagem: `
            <h2>💬 Soso quer conversar</h2>

            <p>
                Quer conversar meu amor?.
            </p>

            <p>
                To aqui pra conversar com você, so não precisa me xingar kkkkkkkkkkkkkkkkkkk
            </p>

            <p>
                Te amo e amo te escutar ❤️
            </p>
        `
    },


    raiva: {
        titulo: "🙄 REPARO RECUSADO",
        escolha: "Ainda tô com raiva",
        mensagem: `
            <h2>🙄 NEM QUER ME VER</h2>

            <p>
                Tá com raiva ainda meu amor?.
            </p>

            <p>
                Eu não sei mais o que fazer...
            </p>

            <p>
                Vou tentar ficar quietinho e não vou falar nada...
            </p>

            <p>
                Tudo mentira essa linha de cima ai kkkkkkkkkkkkkkkkkkkkkkkk
            </p>
        `
    },


    espaco: {
        titulo: "🧘 ESPAÇO SOLICITADO",
        escolha: "Quero meu espaço",
        mensagem: `
            <h2>🧘 ELA QUER FICAR NA DELA</h2>

            <p>
                Eu estou proibido de perturbar Soso
                por alguns instantes.
            </p>

            <p>
                Não gostei dessa porra ai não viu
            </p>
        `
    },


    agrado: {
        titulo: "🍔 AGRADO SOLICITADO",
        escolha: "Quero um agrado",
        mensagem: `
            <h2>💳 JÁ NÃO GOSTEI MUITO DESSA OPÇÃO</h2>

            <p>
                Soso solicitou um agrado.
            </p>

            <p>
                Lucas não gostou muito desse negócio de agrado não viu
            </p>

            <p>
                Tá querendo açaí,
                lanche, chocolate ou acabar com o dinheiro do Lucas.
            </p>
        `
    },


    rir: {
        titulo: "😂 MISSÃO: FAZER SOSO RIR",
        escolha: "Me faça rir",
        mensagem: `
            <h2>😂 ESSA É A MELHOR OPÇÃO</h2>

            <p>
                Lucas vai fazer Soso rir.
            </p>

            <p>
                Nisso você sabe que eu sou bom né meu amor, gracinha é comigo.
            </p>

            <p>
                Você arrumou um engraçadinho por que quis... Agora se abra ai pra mim
            </p>
        `
    }

};

function abrirSosoBrava() {

    document.getElementById("menu").style.display = "none";

    document.getElementById("paginaSosoBrava").style.display = "flex";

    window.scrollTo(0, 0);

    salvarTelaAtual("sosoBrava");

    carregarEscolhaSoso();
}

function escolherSosoBrava(escolha) {

    escolhaAtualSoso = escolha;

    const dados = respostasSosoBrava[escolha];

    document.getElementById("opcoesSosoBrava").style.display = "none";

    document.getElementById("resultadoSosoBrava").style.display = "block";

    document.getElementById("textoResultadoSoso").innerHTML =
        dados.mensagem;

    localStorage.setItem("escolhaSosoBrava", escolha);
}

function carregarEscolhaSoso() {

    const escolhaSalva =
        localStorage.getItem("escolhaSosoBrava");

    if (escolhaSalva && respostasSosoBrava[escolhaSalva]) {

        escolhaAtualSoso = escolhaSalva;

        document.getElementById("opcoesSosoBrava").style.display = "none";

        document.getElementById("resultadoSosoBrava").style.display = "block";

        document.getElementById("textoResultadoSoso").innerHTML =
            respostasSosoBrava[escolhaSalva].mensagem;

    } else {

        document.getElementById("opcoesSosoBrava").style.display = "block";

        document.getElementById("resultadoSosoBrava").style.display = "none";

    }

}

function escolherNovamenteSoso() {

    escolhaAtualSoso = "";

    localStorage.removeItem("escolhaSosoBrava");

    document.getElementById("resultadoSosoBrava").style.display = "none";

    document.getElementById("opcoesSosoBrava").style.display = "block";

}

const numeroWhatsappLucas = "5571988214998";

function compartilharSosoNoWhatsapp() {

    if (!escolhaAtualSoso) {
        return;
    }

    const dados = respostasSosoBrava[escolhaAtualSoso];

    const mensagemEscrita =
        document.getElementById("mensagemSoso").value.trim();

    let mensagem =
`RESULTADO DO SOSO TÁ BRAVA

Soso escolheu:

${dados.escolha}`;

    if (mensagemEscrita !== "") {

        mensagem += `

    Soso escreveu:

"${mensagemEscrita}"`;

    }

    mensagem += `

Faça essa porra agora!

— Soso Reis 13`;

    const textoCodificado = encodeURIComponent(mensagem);

    const link =
        `https://wa.me/${numeroWhatsappLucas}?text=${textoCodificado}`;

    window.open(link, "_blank");
}

const opcoesRoleta = [

    {
        nome: "🍽️ RESTAURANTE DE 1 REAL",
        mensagem: "CAIU NO RESTAURANTE DE 1 REAL VAI TER QUE IR 😂😂😂😂😂😂😂"
    },

    {
        nome: "🌴 Ir pra Ribeira",
        mensagem: "Bora pra ribeira de lei kkkkkkkkkk nossa segunda casa ❤️"
    },

    {
        nome: "🛍️ Ir pro Shopping",
        mensagem: "Shopping da Bahia? Nossa terceira casa 😂"
    },

    {
        nome: "🎬 Cinema",
        mensagem: "Bora pro cinema, mas é pra assistir o filme... 🍿🎬"
    },

    {
        nome: "🍦 Tomar sorvete",
        mensagem: "Sorvetinho com Soso, mas quem paga o sorvete é a neguinha kkkkkkkkk 🍦❤️"
    },

    {
        nome: "❤️ Soso escolhe",
        mensagem: "👑 A decisão está oficialmente nas mãos de Soso. Lucas que arrume um jegue."
    },

    {
        nome: "😎 Lucas escolhe",
        mensagem: "😎 Hoje o gostoso decide. Se quiser reclamar vá pra Zoada da Soso."
    },

    {
        nome: "👩‍❤️‍👨 Vamo na surpresa",
        mensagem: "👀 A gente escolhe em conjunto o que fazer kkkkkkkkkkk como sempre."
    }

];

let rotacaoAtualRoleta = 0;
let roletaGirando = false;

function abrirRoleta() {

    document.getElementById("menu").style.display = "none";

    document.getElementById("paginaRoleta").style.display = "flex";

    window.scrollTo(0, 0);

    salvarTelaAtual("roleta");
}

function girarRoleta() {

    if (roletaGirando) {
        return;
    }

    roletaGirando = true;

    const roleta =
        document.getElementById("roletaJequiti");

    const resultado =
        document.getElementById("resultadoRoleta");

    const botao =
        document.getElementById("botaoGirarRoleta");


    resultado.style.display = "none";

    botao.disabled = true;
    botao.textContent = "🎡 GIRANDO...";


    const indiceSorteado =
        Math.floor(Math.random() * opcoesRoleta.length);


    const tamanhoFatia =
        360 / opcoesRoleta.length;


    const centroFatia =
        (indiceSorteado * tamanhoFatia) +
        (tamanhoFatia / 2);


    const posicaoDesejada =
        360 - centroFatia;


    const posicaoAtual =
        rotacaoAtualRoleta % 360;


    let diferenca =
        posicaoDesejada - posicaoAtual;


    if (diferenca < 0) {
        diferenca += 360;
    }


    const voltasExtras = 5 * 360;


    rotacaoAtualRoleta +=
        voltasExtras + diferenca;


    roleta.style.transform =
        `rotate(${rotacaoAtualRoleta}deg)`;


    setTimeout(() => {

        const escolhido =
            opcoesRoleta[indiceSorteado];


        resultado.innerHTML = `
            <h2>${escolhido.nome}</h2>

            <p>${escolhido.mensagem}</p>
        `;


        resultado.style.display = "block";


        botao.disabled = false;
        botao.textContent = "🔄 Girar novamente";


        roletaGirando = false;

    }, 4500);
}

/* ================================================= */
/* CERTIFICADO DA BOÇAL */
/* ================================================= */

const perguntasCertificadoBocal = [

    {
        pergunta: "Qual o meu nome completo?",
        alternativas: [
            "Lucas Oliveira",
            "Lucas Ribeiro de Oliveira",
            "Lucas Ribeirão Preto",
            "Lucas dos Santos Reis (an an)"
        ],
        correta: 1
    },

    {
        pergunta: "Qual o meu lazer favorito atual?",
        alternativas: [
            "Sair com minha soso que eu amo e gastar muito (consumista)",
            "Ir pro baba sexta feira em vez de jantar",
            "Ficar em casa jogando videogame",
            "Não tenho lazer pois odeio todos e vou virar emo até 2029"
        ],
        correta: 0
    },

    {
        pergunta: "O que eu mais gosto em você? Já falei varias vezes...",
        alternativas: [
            "Cabelo",
            "Boca",
            "Cabeça, cabelo, testa, olhos, sobrancelhas, cílios, orelhas, nariz, bochechas, boca, lábios, dentes, língua, queixo, mandíbula, pescoço, nuca, ombros, braços, axilas, cotovelos, antebraços, pulsos, mãos, palmas, dedos, unhas, tórax, seios, mamilos, costas, abdômen, cintura, umbigo, quadris, pelve, virilha, vulva, nádegas, coxas, joelhos, pernas, panturrilhas, tornozelos, calcanhares, pés e dedos dos pés.",
            "Bochechas"
        ],
        correta: 2
    },

    {
        pergunta: "Meu cantor favorito?",
        alternativas: [
            "Zidane na Voz (an an)",
            "Manoel Gomes",
            "Belo",
            "Rei dos Faixas"
        ],
        correta: 2
    },

    {
        pergunta: "Quem é minha futura esposa, mãe dos meus filhos e dona do meu coração?",
        alternativas: [
            "Soane Reis 13",
            "Soso, Branquinha, Rainha da Suburbana",
            "Neguinha, Shay, Minha trufinha de Maracujá",
            "Todas as alternativas"
        ],
        correta: 3
    }

];


let perguntaAtualBocal = 0;
let pontosBocal = 0;
let provaRespondidaBocal = false;

let desenhandoAssinaturaBocal = false;
let assinaturaFoiDesenhadaBocal = false;


/* ========================= */
/* ABRIR */
/* ========================= */

function abrirCertificadoBocal() {

    esconderTelasCertificadoBocal();

    document.getElementById("menu").style.display = "none";
    document.getElementById("paginaCertificadoBocal").style.display = "flex";

    carregarEstadoCertificadoBocal();

    window.scrollTo(0, 0);

    salvarTelaAtual("certificadoBocal");
}


/* ========================= */
/* ESCONDER ETAPAS */
/* ========================= */

function esconderTelasCertificadoBocal() {

    const ids = [
        "inicioCertificadoBocal",
        "provaCertificadoBocal",
        "resultadoProvaBocal",
        "assinaturaCertificadoBocal",
        "diplomaBocal"
    ];

    ids.forEach(id => {

        const elemento = document.getElementById(id);

        if (elemento) {
            elemento.style.display = "none";
        }

    });
}


/* ========================= */
/* INICIAR PROVA */
/* ========================= */

function comecarProvaBocal() {

    perguntaAtualBocal = 0;
    pontosBocal = 0;
    provaRespondidaBocal = false;

    localStorage.setItem("etapaCertificadoBocal", "prova");
    localStorage.setItem("perguntaAtualBocal", "0");
    localStorage.setItem("pontosBocal", "0");

    esconderTelasCertificadoBocal();

    document.getElementById("provaCertificadoBocal").style.display = "block";

    mostrarPerguntaBocal();
}


/* ========================= */
/* MOSTRAR PERGUNTA */
/* ========================= */

function mostrarPerguntaBocal() {

    provaRespondidaBocal = false;

    const dados =
        perguntasCertificadoBocal[perguntaAtualBocal];

    document.getElementById("numeroPerguntaBocal").textContent =
        `Pergunta ${perguntaAtualBocal + 1}/5`;

    document.getElementById("pontuacaoBocal").textContent =
        `❤️ ${pontosBocal}`;

    document.getElementById("perguntaBocal").textContent =
        dados.pergunta;

    document.getElementById("progressoProvaBocal").style.width =
        `${((perguntaAtualBocal + 1) / perguntasCertificadoBocal.length) * 100}%`;

    const area =
        document.getElementById("alternativasBocal");

    area.innerHTML = "";

    dados.alternativas.forEach((alternativa, indice) => {

        const botao = document.createElement("button");

        botao.className = "alternativa-bocal";

        botao.textContent = alternativa;

        botao.onclick = function () {
            responderPerguntaBocal(indice, botao);
        };

        area.appendChild(botao);

    });

}


/* ========================= */
/* RESPONDER */
/* ========================= */

function responderPerguntaBocal(indice, botaoClicado) {

    if (provaRespondidaBocal) {
        return;
    }

    provaRespondidaBocal = true;

    const dados =
        perguntasCertificadoBocal[perguntaAtualBocal];

    const botoes =
        document.querySelectorAll(".alternativa-bocal");

    if (indice === dados.correta) {

        pontosBocal++;

        botaoClicado.classList.add(
            "alternativa-certa-bocal"
        );

    } else {

        botaoClicado.classList.add(
            "alternativa-errada-bocal"
        );

        botoes[dados.correta].classList.add(
            "alternativa-certa-bocal"
        );

    }

    botoes.forEach(botao => {
        botao.disabled = true;
    });


    localStorage.setItem(
        "pontosBocal",
        pontosBocal
    );


    setTimeout(() => {

        perguntaAtualBocal++;

        localStorage.setItem(
            "perguntaAtualBocal",
            perguntaAtualBocal
        );

        if (
            perguntaAtualBocal <
            perguntasCertificadoBocal.length
        ) {

            mostrarPerguntaBocal();

        } else {

            finalizarProvaBocal();

        }

    }, 900);

}


/* ========================= */
/* FINAL */
/* ========================= */

function finalizarProvaBocal() {

    esconderTelasCertificadoBocal();

    const resultado =
        document.getElementById("resultadoProvaBocal");

    resultado.style.display = "block";

    const titulo =
        document.getElementById("tituloResultadoBocal");

    const texto =
        document.getElementById("textoResultadoBocal");

    const icone =
        document.getElementById("iconeResultadoBocal");

    const botao =
        document.getElementById("botaoResultadoBocal");


    if (pontosBocal === 5) {

        localStorage.setItem(
            "certificadoBocalAprovado",
            "true"
        );

        localStorage.setItem(
            "etapaCertificadoBocal",
            "aprovada"
        );

        icone.textContent = "🏆";

        titulo.textContent =
            "APROVADA COM SUCESSO!";

        texto.innerHTML =
            "Resultado: <strong>5/5</strong><br><br>" +
            "Após uma avaliação extremamente rigorosa, " +
            "foi comprovado biomedicamente que Soso conhece " +
            "Lucas até mais do que deveria.";

        botao.textContent =
            "🏆 RECEBER MEU CERTIFICADO";

        botao.onclick =
            abrirAssinaturaBocal;

    } else {

        localStorage.setItem(
            "etapaCertificadoBocal",
            "reprovada"
        );

        icone.textContent = "❌";

        titulo.textContent =
            "REPROVADA NESSA PORRA RAPAZ";

        texto.innerHTML =
            `Resultado: <strong>${pontosBocal}/5</strong><br><br>` +
            "Negra tá maluca é? " +
            "Tá doidinha pra eu ir pro baba sexta feira 🤨😂<br>" +
            "Pra receber o diploma tem que fazer 5/5.";

        botao.textContent =
            "😂 TENTAR NOVAMENTE";

        botao.onclick =
            comecarProvaBocal;

    }

}


/* ========================= */
/* ASSINATURA */
/* ========================= */

function abrirAssinaturaBocal() {

    esconderTelasCertificadoBocal();

    document.getElementById(
        "assinaturaCertificadoBocal"
    ).style.display = "block";

    document.getElementById(
        "voltarMenuCertificado"
    ).style.display = "block";

    localStorage.setItem(
        "etapaCertificadoBocal",
        "assinatura"
    );

    setTimeout(() => {
        prepararCanvasAssinaturaBocal();
    }, 100);

}


/* ========================= */
/* PREPARAR CANVAS */
/* ========================= */

function prepararCanvasAssinaturaBocal() {

    const canvas =
        document.getElementById("canvasAssinaturaBocal");

    if (!canvas) return;

    const area =
        canvas.parentElement.getBoundingClientRect();

    const escala =
        window.devicePixelRatio || 1;

    canvas.width =
        Math.floor(area.width * escala);

    canvas.height =
        Math.floor(area.height * escala);

    const ctx =
        canvas.getContext("2d");

    ctx.setTransform(
        escala,
        0,
        0,
        escala,
        0,
        0
    );

    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#222";


    canvas.onpointerdown = iniciarAssinaturaBocal;
    canvas.onpointermove = desenharAssinaturaBocal;
    canvas.onpointerup = pararAssinaturaBocal;
    canvas.onpointercancel = pararAssinaturaBocal;
    canvas.onpointerleave = pararAssinaturaBocal;

}


/* ========================= */
/* COMEÇAR DESENHO */
/* ========================= */

function iniciarAssinaturaBocal(evento) {

    evento.preventDefault();

    const canvas =
        document.getElementById("canvasAssinaturaBocal");

    const ctx =
        canvas.getContext("2d");

    const posicao =
        pegarPosicaoAssinaturaBocal(evento);

    desenhandoAssinaturaBocal = true;
    assinaturaFoiDesenhadaBocal = true;

    canvas.setPointerCapture?.(
        evento.pointerId
    );

    ctx.beginPath();

    ctx.moveTo(
        posicao.x,
        posicao.y
    );

}


/* ========================= */
/* DESENHAR */
/* ========================= */

function desenharAssinaturaBocal(evento) {

    if (!desenhandoAssinaturaBocal) {
        return;
    }

    evento.preventDefault();

    const canvas =
        document.getElementById("canvasAssinaturaBocal");

    const ctx =
        canvas.getContext("2d");

    const posicao =
        pegarPosicaoAssinaturaBocal(evento);

    ctx.lineTo(
        posicao.x,
        posicao.y
    );

    ctx.stroke();

}


/* ========================= */
/* POSIÇÃO */
/* ========================= */

function pegarPosicaoAssinaturaBocal(evento) {

    const canvas =
        document.getElementById("canvasAssinaturaBocal");

    const rect =
        canvas.getBoundingClientRect();

    return {

        x:
            evento.clientX -
            rect.left,

        y:
            evento.clientY -
            rect.top

    };

}


/* ========================= */
/* PARAR */
/* ========================= */

function pararAssinaturaBocal() {

    desenhandoAssinaturaBocal = false;

}


/* ========================= */
/* LIMPAR */
/* ========================= */

function limparAssinaturaBocal() {

    const canvas =
        document.getElementById("canvasAssinaturaBocal");

    const ctx =
        canvas.getContext("2d");

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    assinaturaFoiDesenhadaBocal = false;

    localStorage.removeItem(
        "assinaturaCertificadoBocal"
    );

    document.getElementById(
        "erroAssinaturaBocal"
    ).textContent = "";

}


/* ========================= */
/* CONFIRMAR ASSINATURA */
/* ========================= */

function confirmarAssinaturaBocal() {

    const erro =
        document.getElementById("erroAssinaturaBocal");

    if (!assinaturaFoiDesenhadaBocal) {

        erro.textContent =
            "Neguinha, assine o documento primeiro 😂✍️";

        return;

    }

    const canvas =
        document.getElementById("canvasAssinaturaBocal");

    const assinatura =
        canvas.toDataURL("image/png");

    localStorage.setItem(
        "assinaturaCertificadoBocal",
        assinatura
    );

    localStorage.setItem(
        "certificadoBocalConquistado",
        "true"
    );

    localStorage.setItem(
        "etapaCertificadoBocal",
        "diploma"
    );

    mostrarDiplomaBocal();

}


/* ========================= */
/* DIPLOMA */
/* ========================= */

function mostrarDiplomaBocal() {

    esconderTelasCertificadoBocal();

    document.getElementById(
        "diplomaBocal"
    ).style.display = "block";

    document.getElementById(
        "voltarMenuCertificado"
    ).style.display = "none";

    const assinatura =
        localStorage.getItem(
            "assinaturaCertificadoBocal"
        );

    if (assinatura) {

        document.getElementById(
            "imagemAssinaturaBocal"
        ).src = assinatura;

    }

    window.scrollTo(0, 0);

}


/* ========================= */
/* CARREGAR ESTADO / F5 */
/* ========================= */

function carregarEstadoCertificadoBocal() {

    const etapa =
        localStorage.getItem(
            "etapaCertificadoBocal"
        );

    const conquistado =
        localStorage.getItem(
            "certificadoBocalConquistado"
        );


    esconderTelasCertificadoBocal();


    if (
        etapa === "diploma" ||
        conquistado === "true"
    ) {

        mostrarDiplomaBocal();

        return;

    }


    if (etapa === "assinatura") {

        abrirAssinaturaBocal();

        return;

    }


    if (etapa === "aprovada") {

        pontosBocal = 5;

        finalizarProvaBocal();

        return;

    }


    if (etapa === "reprovada") {

        pontosBocal =
            Number(
                localStorage.getItem(
                    "pontosBocal"
                )
            ) || 0;

        finalizarProvaBocal();

        return;

    }


    if (etapa === "prova") {

        perguntaAtualBocal =
            Number(
                localStorage.getItem(
                    "perguntaAtualBocal"
                )
            ) || 0;

        pontosBocal =
            Number(
                localStorage.getItem(
                    "pontosBocal"
                )
            ) || 0;


        if (
            perguntaAtualBocal >=
            perguntasCertificadoBocal.length
        ) {

            finalizarProvaBocal();

            return;

        }


        document.getElementById(
            "provaCertificadoBocal"
        ).style.display = "block";

        mostrarPerguntaBocal();

        return;

    }


    document.getElementById(
        "inicioCertificadoBocal"
    ).style.display = "block";

}

function reiniciarCertificadoBocal() {

    // Apaga todo o progresso do certificado
    localStorage.removeItem("etapaCertificadoBocal");
    localStorage.removeItem("perguntaAtualBocal");
    localStorage.removeItem("pontosBocal");
    localStorage.removeItem("certificadoBocalAprovado");
    localStorage.removeItem("certificadoBocalConquistado");
    localStorage.removeItem("assinaturaCertificadoBocal");

    // Reinicia as variáveis
    perguntaAtualBocal = 0;
    pontosBocal = 0;
    provaRespondidaBocal = false;

    desenhandoAssinaturaBocal = false;
    assinaturaFoiDesenhadaBocal = false;

    // Limpa a assinatura que estava no diploma
    const imagemAssinatura =
        document.getElementById("imagemAssinaturaBocal");

    if (imagemAssinatura) {
        imagemAssinatura.removeAttribute("src");
    }

    // Esconde todas as etapas
    esconderTelasCertificadoBocal();

    // Volta para a primeira tela
    document.getElementById(
        "inicioCertificadoBocal"
    ).style.display = "block";

    // Mostra novamente o botão de voltar
    document.getElementById(
        "voltarMenuCertificado"
    ).style.display = "block";

    // Continua registrando que ela está
    // dentro da página do certificado
    salvarTelaAtual("certificadoBocal");

    window.scrollTo(0, 0);
}

/* =========================================================
   GERADOR DO CERTIFICADO EM IMAGEM
   NÃO USA HTML2CANVAS
========================================================= */

async function salvarECompartilharCertificado() {

    try {

        /* =========================================
           TAMANHO FIXO DA IMAGEM
        ========================================= */

        const largura = 1200;
        const altura = 1600;

        const canvas = document.createElement("canvas");

        canvas.width = largura;
        canvas.height = altura;

        const ctx = canvas.getContext("2d");


        /* =========================================
           FUNDO
        ========================================= */

        ctx.fillStyle = "#fffaf0";
        ctx.fillRect(0, 0, largura, altura);


        /* =========================================
           BORDAS DOURADAS
        ========================================= */

        ctx.strokeStyle = "#c79a32";
        ctx.lineWidth = 7;

        ctx.strokeRect(
            15,
            15,
            largura - 30,
            altura - 30
        );

        ctx.lineWidth = 2;

        ctx.strokeRect(
            27,
            27,
            largura - 54,
            altura - 54
        );


        /* =========================================
           TOPO
        ========================================= */

        ctx.textAlign = "center";
        ctx.textBaseline = "middle";


        /* TROFÉUS */

        ctx.font = "55px Arial";

        ctx.fillText(
            "🏆  ❤️  🏆",
            largura / 2,
            100
        );


        /* CURSO */

        ctx.fillStyle = "#555";

        ctx.font =
            "bold 21px Arial";

        ctx.fillText(
            "CURSO OFICIAL DE LUCAS OLIVEIRA",
            largura / 2,
            160
        );


        /* =========================================
           TÍTULO
        ========================================= */

        ctx.fillStyle = "#9b7021";

        ctx.font =
            "bold 50px Georgia";

        ctx.fillText(
            "CERTIFICADO OFICIAL",
            largura / 2,
            245
        );


        ctx.fillStyle = "#444";

        ctx.font =
            "bold 30px Georgia";

        ctx.fillText(
            "MELHOR NAMORADA DO MUNDO",
            largura / 2,
            295
        );


        /* LINHA DOURADA */

        ctx.strokeStyle = "#c79a32";
        ctx.lineWidth = 3;

        ctx.beginPath();

        ctx.moveTo(
            170,
            350
        );

        ctx.lineTo(
            largura - 170,
            350
        );

        ctx.stroke();


        /* =========================================
           INTRODUÇÃO
        ========================================= */

        ctx.fillStyle = "#444";

        ctx.font =
            "25px Arial";


        escreverTextoCentralizado(
            ctx,
            "Certifico para minha vida e todos sempre oficialmente que",
            largura / 2,
            415,
            850,
            37
        );


        /* =========================================
           NOME
        ========================================= */

        ctx.fillStyle = "#e63964";

        ctx.font =
            "bold 47px Georgia";

        ctx.fillText(
            "SOANE REIS",
            largura / 2,
            520
        );


        /* =========================================
           TEXTO DA PROVA
        ========================================= */

        ctx.fillStyle = "#444";

        ctx.font =
            "24px Arial";


        escreverTextoCentralizado(
            ctx,
            "concluiu com aproveitamento máximo o Exame Oficial de Conhecimentos Sobre Lucas, obtendo a impressionante nota de 5/5.",
            largura / 2,
            590,
            930,
            38
        );


        escreverTextoCentralizado(
            ctx,
            "Por meio deste documento, fica oficialmente reconhecida como a",
            largura / 2,
            700,
            900,
            38
        );


        /* =========================================
           TÍTULO DELA
        ========================================= */

        ctx.fillStyle = "#9b7021";

        ctx.font =
            "bold 33px Georgia";

        ctx.fillText(
            "🏆 MELHOR NAMORADA DO MUNDO 🏆",
            largura / 2,
            790
        );


        /* =========================================
           TEXTO ROMÂNTICO
        ========================================= */

        ctx.fillStyle = "#444";

        ctx.font =
            "italic 25px Georgia";


        escreverTextoCentralizado(
            ctx,
            "Mesmo com brigas e dias difíceis, você continua sendo uma pessoa única para mim. Eu amo tudo que construímos juntos e quero que você nunca esqueça o quanto é especial na minha vida. Eu amo você, minha neguinha. ❤️",
            largura / 2,
            860,
            950,
            40
        );


        /* =========================================
           ASSINATURA DA SOANE
        ========================================= */

        const assinatura =
            localStorage.getItem(
                "assinaturaCertificadoBocal"
            );


        if (assinatura) {

            const imagemAssinatura =
                await carregarImagemCertificado(
                    assinatura
                );


            const larguraAssinatura = 300;
            const alturaAssinatura = 110;


            ctx.drawImage(
                imagemAssinatura,

                145,
                1110,

                larguraAssinatura,
                alturaAssinatura
            );

        }


        /* =========================================
           ASSINATURA DO LUCAS
        ========================================= */

        ctx.fillStyle = "#222";

        ctx.font =
            "italic 37px cursive";

        ctx.fillText(
            "Lucas Oliveira",
            850,
            1190
        );


        /* =========================================
           LINHAS DAS ASSINATURAS
        ========================================= */

        ctx.strokeStyle = "#555";
        ctx.lineWidth = 2;


        ctx.beginPath();

        ctx.moveTo(
            100,
            1220
        );

        ctx.lineTo(
            500,
            1220
        );

        ctx.stroke();


        ctx.beginPath();

        ctx.moveTo(
            700,
            1220
        );

        ctx.lineTo(
            1100,
            1220
        );

        ctx.stroke();


        /* =========================================
           NOMES
        ========================================= */

        ctx.fillStyle = "#222";

        ctx.font =
            "bold 21px Arial";


        ctx.fillText(
            "Soane Reis",
            300,
            1255
        );


        ctx.fillText(
            "Lucas Oliveira",
            900,
            1255
        );


        ctx.fillStyle = "#555";

        ctx.font =
            "18px Arial";


        ctx.fillText(
            "Melhor Namorada do Mundo",
            300,
            1285
        );


        ctx.fillText(
            "Namorado e avaliador",
            900,
            1285
        );


        /* =========================================
           LINHA DO RODAPÉ
        ========================================= */

        ctx.strokeStyle = "#d5bd7a";
        ctx.lineWidth = 2;

        ctx.beginPath();

        ctx.moveTo(
            90,
            1360
        );

        ctx.lineTo(
            1110,
            1360
        );

        ctx.stroke();


        /* =========================================
           RODAPÉ
        ========================================= */

        ctx.fillStyle = "#333";

        ctx.font =
            "bold 17px Arial";


        ctx.textAlign = "left";

        ctx.fillText(
            "Certificado Nº SOSO-0001",
            90,
            1405
        );


        ctx.textAlign = "right";

        ctx.fillText(
            "Validade: para sempre ❤️",
            1110,
            1405
        );


        ctx.textAlign = "center";

        ctx.fillStyle = "#555";

        ctx.font =
            "16px Arial";

        ctx.fillText(
            "🔒 Documento irrevogável e intransferível",
            largura / 2,
            1465
        );


        /* =========================================
           TRANSFORMA EM PNG
        ========================================= */

        const blob =
            await new Promise(resolve => {

                canvas.toBlob(
                    resolve,
                    "image/png"
                );

            });


        if (!blob) {

            throw new Error(
                "Não foi possível gerar a imagem."
            );

        }


        /* =========================================
           CRIA ARQUIVO
        ========================================= */

        const arquivo =
            new File(

                [blob],

                "certificado-soane.png",

                {
                    type: "image/png"
                }

            );


        /* =========================================
           CELULAR → COMPARTILHAR
        ========================================= */

        if (
            navigator.share &&
            navigator.canShare &&
            navigator.canShare({
                files: [arquivo]
            })
        ) {

            await navigator.share({

                files: [arquivo],

                title:
                    "Certificado Oficial da Soso ❤️",

                text:
                    "Documento oficial ❤️"

            });

            return;

        }


        /* =========================================
           PC → DOWNLOAD
        ========================================= */

        const url =
            URL.createObjectURL(blob);


        const link =
            document.createElement("a");


        link.href =
            url;

        link.download =
            "certificado-soane.png";


        document.body.appendChild(
            link
        );


        link.click();


        link.remove();


        setTimeout(() => {

            URL.revokeObjectURL(url);

        }, 1000);


    } catch (erro) {

        if (
            erro.name === "AbortError"
        ) {

            return;

        }


        console.error(
            "Erro ao gerar certificado:",
            erro
        );


        alert(
            "Não consegui gerar o certificado 😭"
        );

    }

}


/* =========================================================
   ESCREVER TEXTO COM QUEBRA AUTOMÁTICA
========================================================= */

function escreverTextoCentralizado(
    ctx,
    texto,
    x,
    y,
    larguraMaxima,
    alturaLinha
) {

    const palavras =
        texto.split(" ");

    let linha = "";

    const linhas = [];


    for (
        let i = 0;
        i < palavras.length;
        i++
    ) {

        const teste =
            linha +
            palavras[i] +
            " ";


        const larguraTeste =
            ctx.measureText(
                teste
            ).width;


        if (
            larguraTeste >
            larguraMaxima &&
            linha !== ""
        ) {

            linhas.push(
                linha.trim()
            );

            linha =
                palavras[i] +
                " ";

        } else {

            linha = teste;

        }

    }


    if (linha.trim() !== "") {

        linhas.push(
            linha.trim()
        );

    }


    linhas.forEach(
        (linhaAtual, indice) => {

            ctx.fillText(
                linhaAtual,
                x,
                y +
                indice *
                alturaLinha
            );

        }
    );


    return (
        y +
        linhas.length *
        alturaLinha
    );

}


/* =========================================================
   CARREGAR ASSINATURA
========================================================= */

function carregarImagemCertificado(src) {

    return new Promise(
        (resolve, reject) => {

            const imagem =
                new Image();


            imagem.onload = () => {

                resolve(
                    imagem
                );

            };


            imagem.onerror = () => {

                reject(
                    new Error(
                        "Erro ao carregar assinatura."
                    )
                );

            };


            imagem.src = src;

        }
    );

}

/* ========================================
   PRÓXIMO ENCONTRO
======================================== */

/*
    É SÓ ALTERAR ESSAS INFORMAÇÕES
    QUANDO VOCÊS MARCAREM UM ENCONTRO
*/

const proximoEncontro = {

    // formato: ANO-MÊS-DIA
    data: "2026-09-27",

    // formato: HORA:MINUTO
    horario: "15:00",

    local: "Rede Andrade Ondina",

     maps: "https://maps.app.goo.gl/RLjgDxD2ig2UkXQ36",

    // escreva aqui a SUA frase
    recado: "VOU FICAR AGARRADINHO COM MEU QUEIJO DO REINO ❤️"
};


let intervaloProximoEncontro = null;


function abrirProximoEncontro() {

    const menu = document.getElementById("menu");
    const pagina = document.getElementById("paginaProximoEncontro");

    if (menu) {
        menu.style.display = "none";
    }

    if (pagina) {
        pagina.style.display = "flex";
    }

    salvarTelaAtual("proximoEncontro");

    carregarProximoEncontro();

    window.scrollTo(0, 0);
}


function carregarProximoEncontro() {

    const data = criarDataProximoEncontro();

    mostrarInformacoesEncontro(data);

    atualizarContagemEncontro();

    if (intervaloProximoEncontro) {
        clearInterval(intervaloProximoEncontro);
    }

    intervaloProximoEncontro = setInterval(
        atualizarContagemEncontro,
        1000
    );
}


function criarDataProximoEncontro() {

    const partesData = proximoEncontro.data.split("-");
    const partesHorario = proximoEncontro.horario.split(":");

    const ano = Number(partesData[0]);
    const mes = Number(partesData[1]) - 1;
    const dia = Number(partesData[2]);

    const hora = Number(partesHorario[0]);
    const minuto = Number(partesHorario[1]);

    return new Date(
        ano,
        mes,
        dia,
        hora,
        minuto,
        0
    );
}


function mostrarInformacoesEncontro(data) {

    const diaSemana = document.getElementById("diaSemanaEncontro");
    const dataTexto = document.getElementById("dataEncontro");
    const horario = document.getElementById("horarioEncontro");
    const local = document.getElementById("localEncontro");
    const linkLocal = document.getElementById("linkLocalEncontro");
    const recado = document.getElementById("recadoProximoEncontro");


    if (diaSemana) {

        diaSemana.textContent =
            data
                .toLocaleDateString(
                    "pt-BR",
                    { weekday: "long" }
                )
                .toUpperCase();
    }


    if (dataTexto) {

        dataTexto.textContent =
            data
                .toLocaleDateString(
                    "pt-BR",
                    {
                        day: "2-digit",
                        month: "long"
                    }
                )
                .toUpperCase();
    }


    if (horario) {
        horario.textContent = proximoEncontro.horario;
    }


    if (local) {
        local.textContent = proximoEncontro.local;
    }

    if (linkLocal) {
    linkLocal.href = proximoEncontro.maps;
}

    if (recado) {
        recado.textContent = proximoEncontro.recado;
    }
}


function atualizarContagemEncontro() {

    const agora = new Date();

    const encontro = criarDataProximoEncontro();

    const diferenca = encontro - agora;


    const elementoDias =
        document.getElementById("diasEncontro");

    const elementoHoras =
        document.getElementById("horasEncontro");

    const elementoMinutos =
        document.getElementById("minutosEncontro");

    const elementoSegundos =
        document.getElementById("segundosEncontro");

    const mensagem =
        document.getElementById("mensagemEncontro");


    /*
        ENCONTRO JÁ CHEGOU
    */

    if (diferenca <= 0) {

        if (elementoDias) elementoDias.textContent = "00";
        if (elementoHoras) elementoHoras.textContent = "00";
        if (elementoMinutos) elementoMinutos.textContent = "00";
        if (elementoSegundos) elementoSegundos.textContent = "00";

        if (mensagem) {
            mensagem.textContent =
                "❤️ CHEGOU O DIA! VOU FICAR AGARRADINHO COM SOSO.";
        }

        if (intervaloProximoEncontro) {
            clearInterval(intervaloProximoEncontro);
            intervaloProximoEncontro = null;
        }

        return;
    }


    /*
        CÁLCULO DO TEMPO
    */

    const segundosTotais =
        Math.floor(diferenca / 1000);

    const dias =
        Math.floor(segundosTotais / 86400);

    const horas =
        Math.floor((segundosTotais % 86400) / 3600);

    const minutos =
        Math.floor((segundosTotais % 3600) / 60);

    const segundos =
        segundosTotais % 60;


    if (elementoDias) {
        elementoDias.textContent =
            String(dias).padStart(2, "0");
    }

    if (elementoHoras) {
        elementoHoras.textContent =
            String(horas).padStart(2, "0");
    }

    if (elementoMinutos) {
        elementoMinutos.textContent =
            String(minutos).padStart(2, "0");
    }

    if (elementoSegundos) {
        elementoSegundos.textContent =
            String(segundos).padStart(2, "0");
    }


    /*
        MENSAGENS AUTOMÁTICAS
    */

    const horasTotais =
        diferenca / (1000 * 60 * 60);


    if (horasTotais <= 24) {

        if (mensagem) {
            mensagem.textContent =
                "É AMANHÃ! Falta muito pouco ❤️";
        }

    } else {

        if (mensagem) {
            mensagem.textContent =
                "❤️ Tá chegando viu...";
        }
    }


    /*
        SE JÁ FOR O MESMO DIA
    */

    const mesmoDia =
        agora.getFullYear() === encontro.getFullYear() &&
        agora.getMonth() === encontro.getMonth() &&
        agora.getDate() === encontro.getDate();


    if (mesmoDia && mensagem) {

        mensagem.textContent =
            "❤️ É HOJE!!! Finalmente vou ver neguinha.";
    }
}

/* ========================================
   LISTA DE DESEJOS DA SOSO
======================================== */

let desejosSoso = JSON.parse(
    localStorage.getItem("desejosSoso")
) || [];


/* ABRIR PÁGINA */

function abrirListaDesejos() {

    const menu = document.getElementById("menu");
    const pagina = document.getElementById("paginaListaDesejos");

    if (menu) {
        menu.style.display = "none";
    }

    if (pagina) {
        pagina.style.display = "flex";
    }

    salvarTelaAtual("listaDesejos");

    renderizarDesejos();

    window.scrollTo(0, 0);
}


/* IDENTIFICAR LOJA */

function identificarLojaPeloLink(link) {

    const linkMinusculo = link.toLowerCase();

    if (
        linkMinusculo.includes("shein.com") ||
        linkMinusculo.includes("shein.com.br") ||
        linkMinusculo.includes("onelink.shein.com")
    ) {
        return "SHEIN";
    }

    if (
        linkMinusculo.includes("tiktok.com") ||
        linkMinusculo.includes("shop.tiktok")
    ) {
        return "TikTok Shop";
    }

    return "Outra loja";
}

function extrairLinkDesejo(texto) {

    if (!texto) return "";

    const encontrou = texto.match(/https?:\/\/[^\s\]\)]+/i);

    if (!encontrou) {
        return "";
    }

    return encontrou[0];
}


function identificarLojaDesejo() {

    const input = document.getElementById("linkDesejo");
    const resultado = document.getElementById("lojaIdentificada");

    if (!input || !resultado) return;

    const textoColado = input.value.trim();

    if (textoColado === "") {

        resultado.textContent =
            "🔍 Cole um link para identificar a loja";

        return;
    }

    const link = extrairLinkDesejo(textoColado);

    if (!link) {

        resultado.textContent =
            "⚠️ Nenhum link encontrado";

        return;
    }

    const loja = identificarLojaPeloLink(link);

    if (loja === "SHEIN") {

        resultado.textContent =
            "🛍️ Loja identificada: SHEIN ✓";

    } else if (loja === "TikTok Shop") {

        resultado.textContent =
            "🎵 Loja identificada: TikTok Shop ✓";

    } else {

        resultado.textContent =
            "🌐 Loja identificada: Outra loja";
    }
}


/* CONVERTER PREÇO */

function converterPrecoDesejo(valor) {

    let texto = valor
        .trim()
        .replace(/R\$/gi, "")
        .replace(/\s/g, "");


    /*
        Exemplo:
        1.299,90
        vira
        1299.90
    */

    if (texto.includes(",")) {

        texto = texto
            .replace(/\./g, "")
            .replace(",", ".");

    }

    const numero = Number(texto);

    if (!Number.isFinite(numero)) {
        return null;
    }

    if (numero <= 0) {
        return null;
    }

    return numero;
}


/* VALIDAR LINK */

function linkDesejoValido(link) {

    try {

        const url = new URL(link);

        return (
            url.protocol === "http:" ||
            url.protocol === "https:"
        );

    } catch {

        return false;
    }
}


/* ADICIONAR PRODUTO */

function adicionarDesejo() {

    const campoLink =
        document.getElementById("linkDesejo");

    const campoNome =
        document.getElementById("nomeDesejo");

    const campoPreco =
        document.getElementById("precoDesejo");

    const erro =
        document.getElementById("erroDesejo");


    if (!campoLink || !campoNome || !campoPreco) {
        return;
    }


    const textoLink = campoLink.value.trim();

const link = textoLink !== ""
    ? extrairLinkDesejo(textoLink)
    : "";
    const nome = campoNome.value.trim();
    const preco = converterPrecoDesejo(
        campoPreco.value
    );


    if (erro) {
        erro.textContent = "";
    }


   /* LINK É OPCIONAL */

if (link !== "" && !linkDesejoValido(link)) {

    if (erro) {
        erro.textContent =
            "Esse link não parece válido 👀";
    }

    return;

    

}

if (textoLink !== "" && link === "") {

    if (erro) {
        erro.textContent =
            "Não encontrei nenhum link nesse texto 👀";
    }

    return;
}

    /* NOME */

    if (nome === "") {

        if (erro) {
            erro.textContent =
                "Escreve o nome do produto ❤️";
        }

        return;
    }


    /* PREÇO */

    if (preco === null) {

        if (erro) {
            erro.textContent =
                "Coloca um preço válido. Ex: 89,90";
        }

        return;
    }


    const loja =
    link !== ""
        ? identificarLojaPeloLink(link)
        : "";

    const novoDesejo = {

        id: Date.now(),

        nome: nome,

        preco: preco,

        link: link,

        loja: loja
    };


    desejosSoso.push(novoDesejo);


    salvarDesejosSoso();


    /* LIMPAR CAMPOS */

    campoLink.value = "";
    campoNome.value = "";
    campoPreco.value = "";


    const lojaIdentificada =
        document.getElementById("lojaIdentificada");

    if (lojaIdentificada) {

        lojaIdentificada.textContent =
            "🔍 Cole um link para identificar a loja";
    }


    renderizarDesejos();
}


/* SALVAR */

function salvarDesejosSoso() {

    localStorage.setItem(
        "desejosSoso",
        JSON.stringify(desejosSoso)
    );
}


/* FORMATAR DINHEIRO */

function formatarDinheiroDesejo(valor) {

    return valor.toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );
}


/* SEGURANÇA DO TEXTO */

function escaparHTMLDesejo(texto) {

    const div =
        document.createElement("div");

    div.textContent = texto;

    return div.innerHTML;
}


/* RENDERIZAR CARRINHO */

function renderizarDesejos() {

    const lista =
        document.getElementById("listaProdutosDesejos");

    const vazio =
        document.getElementById("carrinhoVazioSoso");

    const quantidade =
        document.getElementById("quantidadeDesejos");

    const resumo =
        document.getElementById("resumoDesejos");

    const totalElemento =
        document.getElementById("totalDesejos");

    const botaoWhats =
        document.getElementById("botaoCompartilharDesejos");


    if (!lista) return;


    lista.innerHTML = "";


    /* QUANTIDADE */

    if (quantidade) {

        quantidade.textContent =
            desejosSoso.length === 1
                ? "1 produto"
                : `${desejosSoso.length} produtos`;
    }


    /* CARRINHO VAZIO */

    if (desejosSoso.length === 0) {

        if (vazio) {
            vazio.style.display = "block";
        }

        if (resumo) {
            resumo.style.display = "none";
        }

        if (botaoWhats) {
            botaoWhats.style.display = "none";
        }

        return;
    }


    if (vazio) {
        vazio.style.display = "none";
    }

    if (resumo) {
        resumo.style.display = "flex";
    }

    if (botaoWhats) {
        botaoWhats.style.display = "block";
    }


    let total = 0;


    desejosSoso.forEach((produto) => {

        total += produto.preco;


        const card =
            document.createElement("div");

        card.className =
            "card-desejo";


        card.innerHTML = `
            <div class="topo-card-desejo">

                <div class="info-card-desejo">

                    <span class="loja-card-desejo">
                        ${escaparHTMLDesejo(produto.loja)}
                    </span>

                    <div class="nome-card-desejo">
                        ${escaparHTMLDesejo(produto.nome)}
                    </div>

                    <strong class="preco-card-desejo">
                        ${formatarDinheiroDesejo(produto.preco)}
                    </strong>

                </div>

                <button
                    class="botao-remover-desejo"
                    onclick="removerDesejo(${produto.id})"
                    title="Remover produto"
                >
                    🗑️
                </button>

            </div>
        `;


        lista.appendChild(card);
    });


    if (totalElemento) {

        totalElemento.textContent =
            formatarDinheiroDesejo(total);
    }
}

    if (produto.link) {
    mensagem += `🔗 ${produto.link}\n`;
}

mensagem += "\n";


/* REMOVER */

function removerDesejo(id) {

    desejosSoso =
        desejosSoso.filter(
            produto => produto.id !== id
        );


    salvarDesejosSoso();

    renderizarDesejos();
}


/* COMPARTILHAR PELO WHATSAPP */

function compartilharDesejosWhatsApp() {

    if (desejosSoso.length === 0) {
        return;
    }


    let total = 0;


    let mensagem =
        "*Lista de Desejos da Soso*\n\n";


    desejosSoso.forEach(
        (produto, indice) => {

            total += produto.preco;


            mensagem +=
                `${indice + 1}. *${produto.nome}*\n`;

            mensagem +=
                ` ${produto.loja}\n`;

            mensagem +=
                `${formatarDinheiroDesejo(produto.preco)}\n`;

            mensagem +=
                ` ${produto.link}\n\n`;
        }
    );


    mensagem +=
        ` *TOTAL: ${formatarDinheiroDesejo(total)}*\n\n`;

    mensagem +=
        "Compra pra mim, meu amor\n\n";


    /*
        ABRE O WHATSAPP.
        NÃO PRECISA COLOCAR SEU NÚMERO NO CÓDIGO.
    */

    const numeroLuquinhas = "5571988214998";

const url =
    "https://wa.me/" +
    numeroLuquinhas +
    "?text=" +
    encodeURIComponent(mensagem);


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );
}