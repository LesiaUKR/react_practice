import React from "react";
import DefaultBtn from "../DefaultBtn/DefaultBtn";
import CategoryBadge from "../CategoryBadge/CategoryBadge";
import Icon from "../Icon/Icon";
import { formattedLocation } from "../../helpers/formattedLocation";
import { formattedPrice } from "../../helpers/formattedPrice";
import { capitalizedFirstLetter } from "./../../helpers/capitalizedFirstLetter";
import {
  CardDescription,
  CardInfo,
  CardReviewLocationBox,
  CardText,
  CardTitleBox,
  CategoryList,
  ItemCardContainer,
} from "./ItemCard.styled";
import { useTheme } from "styled-components";

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
  const theme = useTheme();
  const categories = [
    { icon: "adults", text: `${adults} adults` },
    { icon: "transmission", text: `${capitalizedFirstLetter(transmission)}` },
    { icon: "engine", text: `${capitalizedFirstLetter(engine)}` },
    { icon: "kitchen", text: `Kitchen` },
    { icon: "beds", text: `${details.beds} beds` },
    { icon: "ac", text: `AC` },
  ];

  console.log(categories);

  return (
    <ItemCardContainer>
      <div className="card-img-box">
        <img src={gallery[0]} alt={name} />
      </div>
      <CardInfo>
        <CardTitleBox>
          <h2 className="card-title">{name}</h2>
          <div className="card-price-box">
            <p className="card-price">{formattedPrice(price)}</p>
            <button type="button" className="reset-btn">
              <Icon name="heart-default" />
            </button>
          </div>
        </CardTitleBox>
        <CardReviewLocationBox>
          <div className="review-box">
            <span className="icon-box">
              <Icon
                name="star"
                stroke={theme.iconStarColor}
                fill={theme.iconStarColor}
              />
            </span>
            <button type="button" className="reset-btn review-btn">
              <CardText>
                {rating}({reviews.length} Reviews)
              </CardText>
            </button>
          </div>
          <div className="location-box">
            <span className="icon-box location-icon">
              <Icon name="location" stroke={theme.iconColorFirst} />
            </span>
            <CardText>{formattedLocation(location)}</CardText>
          </div>
        </CardReviewLocationBox>
        <CardDescription>{description}</CardDescription>
        <CategoryList>
          {categories.map((category) => (
            <li key={category.icon} className="category-item">
              <CategoryBadge icon={category.icon} feature={category.text} />
            </li>
          ))}
        </CategoryList>

        <DefaultBtn type="button" text="Show more" className="show-more-btn" />
      </CardInfo>
    </ItemCardContainer>
  );
};

export default ItemCard;
