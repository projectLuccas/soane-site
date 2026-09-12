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
        "🎉 Você acertou tudo! Sabia que você conhecia a gente ❤️";

    setTimeout(() => {

        document.getElementById("quiz").style.display = "none";

        document.getElementById("menu").style.display = "flex";

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

function abrirPaginaPrincipal() {

    document.getElementById("menu").style.display = "none";

    document.getElementById("site").style.display = "block";

    window.scrollTo(0, 0);
}

function voltarAoMenu() {

    document.getElementById("site").style.display = "none";

    document.getElementById("paginaMomentos").style.display = "none";

    document.getElementById("paginaMensagem").style.display = "none";

    document.getElementById("paginaSoane").style.display = "none";

    document.getElementById("paginaSurpresa").style.display = "none";

    document.getElementById("paginaReclamacoes").style.display = "none";

    document.getElementById("menu").style.display = "flex";

    window.scrollTo(0, 0);
}

function abrirMomentos() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("paginaMomentos").style.display = "flex";

    fotoAtual = 0;
    atualizarGaleria();

    window.scrollTo(0, 0);
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
    EDITE AS RECLAMAÇÕES AQUI
*/

const reclamacoesSoso = [
    "Você tá chato Lucas",
    "Você tá demorando para responder Lucas",
    "Você tá errado Lucas",
    "Você não tá me dando atenção Lucas"
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


/*
    Abre a página
*/

function abrirReclamacoes() {

    document.getElementById("menu").style.display = "none";

    document.getElementById("paginaReclamacoes").style.display = "flex";

    carregarReclamacoes();

    document.getElementById("resultadoReclamacao").style.display = "none";

    document.getElementById("botaoCompartilhar").style.display = "none";

    window.scrollTo(0, 0);
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