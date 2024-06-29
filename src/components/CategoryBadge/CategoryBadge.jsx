import React, { Fragment } from "react";
import Icon from "../Icon/Icon";
import { CategoryNameWrapper, IconWrapper } from "./CategoryBadge.styled";

const CategoryBadge = ({ icon, feature, featureQuantity }) => {
  return (
    <Fragment>
      <IconWrapper>
        <Icon name={icon} />
      </IconWrapper>
      <CategoryNameWrapper>
        {featureQuantity} {feature}
      </CategoryNameWrapper>
    </Fragment>
  );
};

export default CategoryBadge;
