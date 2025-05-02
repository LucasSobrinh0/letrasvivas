Vue.createApp({
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
        savedIds: new Set()
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
          }
          if (localStorage.getItem(`saved-${artigo.id}`) === 'true') {
            this.savedIds.add(artigo.id);
          }
        });
      },
      toggleLike(id) {
        if (this.likedIds.has(id)) {
          this.likedIds.delete(id);
          localStorage.setItem(`liked-${id}`, 'false');
        } else {
          this.likedIds.add(id);
          localStorage.setItem(`liked-${id}`, 'true');
        }
      },
      toggleSave(id) {
        if (this.savedIds.has(id)) {
          this.savedIds.delete(id);
          localStorage.setItem(`saved-${id}`, 'false');
        } else {
          this.savedIds.add(id);
          localStorage.setItem(`saved-${id}`, 'true');
        }
      },
      isLiked(id) {
        return this.likedIds.has(id);
      },
      isSaved(id) {
        return this.savedIds.has(id);
      }
    }
  }).mount('#artigosApp');
  