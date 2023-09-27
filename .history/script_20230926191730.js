document.addEventListener('DOMContentLoaded', function() {
    const repositories = [
        {
            name: 'Demais.com',
            description: 'Teste da Fã-Page do Prona',
            coverImage: 'Demais.com.jpg',
            languages: ['HTML', 'CSS', 'JS']
        },
        {
            name: 'Demais.com-main',
            description: 'Página definitivan da Fã-Page do Prona',
            coverImage: 'Demais.com.jpg',
            languages: ['HTML', 'CSS', 'JS']
        },
        {
            name: 'Figma',
            description: 'Figma para HTML',
            coverImage: 'Figma_to_html_1.png',
            languages: ['HTML', 'CSS', 'JS']
        },
        {
            name: 'X-Men',
            description: 'Seleção de personagens do X-Men',
            coverImage: 'xmen.png',
            languages: ['HTML', 'CSS', 'JS']
        },
        {
            name: 'Poke',
            description: 'Seleção de personagens do Pokémon Go',
            coverImage: 'pokemon-slider.png',
            languages: ['HTML', 'CSS', 'JS']
        },
        {
            name: 'Mario',
            description: 'Divulgação do filme Mario',
            coverImage: 'css-pixel-art.png',
            languages: ['HTML', 'CSS', 'JS']
        },
        {
            name: 'Marvel',
            description: 'Seleção de personagens da Marvel',
            coverImage: 'marvel.jpg',
            languages: ['HTML', 'CSS', 'JS']
        },
        {
            name: 'Crystallize',
            description: 'Sistema de controle financeiro para empresas',
            coverImage: 'projeto2.jpg',
            languages: ['HTML', 'CSS']
        },
        {
            name: 'Retomada',
            description: 'Vitral Vidraria',
            coverImage: 'projeto2.jpg',
            languages: ['HTML', 'CSS']
        },
        {
            name: 'Sorteio',
            description: 'Página de Sorteio',
            coverImage: 'projeto2.jpg',
            languages: ['HTML', 'CSS', 'JS']
        },
        {
            name: 'Carrossel',
            description: 'Carrossel de Imagens',
            coverImage: 'projeto2.jpg',
            languages: ['HTML', 'CSS', 'JS']
        },
        {
            name: 'Word',
            description: 'README',
            coverImage: 'projeto2.jpg',
            languages: []
        },
        {
            name: 'Exercício de Controle',
            description: 'Controle de Acesso',
            coverImage: 'projeto2.jpg',
            languages: ['HTML']
        },
        {
            name: 'Atualiza--o',
            description: 'Landing Page',
            coverImage: 'projeto2.jpg',
            languages: ['HTML', 'CSS', 'JS']
        },
        {
            name: 'Projeto-OnePage',
            description: 'Comida Caseira',
            coverImage: 'restaurante.jpeg',
            languages: ['HTML', 'CSS', 'JS']
        },
        {
            name: 'Namorar-',
            description: 'Pedido de Namoro',
            coverImage: 'namorar.jpg',
            languages: ['HTML', 'CSS', 'JS']
        },
        {
            name: 'Pedra-Papel',
            description: 'Pedra, Papel e Tesoura',
            coverImage: 'jokenpo.png',
            languages: ['HTML', 'CSS', 'JS']
        },
        {
            name: 'Meu-bingo',
            description: 'Jogo do Bingo',
            coverImage: 'bingo.jpg',
            languages: ['HTML', 'CSS', 'JS']
        },
        {
            name: 'sorte',
            description: 'Sorteio de Números e Nomes',
            coverImage: 'sorteio.jpg',
            languages: ['HTML', 'CSS', 'JS']
        },
        {
            name: 'JS-BIN',
            description: 'Cadastro de Livros',
            coverImage: 'bibliotecas.png',
            languages: ['HTML', 'CSS', 'JS']
        },
        {
            name: 'Quizz',
            description: 'Quizz de Perguntas',
            coverImage: 'a-guide-to-html-css-forms-no-hacks.jpg',
            languages: ['HTML', 'CSS', 'JS']
        },
        {
            name: 'JAVASCRIPT',
            description: 'Formulário Inicial',
            coverImage: 'a-guide-to-html-css-forms-no-hacks.jpg',
            languages: ['HTML', 'CSS', 'JS']
        },
        {
            name: 'exe-6-JS',
            description: 'Exercício Compartilhado',
            coverImage: 'projeto2.jpg',
            languages: ['HTML', 'CSS', 'JS']
        },
        {
            name: 'Jogo-Da-Cobrinha',
            description: 'Jogo Do Nokia',
            coverImage: 'cobrinha.png',
            languages: ['HTML', 'CSS', 'JS']
        },
        {
            name: 'Desenho',
            description: 'Paint 2D',
            coverImage: '20151220031246_canvas.png',
            languages: ['HTML', 'CSS', 'JS']
        },
        {
            name: 'Meu Perfil',
            description: 'Tá olhando pra ele',
            coverImage: 'projeto2.jpg',
            languages: ['HTML', 'CSS', 'JS']
        },
        {
            name: 'OO',
            description: 'Calculadora',
            coverImage: 'projeto2.jpg',
            languages: ['HTML', 'CSS', 'JS']
        },
        {
            name: 'Não Definido',
            description: 
            coverImage: 
            languages: ['HTML', 'CSS', 'JS']
        },
        {
            name: 'Não Definido',
            description: 'Descrição do Projeto 2',
            coverImage: 'projeto2.jpg',
            languages: ['HTML', 'CSS', 'JS']
        },
        {
            name: 'Não Definido',
            description: 'Descrição do Projeto 2',
            coverImage: 'projeto2.jpg',
            languages: ['HTML', 'CSS', 'JS']
        },
        {
            name: 'Não Definido',
            description: 'Descrição do Projeto 2',
            coverImage: 'projeto2.jpg',
            languages: ['HTML', 'CSS', 'JS']
        },
        {
            name: 'Não Definido',
            description: 'Descrição do Projeto 2',
            coverImage: 'projeto2.jpg',
            languages: ['HTML', 'CSS', 'JS']
        },
        {
            name: 'Não Definido',
            description: 'Descrição do Projeto 2',
            coverImage: 'projeto2.jpg',
            languages: ['HTML', 'CSS', 'JS']
        },
        {
            name: 'Não Definido',
            description: 'Descrição do Projeto 2',
            coverImage: 'projeto2.jpg',
            languages: ['HTML', 'CSS', 'JS']
        },
        
    ];

    const repositoriesSection = document.querySelector('.repositories');

    repositories.forEach(repository => {
        const card = document.createElement('div');
        card.classList.add('repository-card');

        const languagesIcons = repository.languages.map(lang => `<img src="${lang.toLowerCase()}.png" alt="${lang}">`).join('');

        card.innerHTML = `
            <img src="${repository.coverImage}" alt="Capa do Repositório">
            <h3>${repository.name}</h3>
            <p>${repository.description}</p>
            <div class="languages">${languagesIcons}</div>
        `;

        repositoriesSection.appendChild(card);
    });
});
