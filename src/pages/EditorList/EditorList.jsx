import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, Item, MovieLink } from './EditorList.styled';
// компонент EditorList для відображення списку фільмів
const EditorList = ({ films }) => {
  // хук useLocation для отримання об'єкта локації, який зберігається у змінній location.
  const location = useLocation();

  return (
    <List>
      {/* Метод map, що ітерується по кожному об'єкту film в масиві films. */}
      {films.map(film => (
        //створюємо елемент <Item> з унікальним ключем key={film.id}
        <Item key={film.id}>
          {/* MovieLink створює посилання на сторінку фільму з шляхом /movies/${film.id} */}
          {/* передає об'єкт state з властивістю from, яка містить значення location. */}
          <MovieLink to={`/movies/${film.id}`} state={{ from: location }}>
            {/* Текстовий вміст фільму (film.title). */}
            {film.title}
          </MovieLink>
        </Item>
      ))}
    </List>
  );
};
// перевірка на типи пропсів
EditorList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default EditorList;
