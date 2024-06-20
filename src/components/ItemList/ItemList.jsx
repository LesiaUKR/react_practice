import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import data from "../../assets/adverts.json";

const ItemList = () => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item._id}>
          <ItemCard advert={item} />
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
