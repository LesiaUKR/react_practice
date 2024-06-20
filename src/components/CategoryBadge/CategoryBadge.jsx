import React, { Fragment } from "react";
import Icon from "../Icon/Icon";
import { CategoryNameWrapper, IconWrapper } from "./CategoryBadge.styled";

const CategoryBadge = ({ icon, feature }) => {
  return (
    <Fragment>
      <IconWrapper>
        <Icon name={icon} width="20" height="20" />
      </IconWrapper>
      <CategoryNameWrapper>2 adults</CategoryNameWrapper>
    </Fragment>
  );
};

export default CategoryBadge;
