// Seleciona os elementos necessários
const sections = document.querySelectorAll('.section');
const progressBar = document.getElementById('progress-bar');
const scrollDownArrow = document.getElementById('scroll-down-arrow');
const sectionsContainer = document.querySelector('.sections');

let currentSectionIndex = 0;

// Pré-calcula as posições das seções
const sectionPositions = Array.from(sections).map((section) => section.offsetTop);

// Atualiza a barra de progresso
function updateProgressBar() {
    const scrollTop = sectionsContainer.scrollTop;
    const maxScroll = sectionsContainer.scrollHeight - sectionsContainer.clientHeight;
    const progress = Math.min((scrollTop / maxScroll) * 100, 100); // Limita a 100%
    progressBar.style.width = `${progress}%`;
}

// Atualiza a seção atual com base nas posições pré-calculadas
function updateCurrentSection() {
    const scrollTop = sectionsContainer.scrollTop + window.innerHeight / 2; // Centraliza a detecção
    sectionPositions.forEach((position, index) => {
        if (scrollTop >= position) {
            currentSectionIndex = index;
        }
    });
}

// Função throttle para limitar chamadas repetidas
function throttle(func, delay) {
    let lastCall = 0;
    return function (...args) {
        const now = new Date().getTime();
        if (now - lastCall >= delay) {
            lastCall = now;
            func.apply(this, args);
        }
    };
}

// Adiciona o evento de scroll com throttle
let isScrolling = false;
sectionsContainer.addEventListener('scroll', throttle(() => {
    if (!isScrolling) {
        sectionsContainer.classList.add('scrolling'); // Remove transições
        requestAnimationFrame(() => {
            updateProgressBar();
            updateCurrentSection();
            isScrolling = false;
        });
        isScrolling = true;
    }
}, 100));

// Reativa transições após o scroll
sectionsContainer.addEventListener('scrollend', () => {
    sectionsContainer.classList.remove('scrolling'); // Reativa transições
});

// Função para ir para a próxima seção
function scrollToNextSection() {
    if (currentSectionIndex < sections.length - 1) {
        currentSectionIndex++;
    } else {
        currentSectionIndex = 0; // Volta ao topo
    }

    // Rola suavemente para a próxima seção
    sectionsContainer.scrollTo({
        top: sectionPositions[currentSectionIndex],
        behavior: 'smooth',
    });
}

// Adiciona o evento de clique ao botão de avançar
scrollDownArrow.addEventListener('click', scrollToNextSection);

// Inicialização
updateProgressBar();
updateCurrentSection();