const { createApp, ref } = Vue;

createApp({
  data() {
    return {
      artigos: [
        {
          id: "artigo1",
          titulo: "Desenvolvimento Tecnológico e a Identidade Digital",
          descricao: "A identidade online reflete aspectos pessoais, profissionais e sociais, sendo moldada constantemente pelos avanços das redes sociais, inteligência artificial e segurança cibernética.",
          link: "../pages/identidade-digital.html",
          categoria: "tecnologia"
        },
        {
          id: "artigo2",
          titulo: "As Tecnologias Transversais e o Futuro do Setor Produtivo",
          descricao: "As tecnologias transversais, como inteligência artificial, automação e big data, estão transformando o setor produtivo, criando novas oportunidades e desafios para as organizações.",
          link: "../pages/tecnologia-transversais.html",
          categoria: "tecnologia"
        },
        {
          id: "artigo3",
          titulo: "As Consequências Psicológicas de Stalkear nas Redes Sociais",
          descricao: "Stalkear nas redes sociais pode provocar sentimentos de ansiedade, insegurança e baixa autoestima, afetando tanto quem realiza a vigilância quanto a pessoa observada.",
          link: "../pages/psicologia-stalker.html",
          categoria: "psicologia"
        }
      ],
      likedIds: new Set(),
      savedIds: new Set(),
      curtidas: { "artigo1": 8, "artigo2": 6, "artigo3": 2},
      salvos: { "artigo1": false, "artigo2": false, "artigo3": false },
      menuAberto: ref(false)
    };
  },
  computed: {
    artigosTecnologia() {
      return this.artigos.filter(a => a.categoria === 'tecnologia');
    },
    artigosPsicologia() {
      return this.artigos.filter(a => a.categoria === 'psicologia');
    }
  },
  mounted() {
    this.loadPreferences();
  },
  methods: {
    isLocalStorageAvailable() {
      try {
        const testKey = '__test__';
        localStorage.setItem(testKey, testKey);
        localStorage.removeItem(testKey);
        return true;
      } catch {
        console.warn('LocalStorage não está disponível.');
        return false;
      }
    },
    loadPreferences() {
      if (!this.isLocalStorageAvailable()) return;
      this.artigos.forEach(artigo => {
        if (localStorage.getItem(`liked-${artigo.id}`) === 'true') {
          this.likedIds.add(artigo.id);
          this.curtidas[artigo.id] = 1;  // Atualizando o contador de curtidas
        }
        if (localStorage.getItem(`saved-${artigo.id}`) === 'true') {
          this.savedIds.add(artigo.id);
          this.salvos[artigo.id] = true;  // Atualizando o estado de salvo
        }
      });
    },
    toggleMenu() {
      this.menuAberto = !this.menuAberto;
    },
    toggleLike(id) {
      if (this.likedIds.has(id)) {
        this.likedIds.delete(id);
        this.curtidas[id] -= 1;
        localStorage.setItem(`liked-${id}`, 'false');
      } else {
        this.likedIds.add(id);
        this.curtidas[id] += 1;
        localStorage.setItem(`liked-${id}`, 'true');
      }
    },
    toggleSave(id) {
      if (this.savedIds.has(id)) {
        this.savedIds.delete(id);
        this.salvos[id] = false;
        localStorage.setItem(`saved-${id}`, 'false');
      } else {
        this.savedIds.add(id);
        this.salvos[id] = true;
        localStorage.setItem(`saved-${id}`, 'true');
      }
    },
    isLiked(id) {
      return this.likedIds.has(id);
    },
    isSaved(id) {
      return this.savedIds.has(id);
    },
    getRating(id) {
      const likes = this.curtidas[id] || 0;
      if (likes >= 9) return 5;
      if (likes >= 7) return 4;
      if (likes >= 5) return 3;
      if (likes >= 3) return 2;
      if (likes >= 1) return 1;
      return 0;
    }
  }
}).mount('#artigosApp');