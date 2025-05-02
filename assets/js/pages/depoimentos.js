Vue.createApp({
    data() {
      return {
          depoimentos: [
              { mensagem: "A plataforma mudou completamente a minha forma de estudar. Agora aprendo muito mais rápido!", autor: "Maria Silva" },
              { mensagem: "Os artigos são apresentados de maneira tão simples que fica fácil entender até os temas mais complexos.", autor: "João Santos" },
              { mensagem: "Adoro a comunidade! É ótimo poder discutir ideias com outras pessoas interessadas.", autor: "Ana Oliveira" }
          ]
      };
    }
  }).mount('#depoimentosApp');
  