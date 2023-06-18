import axios from 'axios';
// базова URL-адреса для викликів AP
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// ключ
const API_KEY = 'd6edcad997ee9c808a30a1ff00b87277';
// список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
export const fetchTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};
// пошук фільму за ключовим словом на сторінці фільмів.(keyword)
export const fetchSearchByKeyword = async keyword => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${keyword}`
  );
  return response.data.results;
};
// запит повної інформації про фільм для сторінки кінофільму.
export const fetchMovieDetails = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};
// запит інформації про акторський склад для сторінки кінофільму.
export const fetchActors = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};
// запит оглядів для сторінки кінофільму.
export const fetchReviews = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};
