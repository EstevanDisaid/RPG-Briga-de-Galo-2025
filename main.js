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
                texto: "Galo forte e medio de defesa",
                afirmacao: "Você sempre gostou de briga de galo e aos 10 anos entrou para o clube de briga de galo e escolheu o Galo com maior ataque e seguiu treinando para aprimorar suas skills de ataque "
            },

            {
                texto: "Galo resitente e medio de força ",
                afirmacao: "Você sempre gostou de briga de galo e aos 10 anos entrou para o clube de briga de galo e escolheu o Galo com maior defesa e seguiu treinando para aprimorar suas skills de defesa"
            }
        ]
    },
    {
        enunciado: "Você",
        alternativas: [
            {
                texto: "alternativa 03",
                afirmacao: "resultado 03"
            },

            {
                texto: "alternativa 04",
                afirmacao: "resultado 04"
            }
        ]
    },

    {
        enunciado: "Pergunta 3",
        alternativas: [
            {
                texto: "alternativa 05",
                afirmacao: "resultado 05"
            },

            {
                texto: "alternativa 06",
                afirmacao: "resultado 06"
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


