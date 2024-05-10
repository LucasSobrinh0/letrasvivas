let phrases = [
    "Aprenda de forma rápida e iterativa",
    "Leia de forma simples e direta",
    "Encontre novos horizontes"
];
let currentIndex = 0;

function changeText() {
    const textElement = document.querySelector('.animated-text');
    currentIndex = (currentIndex + 1) % phrases.length;
    textElement.style.opacity = '0';
    setTimeout(() => {
        textElement.innerText = phrases[currentIndex];
        textElement.style.opacity = '1';
    }, 500); // Espera meio segundo para mudar a opacidade e iniciar a nova frase
}

// Inicializa a primeira transição imediatamente após a página carregar
setInterval(changeText, 1200);
