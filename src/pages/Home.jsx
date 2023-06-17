import { useState, useEffect } from 'react';
import { fetchTrendMovies } from 'services/api';
import MovieList from 'components/MovieList/MovieList';
import { LoadingIndicator } from 'components/SharedLayout/LoadingDots';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const { results } = await fetchTrendMovies();
        setTrendingMovies(results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingIndicator />
      ) : error ? (
        <p>
          Вибачте, ми не змогли знайти популярні фільми. Будь ласка, спробуйте
          ще раз пізніше.
        </p>
      ) : (
        <MovieList trendingMovies={trendingMovies} />
      )}
    </>
  );
};

export default Home;
