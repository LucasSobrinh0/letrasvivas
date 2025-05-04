const { createApp, ref, onMounted } = Vue;
createApp({
    setup() {
        const progress = ref(0);
        const currentSectionIndex = ref(0);
        const sections = ref([]);
        const sectionsContainer = ref(null);
        const sectionPositions = ref([]);

        const calculateSectionPositions = () => {
            sectionPositions.value = Array.from(sections.value).map(section => section.offsetTop);
        };

        const updateProgress = () => {
            const scrollTop = sectionsContainer.value.scrollTop;
            const maxScroll = sectionsContainer.value.scrollHeight - sectionsContainer.value.clientHeight;
            progress.value = Math.min((scrollTop / maxScroll) * 100, 100);
        };

        const updateCurrentSection = () => {
            const scrollTop = sectionsContainer.value.scrollTop + sectionsContainer.value.clientHeight / 2;
            sectionPositions.value.forEach((pos, index) => {
                if (scrollTop >= pos) currentSectionIndex.value = index;
            });
        };

        const scrollToNextSection = () => {
            if (currentSectionIndex.value < sections.value.length - 1) {
                currentSectionIndex.value++;
            } else {
                currentSectionIndex.value = 0;
            }
            sectionsContainer.value.scrollTo({
                top: sectionPositions.value[currentSectionIndex.value],
                behavior: 'smooth'
            });
        };

        const handleScroll = () => {
            updateProgress();
            updateCurrentSection();
        };

        onMounted(() => {
            sections.value = document.querySelectorAll('.section');
            sectionsContainer.value = document.querySelector('.sections');
            calculateSectionPositions();
            updateProgress();
            updateCurrentSection();

            sectionsContainer.value.addEventListener('scroll', handleScroll);
            window.addEventListener('resize', calculateSectionPositions);
        });

        return { progress, scrollToNextSection };
    }
}).mount('#progress-app');
