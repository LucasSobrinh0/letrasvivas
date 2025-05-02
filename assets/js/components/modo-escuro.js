const modoEscuroData = {
    darkModeIcon: '🌛'
  };
  
  const modoEscuroMethods = {
    applySavedTheme() {
      const savedTheme = localStorage.getItem('dark-mode');
      const isDarkMode = savedTheme === 'enabled';
  
      document.body.classList.toggle('dark-mode', isDarkMode);
      this.darkModeIcon = isDarkMode ? '🌞' : '🌛';
  
      if (!savedTheme) localStorage.setItem('dark-mode', 'disabled');
    },
    toggleDarkMode() {
      const isDarkMode = document.body.classList.toggle('dark-mode');
      this.darkModeIcon = isDarkMode ? '🌞' : '🌛';
      localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
    }
  };
  