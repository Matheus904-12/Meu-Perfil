document.addEventListener('DOMContentLoaded', function() {
    const repositories = [
        {
            name: 'Demais.com',
            description: 'Teste da Fã-Page do Prona',
            coverImage: 'Demais.com.jpg',
            languages: [],
            link:'https://github.com/Matheus904-12/Demais.com.git'
        },
        {
            name: 'Demais.com-main',
            description: 'Página definitivan da Fã-Page do Prona',
            coverImage: 'Demais.com.jpg',
            languages: [],
            link:'https://github.com/Matheus904-12/Demais.com-main.git'
        },
        {
            name: 'X-Men',
            description: 'Seleção de personagens do X-Men',
            coverImage: 'xmen.png',
            languages: [],
            link:'https://github.com/Matheus904-12/X-Men.git'
        },
        {
            name: 'Poke',
            description: 'Seleção de personagens do Pokémon Go',
            coverImage: 'pokemon-slider.png',
            languages: [],
            link:'https://github.com/Matheus904-12/Poke.git'
        },
        {
            name: 'Mario',
            description: 'Divulgação do filme Mario',
            coverImage: 'css-pixel-art.png',
            languages: [],
            link:'https://github.com/Matheus904-12/Mario.git'
        },
        {
            name: 'Marvel',
            description: 'Seleção de personagens da Marvel',
            coverImage: 'marvel.jpg',
            languages: [],
            link:'https://github.com/Matheus904-12/Marvel.git'
        },
        {
            name: 'Crystallize',
            description: 'Sistema de controle financeiro para empresas',
            coverImage: 'sis.png',
            languages: [],
            link:'https://github.com/Matheus904-12/Crystallize.git'
        },
        {
            name: 'Retomada',
            description: 'Vitral Vidraria',
            coverImage: 'retom.png',
            languages: [],
            link:'https://github.com/Matheus904-12/Retomada.git'
        },
        {
            name: 'Sorteio',
            description: 'Página de Sorteio',
            coverImage: 'sorteio.jpg',
            languages: [],
            link:'https://github.com/Matheus904-12/sorteio.git'
        },
        {
            name: 'Carrossel',
            description: 'Carrossel de Imagens',
            coverImage: 'car.jpg',
            languages: [],
            link:'https://github.com/Matheus904-12/carrossel.git'
        },
        {
            name: 'Word',
            description: 'README',
            coverImage: 'como-fazer-um-bom-readme-preview.png',
            languages: [],
            link:'https://github.com/Matheus904-12/Word.git'
        },
        {
            name: 'Exercício de Controle',
            description: 'Controle de Acesso',
            coverImage: 'control.png',
            languages: [],
            link:'https://github.com/Matheus904-12/Exercicio-de-controle-.git'
        },
        {
            name: 'Atualiza--o',
            description: 'Landing Page',
            coverImage: 'landing.png',
            languages: [],
            link:'https://github.com/Matheus904-12/atualiza--o.git'
        },
        {
            name: 'Projeto-OnePage',
            description: 'Comida Caseira',
            coverImage: 'restaurante.jpeg',
            languages: [],
            link:'https://github.com/Matheus904-12/Projeto-OnePage.git'
        },
        {
            name: 'Namorar-',
            description: 'Pedido de Namoro',
            coverImage: 'namorar.jpg',
            languages: [],
            link:'https://github.com/Matheus904-12/Namorar-.git'
        },
        {
            name: 'Pedra-Papel',
            description: 'Pedra, Papel e Tesoura',
            coverImage: 'jokenpo.png',
            languages: [],
            link:'https://github.com/Matheus904-12/Pedra-Papel.git'
        },
        {
            name: 'Meu-bingo',
            description: 'Jogo do Bingo',
            coverImage: 'bingo.jpg',
            languages: [],
            link:'https://github.com/Matheus904-12/Meu-bingo.git'
        },
        {
            name: 'sorte',
            description: 'Sorteio de Números e Nomes',
            coverImage: 'sorteio.jpg',
            languages: [],
            link:'https://github.com/Matheus904-12/sorte.git'
        },
        {
            name: 'JS-BIN',
            description: 'Cadastro de Livros',
            coverImage: 'bibliotecas.png',
            languages: [],
            link:'https://github.com/Matheus904-12/JS-BIN.git'
        },
        {
            name: 'Quizz',
            description: 'Quizz de Perguntas',
            coverImage: 'a-guide-to-html-css-forms-no-hacks.jpg',
            languages: [],
            link:'https://github.com/Matheus904-12/Quizz.git'
        },
        {
            name: 'JAVASCRIPT',
            description: 'Formulário Inicial',
            coverImage: 'a-guide-to-html-css-forms-no-hacks.jpg',
            languages: [],
            link:'https://github.com/Matheus904-12/JAVASCRIPT.git'
        },
        {
            name: 'exe-6-JS',
            description: 'Exercício Compartilhado',
            coverImage: 'comp.png',
            languages: [],
            link:'https://github.com/Matheus904-12/exe-6-JS.git'
        },
        {
            name: 'Jogo-Da-Cobrinha',
            description: 'Jogo Do Nokia',
            coverImage: 'cobrinha.png',
            languages: [],
            link:'https://github.com/Matheus904-12/Jogo-Da-Cobrinha.git'
        },
        {
            name: 'Desenho',
            description: 'Paint 2D',
            coverImage: '20151220031246_canvas.png',
            languages: [],
            link:'https://github.com/Matheus904-12/Desenho.git'
        },
        {
            name: 'Meu Perfil',
            description: 'Tá olhando pra ele',
            coverImage: 'perfi.png',
            languages: [],
            link:'https://github.com/Matheus904-12/Meu-Perfil.git'
        },
        {
            name: 'OO',
            description: 'Calculadora',
            coverImage: 'leva.jpg',
            languages: [],
            link: 'https://github.com/Matheus904-12/OO.git'
        },
       
        
        
    ];

    

    const repositoriesSection = document.querySelector('.repositories');

    repositories.forEach(repository => {
        const card = document.createElement('div');
        card.classList.add('repository-card');

        const languagesIcons = repository.languages.map(lang => `<img src="${lang.toLowerCase()}.png" alt="${lang}">`).join('');

        card.innerHTML = `
            <a href="${repository.link}" target="_blank">
                <div class="card-border">
                    <img src="${repository.coverImage}" alt="Capa do Repositório">
                </div>
                <h3>${repository.name}</h3>
                <p>${repository.description}</p>
                <div class="languages">${languagesIcons}</div>
            </a>
        `;

        card.addEventListener('click', function() {
            card.classList.toggle('selected');
        });

        repositoriesSection.appendChild(card);
    });
});

const cards = document.querySelectorAll('.repository-card');

cards.forEach(card => {
  card.addEventListener('click', function() {
    card.classList.toggle('selected');
  });
});

const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.container');
    const openButton = document.querySelector('.open-sidebar');
    const closeButton = document.querySelector('.close-sidebar');
    const addButton = document.querySelector('.add-card-button');

    openButton.addEventListener('click', function() {
        sidebar.classList.add('open');
        container.classList.add('blur');
    });

    closeButton.addEventListener('click', function() {
        sidebar.classList.remove('open');
        container.classList.remove('blur');
    });

    addButton.addEventListener('click', function() {
        // Adicione aqui o código para adicionar um novo card
    });
});




