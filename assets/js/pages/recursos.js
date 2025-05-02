Vue.createApp({
    data() {
      return {
        recursos: [
          {
            icone: 'fas fa-brain display-4',
            titulo: 'Leitura Gradual',
            descricao: 'Assimile conteúdo aos poucos, facilitando a compreensão e retenção de informações.'
          },
          {
            icone: 'fas fa-bolt display-4',
            titulo: 'Aprendizado Rápido',
            descricao: 'Métodos inovadores que aceleram o seu processo de aprendizado.'
          },
          {
            icone: 'fas fa-users display-4',
            titulo: 'Comunidade',
            descricao: 'Interaja com outros leitores e compartilhe insights valiosos.'
          }
        ]
      };
    }
  }).mount('#recursosApp');
  