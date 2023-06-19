import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { Container, Header, Link } from './Layout.styled';

// компонент `Layout`- відповідає за загальну структуру сторінки.
export const Layout = () => {
  // Layout - включає контейнер <Container>, заголовок <Header> з навігаційним меню <nav>,
  //відкладений вміст <Outlet /> та компонент <Loader />, який відображається протягом завантаження вмісту.
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
