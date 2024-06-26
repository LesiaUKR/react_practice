import React from "react";
import DefaultBtn from "../DefaultBtn/DefaultBtn";
import CategoryBadge from "../CategoryBadge/CategoryBadge";
import Icon from "../Icon/Icon";

const ItemCard = ({ advert }) => {
  const {
    name,
    price,
    rating,
    location,
    adults,
    engine,
    transmission,
    description,
    gallery,
    details,
    reviews,
  } = advert;

  const categories = [
    { icon: "adults", text: `${adults} adults` },
    { icon: "transmission", text: `${transmission}` },
  ];

  // adults,
  // [transmission]: transmission,
  // engine: capitalizeFirstLetter(engine),
  // Kitchen: details.kitchen,
  // beds: details.beds,
  // AC: details.airConditioner,

  console.log(categories);
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
          <span>({reviews.length} Reviews)</span>
        </div>
        <div>
          <p>{description}</p>
          <Icon name="location" />
          <p>{formattedLocation}</p>
        </div>
        <ul>
          {categories.map((category) => (
            <li key={category.icon}>
              <CategoryBadge icon={category.icon} feature={category.text} />
            </li>
          ))}
        </ul>

        <DefaultBtn text="Show more" />
      </div>
    </div>
  );
};

export default ItemCard;
