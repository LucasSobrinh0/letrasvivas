document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const progressBar = document.getElementById('progress-bar');
    const scrollDownArrow = document.getElementById('scroll-down-arrow');
    const sectionsContainer = document.querySelector('.sections');

    let currentSectionIndex = 0;
    let sectionPositions = [];

    // Função para recalcular posições baseado no container
    function calculateSectionPositions() {
        sectionPositions = Array.from(sections).map(section => section.offsetTop);
    }

    // Atualiza barra de progresso
    function updateProgressBar() {
        const scrollTop = sectionsContainer.scrollTop;
        const maxScroll = sectionsContainer.scrollHeight - sectionsContainer.clientHeight;
        const progress = Math.min((scrollTop / maxScroll) * 100, 100);
        progressBar.style.width = `${progress}%`;
    }

    // Atualiza a seção atual
    function updateCurrentSection() {
        const scrollTop = sectionsContainer.scrollTop + sectionsContainer.clientHeight / 2;
        sectionPositions.forEach((pos, index) => {
            if (scrollTop >= pos) currentSectionIndex = index;
        });
    }

    // Throttle (ajustado)
    function throttle(func, delay) {
        let timeout = null;
        return function (...args) {
            if (!timeout) {
                timeout = setTimeout(() => {
                    func.apply(this, args);
                    timeout = null;
                }, delay);
            }
        };
    }

    // Adiciona classe scrolling durante o scroll
    const handleScroll = throttle(() => {
        sectionsContainer.classList.add('scrolling');
        updateProgressBar();
        updateCurrentSection();

        // Remove a classe depois de 300ms sem scroll
        clearTimeout(sectionsContainer._scrollTimeout);
        sectionsContainer._scrollTimeout = setTimeout(() => {
            sectionsContainer.classList.remove('scrolling');
        }, 300);
    }, 100);

    sectionsContainer.addEventListener('scroll', handleScroll);

    // Função para rolar para próxima seção
    function scrollToNextSection() {
        if (currentSectionIndex < sections.length - 1) {
            currentSectionIndex++;
        } else {
            currentSectionIndex = 0; // Reinicia
        }

        sectionsContainer.scrollTo({
            top: sectionPositions[currentSectionIndex],
            behavior: 'smooth'
        });
    }

    scrollDownArrow.addEventListener('click', scrollToNextSection);

    // Atualiza posições ao redimensionar janela
    window.addEventListener('resize', calculateSectionPositions);

    // Inicializa
    calculateSectionPositions();
    updateProgressBar();
    updateCurrentSection();
});
