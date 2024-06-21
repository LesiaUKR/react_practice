import React from "react";
import DefaultBtn from "../DefaultBtn/DefaultBtn";
import CategoryBadge from "../CategoryBadge/CategoryBadge";
import Icon from "../Icon/Icon";

const ItemCard = ({ advert }) => {
  const { name, price, rating, location, description, gallery } = advert;
  console.log(advert);
  let [country, city] = location.split(", ");
  let formattedLocation = `${city}, ${country}`;
  return (
    <div>
      <div>
        <img src={gallery[0]} alt={name} />
      </div>
      <div>
        <div>
          <h2>{name}</h2>
          <p>{price}</p>
          <span>
            <Icon name="heart-default" />
          </span>
        </div>
        <div>
          <Icon name="star" />
          <p>{rating}</p>
          <p>{formattedLocation}</p>
        </div>
        <DefaultBtn text="Show more" />
        <CategoryBadge icon="water" />
      </div>
    </div>
  );
};

export default ItemCard;
