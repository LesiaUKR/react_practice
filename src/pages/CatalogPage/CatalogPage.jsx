import React from "react";
import ItemList from "../../components/ItemList/ItemList";
import FilterBar from "../../components/FilterBar/FilterBar";
import { Container } from "./CatalogPage.styled";

const CatalogPage = () => {
  return (
    <Container>
      <section>
        <FilterBar />
      </section>
      <section>
        <ItemList />
      </section>
    </Container>
  );
};

export default CatalogPage;
