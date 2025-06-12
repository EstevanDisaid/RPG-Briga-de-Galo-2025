const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');
const perguntas = [

    {
        enunciado: "Pergunta 1",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            "Alternativa 3",
            "Alterantiva 4"
        ]
    },
 
    {
        enunciado: "Pergunta 3",
        alternativas: [
            "Alternativa 5",
            "Alterantiva 6"
        ]
    },

    {
        enunciado: "Pergunta 4",
        alternativas: [
            "Alternativa 7",
            "Alterantiva 8"
        ]
    }
]

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
perguntaAtual = perguntas[atual]
caixaPerguntas.textContent = perguntaAtual.enunciado
}


mostraPergunta();

console.log(perguntas)