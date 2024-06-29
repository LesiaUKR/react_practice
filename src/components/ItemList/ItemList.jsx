import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import data from "../../assets/adverts.json";
import { CardList } from "./ItemList.styled";

const ItemList = () => {
  return (
    <CardList>
      {data.map((item) => (
        <ItemCard key={item._id} advert={item} />
      ))}
    </CardList>
  );
};

export default ItemList;
