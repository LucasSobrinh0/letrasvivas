document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Verifica se há uma preferência salva no localStorage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️'; // Altera o ícone para sol
    } else {
        body.classList.remove('dark-mode');
        darkModeToggle.textContent = '🌙'; // Altera o ícone para lua
    }

    // Função para alternar o modo escuro
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
            darkModeToggle.textContent = '☀️'; // Altera o ícone para sol
        } else {
            localStorage.setItem('dark-mode', 'disabled');
            darkModeToggle.textContent = '🌙'; // Altera o ícone para lua
        }
    });
});