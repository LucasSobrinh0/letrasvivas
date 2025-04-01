// Array de frases
const phrases = [
    "Aprenda de forma rápida e iterativa",
    "Leia de forma simples e direta",
    "Encontre novos horizontes",
    "Descubra o prazer da leitura",
    "Transforme conhecimento em ação"
];

// Configurações
const TEXT_ELEMENT_SELECTOR = '.animated-text';
const FADE_OUT_CLASS = 'fade-out';
const FADE_IN_CLASS = 'fade-in';
const INTERVAL_TIME = 4000; // 4 segundos
const TRANSITION_TIME = 500; // 0.5 segundos

// Seleciona o elemento HTML
const textElement = document.querySelector(TEXT_ELEMENT_SELECTOR);
let currentIndex = 0;

// Função para trocar o texto
function changeText() {
    // Aplica o fade-out
    textElement.classList.add(FADE_OUT_CLASS);

    // Aguarda o tempo da transição antes de atualizar o texto
    setTimeout(() => {
        // Atualiza o índice para a próxima frase
        currentIndex = (currentIndex + 1) % phrases.length;

        // Altera o texto
        textElement.textContent = phrases[currentIndex];

        // Remove o fade-out e aplica o fade-in
        textElement.classList.remove(FADE_OUT_CLASS);
        textElement.classList.add(FADE_IN_CLASS);
    }, TRANSITION_TIME);
}

// Inicia o loop de animação
setInterval(changeText, INTERVAL_TIME);