import React from "react";
import { StyledBtn } from "./DefaultBtn.styled";

const DefaultBtn = ({ text }) => {
  return <StyledBtn type="button">{text}</StyledBtn>;
};

export default DefaultBtn;
