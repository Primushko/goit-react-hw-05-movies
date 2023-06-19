import React, { useEffect, useState } from 'react';
// імпортується компонент EditorList, використовується для відображення списку фільмів
import EditorList from 'pages/EditorList/EditorList';
// Функція fetchTrending відповідає за здійснення запитів API для отримання популярних фільмів.
import { fetchTrending } from 'services/Api';
// компонент індикатора завантаження.
import Loader from 'components/Loader/Loader';

// стан компонента
const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  // Отримання популярних фільмів при монтуванні компонента
  useEffect(() => {
    const fetchTrendingFilms = () => {
      setLoading(true);
      //  функцію fetchTrending для отримання популярних фільмів,
      //  оновлює значення films отриманими даними
      fetchTrending()
        .then(trendingFilms => {
          setFilms(trendingFilms);
        })
        // реагує на будь-які помилки, що виникають під час запиту.
        .catch(error => {
          console.log(error);
        })
        // встановлює значення loading назад в false.
        .finally(() => {
          setLoading(false);
        });
    };
    fetchTrendingFilms();
  }, []);
  // Відображення компонента
  return (
    <main>
      <h1>Trending today</h1>
      <EditorList films={films} />
      {loading && <Loader />}
    </main>
  );
};

export default Home;
