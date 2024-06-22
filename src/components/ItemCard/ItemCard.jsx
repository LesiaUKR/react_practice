import React from "react";
import DefaultBtn from "../DefaultBtn/DefaultBtn";
import CategoryBadge from "../CategoryBadge/CategoryBadge";
import Icon from "../Icon/Icon";

const ItemCard = ({ advert }) => {
  const { name, price, rating, location, description, gallery } = advert;
  console.log(advert);

  let formattedLocation = "";
  if (location) {
    let [country, city] = location.split(", ");
    if (country && city) {
      formattedLocation = `${city}, ${country}`;
    }
  }

  let formattedPrice = "";
  if (price && !isNaN(price)) {
    formattedPrice = `€${parseFloat(price).toFixed(2)}`;
  }
  return (
    <div>
      <div>
        <img src={gallery[0]} alt={name} />
      </div>
      <div>
        <div>
          <h2>{name}</h2>
          <p>{formattedPrice}</p>
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
