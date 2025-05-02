const navegacaoData = {
    menuAberto: false,
    links: [
      { texto: "Início", href: "../pages/index.html" },
      { texto: "Sobre", href: "../pages/index.html#sobre" },
      { texto: "Recursos", href: "../pages/index.html#recursos" },
      { texto: "Depoimentos", href: "../pages/index.html#depoimentos" },
      { texto: "Contato", href: "../pages/index.html#contato" }
    ]
  };
  
  const navegacaoMethods = {
    toggleMenu() {
      this.menuAberto = !this.menuAberto;
    },
    ativarLink(index) {
      this.menuAberto = false;
    }
  };
  
  Vue.createApp({
    data() {
      return {
        ...navegacaoData,
        ...modoEscuroData 
      };
    },
    methods: {
      ...navegacaoMethods,
      ...modoEscuroMethods 
    },
    mounted() {
      this.applySavedTheme(); 
    }
  }).mount('#navbarApp');
  