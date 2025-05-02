Vue.createApp({
    data() {
      return {
        contatos: [
          {
            icone: 'fas fa-envelope',
            link: 'mailto:lucas.sobrinho.crn@gmail.com',
            texto: 'lucas.sobrinho.crn@gmail.com',
            target: '',
            rel: ''
          },
          {
            icone: 'fab fa-linkedin',
            link: 'https://br.linkedin.com/in/lucas-sobrinho-c',
            texto: 'LinkedIn - Lucas Sobrinho C.',
            target: '_blank',
            rel: 'noopener noreferrer'
          }
        ],
        form: {
          nome: '',
          email: '',
          mensagem: ''
        },
        mensagemEnviada: false
      };
    },
    methods: {
      enviarMensagem() {
        console.log('Mensagem enviada:', this.form);
        this.mensagemEnviada = true;
        // Limpa o formulário
        this.form.nome = '';
        this.form.email = '';
        this.form.mensagem = '';
        
        // Oculta a mensagem de sucesso após 5 segundos
        setTimeout(() => {
          this.mensagemEnviada = false;
        }, 5000);
      }
    }
  }).mount('#contatoApp');
  