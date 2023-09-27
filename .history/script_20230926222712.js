document.addEventListener('DOMContentLoaded', function() {
    const repositories = [
        {
            name: 'Demais.com',
            description: 'Teste da Fã-Page do Prona',
            coverImage: 'Demais.com.jpg',
            languages: []
        },
        {
            name: 'Demais.com-main',
            description: 'Página definitivan da Fã-Page do Prona',
            coverImage: 'Demais.com.jpg',
            languages: []
        },
        {
            name: 'Figma',
            description: 'Figma para HTML',
            coverImage: 'Figma_to_html_1.png',
            languages: []
        },
        {
            name: 'X-Men',
            description: 'Seleção de personagens do X-Men',
            coverImage: 'xmen.png',
            languages: []
        },
        {
            name: 'Poke',
            description: 'Seleção de personagens do Pokémon Go',
            coverImage: 'pokemon-slider.png',
            languages: []
        },
        {
            name: 'Mario',
            description: 'Divulgação do filme Mario',
            coverImage: 'css-pixel-art.png',
            languages: []
        },
        {
            name: 'Marvel',
            description: 'Seleção de personagens da Marvel',
            coverImage: 'marvel.jpg',
            languages: []
        },
        {
            name: 'Crystallize',
            description: 'Sistema de controle financeiro para empresas',
            coverImage: 'sis.png',
            languages: []
        },
        {
            name: 'Retomada',
            description: 'Vitral Vidraria',
            coverImage: 'retom.png',
            languages: []
        },
        {
            name: 'Sorteio',
            description: 'Página de Sorteio',
            coverImage: 'sorteio.jpg',
            languages: []
        },
        {
            name: 'Carrossel',
            description: 'Carrossel de Imagens',
            coverImage: 'car.jpg',
            languages: []
        },
        {
            name: 'Word',
            description: 'README',
            coverImage: 'como-fazer-um-bom-readme-preview.png',
            languages: []
        },
        {
            name: 'Exercício de Controle',
            description: 'Controle de Acesso',
            coverImage: 'control.png',
            languages: ['HTML']
        },
        {
            name: 'Atualiza--o',
            description: 'Landing Page',
            coverImage: 'landing.png',
            languages: []
        },
        {
            name: 'Projeto-OnePage',
            description: 'Comida Caseira',
            coverImage: 'restaurante.jpeg',
            languages: []
        },
        {
            name: 'Namorar-',
            description: 'Pedido de Namoro',
            coverImage: 'namorar.jpg',
            languages: []
        },
        {
            name: 'Pedra-Papel',
            description: 'Pedra, Papel e Tesoura',
            coverImage: 'jokenpo.png',
            languages: []
        },
        {
            name: 'Meu-bingo',
            description: 'Jogo do Bingo',
            coverImage: 'bingo.jpg',
            languages: []
        },
        {
            name: 'sorte',
            description: 'Sorteio de Números e Nomes',
            coverImage: 'sorteio.jpg',
            languages: []
        },
        {
            name: 'JS-BIN',
            description: 'Cadastro de Livros',
            coverImage: 'bibliotecas.png',
            languages: []
        },
        {
            name: 'Quizz',
            description: 'Quizz de Perguntas',
            coverImage: 'a-guide-to-html-css-forms-no-hacks.jpg',
            languages: []
        },
        {
            name: 'JAVASCRIPT',
            description: 'Formulário Inicial',
            coverImage: 'a-guide-to-html-css-forms-no-hacks.jpg',
            languages: []
        },
        {
            name: 'exe-6-JS',
            description: 'Exercício Compartilhado',
            coverImage: 'comp.png',
            languages: []
        },
        {
            name: 'Jogo-Da-Cobrinha',
            description: 'Jogo Do Nokia',
            coverImage: 'cobrinha.png',
            languages: []
        },
        {
            name: 'Desenho',
            description: 'Paint 2D',
            coverImage: '20151220031246_canvas.png',
            languages: []
        },
        {
            name: 'Meu Perfil',
            description: 'Tá olhando pra ele',
            coverImage: 'perfi.png',
            languages: []
            linl
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
