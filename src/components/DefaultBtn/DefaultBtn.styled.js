import styled from "styled-components";

export const StyledBtn = styled.button`
  padding: 16px 40px;

  border: none;
  border-radius: 200px;
  background: ${({ theme }) => theme.buttonColor};

  color: ${({ theme }) => theme.body};

  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.08px;
`;
