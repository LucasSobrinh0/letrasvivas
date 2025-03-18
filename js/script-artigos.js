// Seleciona os elementos necessários
const sections = document.querySelectorAll('.section');
const progressBar = document.getElementById('progress-bar');
const scrollDownArrow = document.getElementById('scroll-down-arrow');
const sectionsContainer = document.querySelector('.sections');

let currentSectionIndex = 0;

// Atualiza a barra de progresso
function updateProgressBar() {
    const scrollTop = sectionsContainer.scrollTop;
    const scrollHeight = sectionsContainer.scrollHeight - sectionsContainer.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = `${scrollPercent}%`;
}

// Evento de scroll nas seções
sectionsContainer.addEventListener('scroll', () => {
    updateProgressBar();
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            currentSectionIndex = index;
        }
    });
});

// Função para ir para a próxima seção
function scrollToNextSection() {
    if (currentSectionIndex < sections.length - 1) {
        currentSectionIndex++;
        sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
    } else {
        // Se estiver na última seção, volta ao topo
        sections[0].scrollIntoView({ behavior: 'smooth' });
        currentSectionIndex = 0;
    }
}

scrollDownArrow.addEventListener('click', scrollToNextSection);

// Inicialização
updateProgressBar();
