Vue.createApp({
    data() {
      return {
        titulo: 'LetrasVivas',
        paragrafo1: 'é uma plataforma inovadora que simplifica a leitura de artigos científicos sobre psicologia. Inspirados pelas redes sociais modernas, oferecemos uma experiência de leitura gradual e envolvente.',
        paragrafo2: 'Nosso objetivo é facilitar o acesso ao conhecimento e tornar a aprendizagem uma jornada prazerosa.',
        botao: {
          texto: 'Explore os Artigos',
          href: '../pages/ler-artigos.html'
        }
      };
    }
  }).mount('#sobreApp');
  