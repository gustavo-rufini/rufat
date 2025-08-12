const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O Caldeirão está em chamas para a final! Athletico Paranaense e Flamengo se enfrentam. Qual a sensação que domina a Arena da Baixada antes do apito inicial?",
        alternativas: [
            {
                texto: "Tensão silenciosa e nervosismo, com torcedores apreensivos.",
                afirmacao: "A Arena da Baixada pulsava com a energia do Furacão. A torcida rubro-negra, em um só coro, empurrava o time para a glória, prometendo uma noite inesquecível. "
            },
            {
                texto: "Gritos de 'Uh, é Furacão!' e uma paixão avassaladora vinda das arquibancadas.",
                afirmacao: "O ar no Caldeirão era denso de expectativa, eletrizado pela paixão do torcedor athleticano. Cada canto da Arena da Baixada ecoava a força do Furacão. "
            }
        ]
    },
    {
        enunciado: "O jogo começa e o Flamengo tenta ditar o ritmo. Como o Athletico Paranaense se posiciona para conter o adversário e buscar o gol?",
        alternativas: [
            {
                texto: "Com uma defesa compacta e apostando nos contra-ataques rápidos.",
                afirmacao: "O Furacão, com sua garra característica, não dava moleza. A defesa athleticana era uma barreira intransponível, desarmando as investidas adversárias e construindo jogadas perigosas. "
            },
            {
                texto: "Pressionando a saída de bola do Flamengo e buscando o ataque desde o início.",
                afirmacao: "O jogo começou com intensidade. O Flamengo tentava criar, mas o Athletico mostrava sua força na marcação e na transição rápida para o ataque. "
            }
        ]
    },
    {
        enunciado: "No segundo tempo, a emoção atinge o pico. Por volta dos 70 minutos, uma jogada chave acontece. Quem é o herói e como ele marca para o Furacão?",
        alternativas: [
            {
                texto: "Canobbio, que faz uma jogada individual pela ponta e finaliza com precisão no canto.",
                afirmacao: "Num lance de pura magia, Canobbio arrancou pela direita, deixou marcadores para trás e, com um chute colocado, estufou as redes! O Caldeirão explodiu em delírio rubro-negro. "
            },
            {
                texto: "Vitor Roque, que se antecipa à zaga em um cruzamento e cabeceia para o gol.",
                afirmacao: "A Arena tremeu com o gol que abriu o placar! A jogada foi construída com inteligência, culminando na rede adversária. "
            }
        ]
    },
    {
        enunciado: "Com a desvantagem, o Flamengo parte para o tudo ou nada. Como a equipe athleticana se porta para segurar a vitória nos minutos finais?",
        alternativas: [
            {
                texto: "Mantenha a intensidade na marcação e utilize a posse de bola para gastar o tempo.",
                afirmacao: "A zaga do Furacão, liderada com maestria por Thiago Heleno, parecia intransponível. Bento fez defesas milagrosas, garantindo o resultado suado e merecido. "
            },
            {
                texto: "Recua as linhas e se defende com unhas e dentes, buscando o apito final.",
                afirmacao: "O Flamengo pressionou, mas a união e a raça do Athletico foram maiores. Cada jogador se doou ao máximo para segurar a vantagem até o fim. "
            }
        ]
    },
    {
        enunciado: "O árbitro apita o fim de jogo! Qual a cena que se desenrola na Arena da Baixada?",
        alternativas: [
            {
                texto: "Festa apoteótica da torcida rubro-negra e comemoração emocionada dos jogadores.",
                afirmacao: "O apito final foi um grito de libertação! O Athletico Paranaense é campeão! Jogadores e torcida se uniram em uma festa contagiante, a consagração de um trabalho árduo. "
            },
            {
                texto: "Comemoração discreta, valorizando a dificuldade da conquista.",
                afirmacao: "A taça, erguida aos céus da Arena da Baixada, brilhava intensamente, símbolo da força e da paixão do Furacão. A comemoração se estendeu pela madrugada, com a capital paranaense em festa. "
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual < perguntas.length) {
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        caixaAlternativas.innerHTML = "";
        mostraAlternativas();
    } else {
        mostraResultado();
    }
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacaoAtual = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacaoAtual;
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    caixaAlternativas.textContent = "";
    caixaResultado.style.display = "block";
    textoResultado.textContent = "A história do jogo, de acordo com suas escolhas:\n\n" + historiaFinal;
}

mostraPergunta();
