import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';

// асинхронне завантаження для маршрутів , використовуючи React.lazy() і Suspense.
// обгортаємо <Suspense fallback={<Loader />}> <Outlet /></Suspense>: Layout та MovieDetails
const Cast = lazy(() => import('components/Cast/Cast'));
// import Cast from 'components/Cast/Cast';
const Reviews = lazy(() => import('components/Reviews/Reviews'));
// import Reviews from 'components/Reviews/Reviews';
const Home = lazy(() => import('pages/Home/Home'));
// import Home from 'pages/Home/Home';
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
// import MovieDetails from 'pages/MovieDetails/MovieDetails';
const Movies = lazy(() => import('pages/Movies/Movies'));
// import Movies from 'pages/Movies/Movies';

const App = () => {
  return (
    <Routes>
      {/* Шлях / відображає компонент <Layout /> та має вкладені маршрути. */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        {/* відображає компонент <MovieDetails /> при відповідному шляху і має 2 вкладених маршрута. */}
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
        {/* Маршрут * відображає компонент <Home /> для будь-якого невідповідного шляху. */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
