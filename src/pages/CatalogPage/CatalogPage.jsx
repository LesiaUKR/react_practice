import React from "react";
import ItemList from "../../components/ItemList/ItemList";
import FilterBar from "../../components/FilterBar/FilterBar";
import { Section } from "./CatalogPage.styled";

const CatalogPage = () => {
  return (
    <Section>
      <FilterBar />
      <ItemList />
    </Section>
  );
};

export default CatalogPage;
