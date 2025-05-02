Vue.createApp({
    data() {
      return {
        links: [
          { href: "/politica-de-privacidade", texto: "Política de Privacidade" },
          { href: "/termos-de-uso", texto: "Termos de Uso" }
        ],
        icones: [
          { href: "", classe: "fab fa-facebook-f", target: "", rel: "" },
          { href: "https://www.instagram.com/letsvivas", classe: "fab fa-instagram", target: "_blank", rel: "noopener noreferrer" },
          { href: "https://twitter.com/letsvivas", classe: "fab fa-twitter", target: "_blank", rel: "noopener noreferrer" }
        ]
      };
    }
  }).mount('#footerApp');
  