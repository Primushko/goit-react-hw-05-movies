import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LoadingIndicator } from './LoadingDots';
import { StyledHeader, StyledNavLink } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <StyledHeader>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </StyledHeader>
      <Suspense fallback={<LoadingIndicator />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
