import axios from 'axios';

const baseURL = 'https://api.themoviedb.org';
const API_KEY = 'd6edcad997ee9c808a30a1ff00b87277';

// список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// data-містить відповідь від сервера API
export const fetchTrendMovies = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
  return data;
};

// пошук фільму за ключовим словом на сторінці фільмів.
// query - назву фільму, за яким здійснюється пошук.
export const fetchMovieByName = async query => {
  const { data } = await axios.get(
    `${baseURL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return data;
};
// запит повної інформації про фільм для сторінки кінофільму за ідентифікатором.
// movieId - ідентифікатор фільму, для якого отримується інформація
export const fetchMovieById = async movieId => {
  const { data } = await axios.get(
    `${baseURL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};
// запит інформації про акторський склад для сторінки кінофільму.
// movieId - ідентифікатор фільму, для якого отримується інформація про акторський склад
export const fetchMovieCast = async movieId => {
  const { data } = await axios.get(
    `${baseURL}/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data;
};
// запит оглядів ( рецензії ) для сторінки кінофільму.
// movieId - ідентифікатор фільму, для якого отримуються огляди
export const fetchMovieReviews = async movieId => {
  const { data } = await axios.get(
    `${baseURL}/3/movie/${movieId}}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return data;
};
