import { Suspense } from 'react'; // бібліотека для lazy
import { useEffect, useState } from 'react'; // бібліотека для хуків
import { useParams, Outlet, useLocation, Link } from 'react-router-dom'; // бібліотека для роботи з адресою
import { BsArrowLeftShort } from 'react-icons/bs'; // бібліотека для іконки
import { fetchMovieById } from '../services/api'; // запит на фільм
import MovieCard from '../components/MoviCard/MoviCard';
import { LoadingIndicator } from 'components/SharedLayout/LoadingDots';
import { Button, Container } from './MovieDetails.styled';

const MovieDelails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    const fetchSelectedMovie = async movieId => {
      try {
        const movieData = await fetchMovieById(movieId);
        setSelectedMovie(movieData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSelectedMovie(movieId);
  }, [movieId]);

  return (
    <main>
      <Container>
        <Link to={location?.state?.from ?? '/'}>
          <Button type="button">
            <BsArrowLeftShort
              style={{ width: '25px', height: '25px', display: 'inline-block' }}
            />
            Go back
          </Button>
        </Link>
        <MovieCard movie={selectedMovie} />{' '}
        <Suspense fallback={<LoadingIndicator />}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
};

export default MovieDelails;
