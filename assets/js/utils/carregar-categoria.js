Vue.createApp({
    data() {
      return {
        artigos: [
          {
            id: 1,
            titulo: 'Psicologia',
            descricao: 'Explore os mistérios da mente humana, emoções e comportamentos com artigos acessíveis e envolventes.',
            link: '../pages/ler-artigos-psicologia.html'
          },
          {
            id: 2,
            titulo: 'Tecnologia',
            descricao: 'Descubra as inovações que estão transformando o mundo digital, da inteligência artificial à cultura tech.',
            link: '../pages/ler-artigos-tecnologia.html'
          }
        ]
      };
    }
  }).mount('#categoriaApp');
  