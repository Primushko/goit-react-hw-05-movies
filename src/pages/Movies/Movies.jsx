import { useState } from 'react';
import Loader from 'components/Loader/Loader';
import EditorList from 'pages/EditorList/EditorList';
// Імпорт компонента `Form` з модуля `'components/Form/Form'`бпредставляє форму пошуку фільмів.
import Form from 'components/Form/Form';
//  виконання запиту пошуку фільмів за ключовим словом.
import { fetchSearchByKeyword } from 'services/Api';

// `Movies`-відповідає за відображення списку фільмів,отриманих після пошуку за ключовим словом.
const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noMoviesText, setNoMoviesText] = useState(false);
  // функція `searchMovies` викликається при виконанні пошуку фільмів
  // отримує `queryMovie` - ключове слово для пошуку фільмів.
  const searchMovies = queryMovie => {
    setLoading(true);
    // виконується запит до API з використанням `fetchSearchByKeyword`
    fetchSearchByKeyword(queryMovie)
      .then(searchResults => {
        // Результати зберігаються в стані `searchFilms`
        setSearchFilms(searchResults);
        setNoMoviesText(searchResults.length === 0);
      })
      .catch(error => {
        console.log(error);
      })
      // стан `loading` завжди оновлюється на `false` в кінці.
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <main>
      <Form searchMovies={searchMovies} />
      {loading && <Loader />}
      {noMoviesText && (
        <p>THERE IS NO MOVIES WITH THIS REQUEST. PLEASE, TRY AGAIN!</p>
      )}
      {searchFilms && <EditorList films={searchFilms} />}
    </main>
  );
};

export default Movies;
