import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchActors } from 'services/Api';
import Loader from 'components/Loader/Loader';
import { List, Text } from './Cast.styled';

const Cast = () => {
  // використовується `useParams()` для отримання параметру`movieId` з URL.
  // вказує на ідентифікатор фільму, для якого потрібно отримати акторів.
  const { movieId } = useParams();
  // `actors` буде містити отриманих акторів
  const [actors, setActors] = useState([]);
  // `loading` вказує, чи відбувається процес завантаження
  // (true - завантаження, false - завантаження завершено).
  const [loading, setLoading] = useState(false);

  // useEffect - відбувається завантаження акторів,з допомогою `fetchActors` і розміщення результату у стан `actors`.
  // Якщо виникає помилка, вона виводиться у консоль. Незалежно від успіху або невдачі завантаження акторів,
  // стан `loading` оновлюється на протилежне значення.
  useEffect(() => {
    const onActorsOfMovie = () => {
      setLoading(true);

      fetchActors(movieId)
        .then(actors => {
          setActors(actors);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    // при зміні `movieId` всередині ефекту виконується функція `onActorsOfMovie()
    // яка встановлює `loading` на `true`, щоб показати процес завантаження.
    onActorsOfMovie();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      <List>
        {actors.map(({ id, profile_path, original_name, name, character }) => (
          <li key={id}>
            <img
              width="200px"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `https://via.placeholder.com/200x300?text=No+Image`
              }
              alt={original_name}
            />
            <Text>{name}</Text>
            <Text>Character: {character}</Text>
          </li>
        ))}
      </List>
    </div>
  );
};
export default Cast;
// - `id` - унікальний ідентифікатор актора.
// - `profile_path` - шлях до зображення актора.
// - `original_name` - оригінальне ім'я актора.
// - `name` - ім'я актора.
// - `character` - персонаж, який актор виконує.
