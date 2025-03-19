document.addEventListener('DOMContentLoaded', () => {
    const likeButton = document.getElementById('likeButton');
    const notificationBell = document.querySelector('.notification'); // Seu sininho
  
    likeButton.addEventListener('click', () => {
      // Salva no LocalStorage
      localStorage.setItem('likedMilgramArticle', 'true');
      
      // Mostra aviso no sininho (exemplo usando "title")
      notificationBell.setAttribute('title', 'Você curtiu o artigo a Experiência de Milgram!');
  
      // Você também pode exibir um alerta, badge etc.
      alert('Você curtiu o artigo a Experiência de Milgram!');
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const likeButton = document.getElementById('likeButton');
    const notificationBell = document.querySelector('.notification'); // Seu sininho
    const notificationPanel = document.getElementById('notificationPanel');
    const likedArticlesList = document.getElementById('likedArticlesList');
  
    // Ao clicar no botão Curtir
    likeButton.addEventListener('click', () => {
      // Recupera o array de artigos curtidos ou cria um vazio
      const likedArticles = JSON.parse(localStorage.getItem('likedArticles')) || [];
  
      // Verifica se este artigo já não foi curtido antes
      if (!likedArticles.includes('Experiência de Milgram')) {
        likedArticles.push('Experiência de Milgram');
      }
  
      // Salva de volta no LocalStorage
      localStorage.setItem('likedArticles', JSON.stringify(likedArticles));
    });
  
    // Ao clicar no sininho
    notificationBell.addEventListener('click', () => {
      // Pega a lista atualizada de artigos curtidos
      const likedArticles = JSON.parse(localStorage.getItem('likedArticles')) || [];
      
      // Limpa a lista antes de recriar
      likedArticlesList.innerHTML = '';
  
      // Adiciona cada artigo curtido como <li> no painel
      likedArticles.forEach(article => {
        const li = document.createElement('li');
        li.textContent = article;
        likedArticlesList.appendChild(li);
      });
  
      // Alterna a visibilidade do painel
      if (notificationPanel.style.display === 'none') {
        notificationPanel.style.display = 'block';
      } else {
        notificationPanel.style.display = 'none';
      }
    });
  });
  
