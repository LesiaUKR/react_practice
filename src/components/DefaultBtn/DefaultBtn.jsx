import React from "react";
import { StyledBtn } from "./DefaultBtn.styled";

const DefaultBtn = ({ text, className }) => {
  return (
    <StyledBtn type="button" className={className}>
      {text}
    </StyledBtn>
  );
};

export default DefaultBtn;
