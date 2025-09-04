# Exercio TMDB API 📘

- [Visite o site/Ainda não disponivél]()

Este projeto foi realizado para o curso de dev fullStack da +praTI. 📝
Consumindo a API da TMDB onde deveriam ser entregues as seguintes funcionalidades obrigatórias:

1. Página de Busca.<br>
   - Um campo de texto para o usuário digitar o termo.<br>
     ✅ _(Seacrh Movies page, funciona a busca para séries e filmes)_
   - Exibir lista de resultados com pôster, título, ano e botão para ver detalhes.<br>
     ✅ _(Descomentar a linha 100 no arquivo Card.jsx fará com que o titulo aparece, por questões estéticas eu desativei)_
2. Paginação.<br>
   - Permitir navegar pelas páginas de resultados. <br>
     ✅ _(Navegação entre, Top Movies, Top Series, Search Movies, favorites e paginação para a opção de busca.)_
3. Página de Detalhes.<br>
   - Exibir informações completas (diretor, elenco, sinopse, avaliação) ao clicar em um filme.<br>
     ✅ _(Ao clicar no card as informações serão apresentados por meio do modal. Componente About.jsx)_
4. Lista de Favoritos.<br>
   - Botão para adicionar/remover filmes da lista de favoritos.<br>
     ✅ _(Botão com icone coração )_
   - Persistir favoritos em localStorage.<br>
     ✅ _(Está persistindo mesmo ao sair da página)_
5. Tratamento de Erros & Loading<br>
   - Exibir indicador enquanto aguarda resposta e mensagens de erro quando necessário. <br>
     ✅ _(Apresenta um parágrafo informando que está carregando, ou quando elementos estão vazios apresenta instruções)_

## Como rodar em sua máquina 🖥

1. Tenha um editor de texto como o VSCode ou IDE instalada.
2. Realize um fork/clone ou baixe os aquivos em sua máquina.
3. Dentro da pasta do projeto baixe as dependencias do node pelo comando:<br>
   `npm i` ou `npm install`<br>
4. Ainda dentro da pasta do projeto inicialize pelo comando:<br>
   `npm run dev`<br>
5. Siga para o caminho/porta de localhost que o vite inicializou com seu navegador de escolha.
6. Você estará vendo o projeto :D

## Desafios e Tecnologias 🛠

Este projeto apresentou diversos desafios umas vez que já havia realizado um projeto parecido que você [pode visitar aqui](https://devmovies-project.netlify.app/) , porém este decidi não seguir nenhum curso ou tutorial apenas com meus conhecimentos.<br>
Este projeto utiliza:

- Vite - Para sua inicialização.
- ReactJS - Para sua estrutura.
- Sass - Para sua estilização.
- Axios - para a requisição e consumo das APIs.
- Reack-router-dom - para o Rotiamento de páginas dentro da aplicação (BrowserRouter, Routes, Route, Links, Outlets).

## Bugs conhecidos

Ao decorrer do projeto decidi separar a página de busca com os favoritos. Inicialmente aparentava ser algo simples porém me deparei com um novo problema no localStorage.

1. Ao deletar um favorito da página 'Favotites' a mesma não é atualizada automaticamente:

   - Uma vez que o componente card.jsx é filho da página, e alterando a função deletar para o pai gera conflitos com o salvamento do localStorage. :(
   - Adicionar um eventListner em localstorage para identificar deleções gera um loop infinito.
   - SOLUÇÃO: Adicionar um botão que re-redenriza a página para fazer nova busca no localStorage.

2. Botões não mudam de icones quando filme/serie são favoritados ou deletados

   - Tentei de varias formas, porém existe algum conflito em que as classes não são aplicadas/modificadas corretamente.
   - Insanidade foi grande para tentar resolver.
   - SOLUÇÃO: Adicionar um Alert('') mostrando ao usuário que uma ação aconteceu adicionado/deletado.

3. Existem vários códigos comentados para mostrar o fluxo que as ideias foram tomando ao longo do projeto.

4. Estilização simples
   - Foquei mais em criar a estrutura e funcionalidade então a estilização está simples.
5. Não apresenta responsividade dedicada
   - Uma vez que não era uma requisição da tarefa e foquei nas chamadas da API.

## Prints das páginas

Página Principal - Top Movies
![Pagina Top Movies]('./prints/TopMovies.pgn)

Página - Top Series
![Página Top Series]('./prints/TopSeries.png)

Página - Pesquisa de series e filmes
![Página Search Movies]('./prints/SearchMovies.png)

Página - Favoritos
![Página Favorites]('./prints/favorites.png)
