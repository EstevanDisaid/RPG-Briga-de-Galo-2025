const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');
const perguntas = [

    {
        enunciado: "Você tem 10 anos e decide entrar pra o clube de briga de galo da sua cidade, porém é obrigado a fazer uma importante escolha de galos.",
        alternativas: [
            {
                texto: "Galo forte e medio de defesa.",
                afirmacao: "Você sempre gostou de briga de galo e aos 10 anos entrou para o clube de briga de galo e escolheu o Galo com maior ataque e seguiu treinando para aprimorar suas skills de ataque."
            },

            {
                texto: "Galo resitente e medio de força.",
                afirmacao: "Você sempre gostou de briga de galo e aos 10 anos entrou para o clube de briga de galo e escolheu o Galo com maior defesa e seguiu treinando para aprimorar suas skills de defesa."
            }
        ]
    },
    {
        enunciado: "Você foi disputar seu primeiro campeonato regional numa cidade proxima, porém você não tinha dinheiro para a passagem e teve que decidir entre pagar a conta de luz ou sua passagem.",
        alternativas: [
            {
                texto: "Pagar a passagem.",
                afirmacao: "Você decidiu que iria pagar a passagem e investir no seu sonho, você acabou ganhando o campeonato amador e conseguiu mais dinhero para poder invetir em seu sonho."
            },

            {
                texto: "Pagar a conta de luz.",
                afirmacao: "Você decidiu pagar a conta de luz devido isso não pode participar do campeonato, e acabou perdendo algumas oportunidades. "
            }
        ]
    },

    {
        enunciado: "Ao longo de sua jornada você, conheceu diversas pessoas boas e pessoas de mau caráter. Certo dia você foi chamado para sair com uns caras barra pesada, mas também havia combinado de sair com caras gente boa, e acabou tendo que escolher apenas um grupo para sair. ",
        alternativas: [
            {
                texto: "Sair com os caras barra pesada.",
                afirmacao: "Naquela noite, vocês curtiram bastante porém, cometeram alguns delitos, devido isso você ficou com má fama."
            },

            {
                texto: "Sair com os caras gente boa",
                afirmacao: "Naquela noite, vocês aproveitaram muito e defenderam um grupo de senhoras de delinquentes com seus Galomóns"
            }
        ]
    },

    {
        enunciado: "Pergunta 4",
        alternativas: [
            {
                texto: "alternativa 07",
                afirmacao: "resultado 07"
            },

            {
                texto: "alternativa 08",
                afirmacao: "resultado 08"
            }
        ]
    }
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostreResultado();
        return;
    }
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado
    caixaAlternativas.textContent = ""
    mostraAlternativas()
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button")
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao
    historiaFinal += afirmacao + " "
    atual++
    mostraPergunta();
}
function mostreResultado() {
    caixaPerguntas.textContent = "Tudo se iniciou em 1980..."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}


mostraPergunta();

console.log(perguntas)


