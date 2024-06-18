import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { StyledLink, Container, Header } from "./SharedLayout.styled";
import { Loader } from "./../Loader/Loader";

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/catalog">Catalog</StyledLink>
          <StyledLink to="/favorites">Favorites</StyledLink>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
