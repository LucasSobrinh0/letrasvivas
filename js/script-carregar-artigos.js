document.addEventListener("DOMContentLoaded", () => {
    // Verifica se os contêineres existem no HTML
    const tecnologiaContainer = document.getElementById("tecnologia-container");
    const psicologiaContainer = document.getElementById("psicologia-container");

    // Verifica se localStorage está disponível
    function isLocalStorageAvailable() {
        try {
            const testKey = "__test__";
            localStorage.setItem(testKey, testKey);
            localStorage.removeItem(testKey);
            return true;
        } catch (e) {
            console.error("LocalStorage não está disponível.");
            return false;
        }
    }

    // Função para carregar preferências do localStorage
    function loadPreferences(artigoElement, id) {
        if (!isLocalStorageAvailable()) return;

        // Verificar se o artigo foi curtido
        if (localStorage.getItem(`liked-${id}`) === "true") {
            const likeButton = artigoElement.querySelector(".btn-like");
            if (likeButton) {
                likeButton.classList.add("liked");
                const icon = likeButton.querySelector("i");
                if (icon) icon.classList.replace("far", "fas");
            }
        }

        // Verificar se o artigo foi salvo
        if (localStorage.getItem(`saved-${id}`) === "true") {
            const saveButton = artigoElement.querySelector(".btn-save");
            if (saveButton) {
                saveButton.classList.add("saved");
                const icon = saveButton.querySelector("i");
                if (icon) icon.classList.replace("far", "fas");
            }
        }
    }

    // Função para salvar preferências no localStorage
    function savePreference(id, type, value) {
        if (!isLocalStorageAvailable()) return;
        localStorage.setItem(`${type}-${id}`, value);
    }

    // Função para adicionar eventos aos botões de curtir e salvar
    function addEventListeners(artigoElement, id) {
        const likeButton = artigoElement.querySelector(".btn-like");
        const saveButton = artigoElement.querySelector(".btn-save");

        // Evento para curtir
        if (likeButton) {
            likeButton.addEventListener("click", () => {
                const isLiked = !likeButton.classList.contains("liked"); // Alternar estado
                likeButton.classList.toggle("liked", isLiked);

                const icon = likeButton.querySelector("i");
                if (icon) {
                    icon.classList.toggle("fas", isLiked);
                    icon.classList.toggle("far", !isLiked);
                }

                savePreference(id, "liked", isLiked); // Salvar estado no localStorage
            });
        }

        // Evento para salvar
        if (saveButton) {
            saveButton.addEventListener("click", () => {
                const isSaved = !saveButton.classList.contains("saved"); // Alternar estado
                saveButton.classList.toggle("saved", isSaved);

                const icon = saveButton.querySelector("i");
                if (icon) {
                    icon.classList.toggle("fas", isSaved);
                    icon.classList.toggle("far", !isSaved);
                }

                savePreference(id, "saved", isSaved); // Salvar estado no localStorage
            });
        }
    }

    // Função para criar um artigo dinamicamente
    function createArtigoElement(artigo) {
        const artigoItem = document.createElement('div');
        artigoItem.classList.add('artigo-item');
        artigoItem.setAttribute('data-id', artigo.id);

        // Adiciona o título
        const titulo = document.createElement('h3');
        titulo.textContent = artigo.titulo;

        // Adiciona a descrição
        const descricao = document.createElement('p');
        descricao.textContent = artigo.descricao;

        // Adiciona o botão de leitura
        const botaoLer = document.createElement('a');
        botaoLer.href = artigo.link;
        botaoLer.classList.add('btn-primary');
        botaoLer.setAttribute('aria-label', `Ler artigo sobre ${artigo.titulo}`);
        botaoLer.textContent = 'Ler';

        // Cria a seção de interações
        const interacoes = document.createElement('div');
        interacoes.classList.add('interactions');

        // Botão Curtir
        const botaoCurtir = document.createElement('button');
        botaoCurtir.classList.add('btn-like');
        botaoCurtir.setAttribute('aria-label', 'Curtir este artigo');
        botaoCurtir.innerHTML = '<i class="far fa-thumbs-up"></i> Curtir'; // Ícone + texto
        interacoes.appendChild(botaoCurtir);

        // Botão Salvar
        const botaoSalvar = document.createElement('button');
        botaoSalvar.classList.add('btn-save');
        botaoSalvar.setAttribute('aria-label', 'Salvar este artigo para ler mais tarde');
        botaoSalvar.innerHTML = '<i class="far fa-bookmark"></i> Salvar'; // Ícone + texto
        interacoes.appendChild(botaoSalvar);

        // Monta o artigo completo
        artigoItem.appendChild(titulo);
        artigoItem.appendChild(descricao);
        artigoItem.appendChild(botaoLer);
        artigoItem.appendChild(interacoes);

        return artigoItem;
    }

    // Função para carregar artigos dinamicamente
    async function carregarArtigos() {
        try {
            // Faz uma requisição para buscar o arquivo JSON
            const response = await fetch('../json/artigos.json');
            if (!response.ok) {
                throw new Error('Erro ao carregar os artigos.');
            }

            // Converte a resposta para JSON
            const artigos = await response.json();

            // Agrupa os artigos por categoria
            const categorias = {
                tecnologia: [],
                psicologia: []
            };

            artigos.forEach(artigo => {
                if (artigo.categoria === "tecnologia") {
                    categorias.tecnologia.push(artigo);
                } 
                if (artigo.categoria === "psicologia") {
                    categorias.psicologia.push(artigo);
                }
            });

            // Renderiza os artigos na categoria Tecnologia (se o contêiner existir)
            if (tecnologiaContainer) {
                categorias.tecnologia.forEach(artigo => {
                    const artigoElement = createArtigoElement(artigo);
                    tecnologiaContainer.appendChild(artigoElement);
                    loadPreferences(artigoElement, artigo.id);
                    addEventListeners(artigoElement, artigo.id);
                });
            }

            // Renderiza os artigos na categoria Psicologia (se o contêiner existir)
            if (psicologiaContainer) {
                categorias.psicologia.forEach(artigo => {
                    const artigoElement = createArtigoElement(artigo);
                    psicologiaContainer.appendChild(artigoElement);
                    loadPreferences(artigoElement, artigo.id);
                    addEventListeners(artigoElement, artigo.id);
                });
            }
        } catch (error) {
            console.error('Erro ao carregar os artigos:', error);
        }
    }

    // Chama a função para carregar os artigos quando a página for carregada
    carregarArtigos();
});