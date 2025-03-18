const phrases = [
    "Aprenda de forma rápida e iterativa",
    "Leia de forma simples e direta",
    "Encontre novos horizontes",
    "Descubra o prazer da leitura",
    "Transforme conhecimento em ação"
];

let currentIndex = 0;
const textElement = document.querySelector('.animated-text');

function changeText() {
    textElement.classList.add('fade-out');
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % phrases.length;
        textElement.textContent = phrases[currentIndex];
        textElement.classList.remove('fade-out');
        textElement.classList.add('fade-in');
    }, 500);
}

setInterval(changeText, 4000);
