const API_KEY = "38c007f28d5b66f36b9c3cf8d8452a4b";
const API_BASE = "http://api.themoviedb.org/3";

/*
Inicio do filtro da url... irá filtrar:
- originais da netflix
- recomendados (trending)
- em alta (top rated)
- lista de filmes de ação
- lista de filmes de comédia
- lista de filme de terror
- lista de filmes de romance
- lista de documentarios
*/

//Função de retorno da lista
//Manda o endpoit, irá verificar e ai retorna o resultado
const basicFecth = async (endpoint) => {
  return (await fetch(`${API_BASE}${endpoint}`)).json();
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais Netflix",
        items: await basicFecth(
          `/discover/tv/?with_network=213&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "trending",
        title: "Recomendados para Você",
        items: await basicFecth(
          `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "toprated",
        title: "Em Alta",
        items: await basicFecth(
          `/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFecth(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFecth(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFecth(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFecth(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: await basicFecth(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
        ),
      },
    ];
  },
};
