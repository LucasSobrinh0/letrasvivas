Vue.createApp({
    data() {
      return {
        phrases: [
          "Aprenda de forma rápida e iterativa",
          "Leia de forma simples e direta",
          "Encontre novos horizontes",
          "Descubra o prazer da leitura",
          "Transforme conhecimento em ação"
        ],
        currentIndex: 0,
        currentPhrase: "Aprenda de forma rápida e iterativa",
        currentClass: '',
        botao: {
          texto: "Comece Agora",
          href: "../pages/ler-artigos.html"
        },
        INTERVAL_TIME: 4000,
        TRANSITION_TIME: 500
      };
    },
    mounted() {
      this.startTextAnimation();
    },
    methods: {
      async startTextAnimation() {
        while (true) {
          // Aplica fade-out
          this.currentClass = 'fade-out';
          await this.wait(this.TRANSITION_TIME);
  
          // Troca a frase
          this.currentIndex = (this.currentIndex + 1) % this.phrases.length;
          this.currentPhrase = this.phrases[this.currentIndex];
  
          // Aplica fade-in
          this.currentClass = 'fade-in';
          await this.wait(this.TRANSITION_TIME);
  
          // Limpa a classe de transição
          this.currentClass = '';
  
          // Espera intervalo antes de trocar de novo
          await this.wait(this.INTERVAL_TIME - this.TRANSITION_TIME * 2);
        }
      },
      wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
    }
  }).mount('#headerApp');
  