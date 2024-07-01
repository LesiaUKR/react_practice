import React from "react";
import { StyledBtn } from "./DefaultBtn.styled";

const DefaultBtn = ({ text, className, type }) => {
  return (
    <StyledBtn type={type} className={className}>
      {text}
    </StyledBtn>
  );
};

export default DefaultBtn;
