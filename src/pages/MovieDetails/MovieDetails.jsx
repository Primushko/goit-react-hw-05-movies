import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
// отримання деталей про фільм з API.
import { fetchMovieDetails } from 'services/Api';
import Loader from 'components/Loader/Loader';
import {
  Container,
  List,
  ListInfo,
  LinkInfo,
  Button,
} from './MovieDetails.styled';
// `MovieDetails`отримує деталі про фільм з асинхронного джерела за допомогою функції `fetchMovieDetails`,
//  відображає їх на сторінці та надає можливість навігувати до додаткової інформації про фільм.
const MovieDetails = () => {
  //використовується для запиту деталей про конкретний фільм.
  const { movieId } = useParams();
  //  Цей стан використовується для зберігання деталей про фільм, які отримуються з `fetchMovieDetails`.
  const [movieInfo, setMovieInfo] = useState(null);
  //  стан `loading`, який використовується для відображення спінера під час завантаження даних
  // `false`- означає, що спінер не відображається спочатку.
  const [loading, setLoading] = useState(false);
  // Використовується `useLocation()` для отримання поточного об'єкта `location`,
  // який містить інформацію про поточну адресу URL та додаткові дані про стан.
  const location = useLocation();
  // під час першого рендерингу та при зміні `movieId`, виконується функція `fetchMovieDetailsFilms()`,
  // яка отримує деталі про фільм та оновлює стан `movieInfo`.
  useEffect(() => {
    const fetchMovieDetailsFilms = () => {
      setLoading(true);
      fetchMovieDetails(movieId)
        .then(detailMovie => {
          setMovieInfo(detailMovie);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchMovieDetailsFilms();
  }, [movieId]);
  //Якщо `movieInfo` є `null` (деталі про фільм ще не завантажені),
  // компонент повертає `null` і нічого не відображається.
  if (!movieInfo) {
    return;
  }
  // відображає деталі про фільм, якщо movieInfo не є null.
  // включає посилання для повернення назад, відображення постера фільму, назву, рейтинг, огляд
  const {
    title,
    release_date,
    popularity,
    overview,
    genres,
    poster_path,
    original_title,
  } = movieInfo || {};

  return (
    <>
      <Link to={location.state?.from ?? '/'}>
        <Button type="button">Go back</Button>
      </Link>
      {loading && <Loader />}
      {movieInfo && (
        <Container>
          <img
            width="300px"
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : `https://via.placeholder.com/200x300?text=No+Image`
            }
            alt={original_title}
          />
          <div>
            <h1>
              {title} ({release_date.slice(0, 4)})
            </h1>
            <p>User score: {popularity}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <List>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </List>
          </div>
        </Container>
      )}
      <hr />
      <div>
        <h3>Additional information</h3>
        <ListInfo>
          <li>
            <LinkInfo to="cast">Cast</LinkInfo>
          </li>
          <li>
            <LinkInfo to="reviews">Reviews</LinkInfo>
          </li>
        </ListInfo>
        <hr />
        {/* `Suspense` використовується для організації лінивого завантаження компонентів */}
        {/* якщо компоненти ще не завантажені, відображається компонент `Loader`(показує спінер) */}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetails;
