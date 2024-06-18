import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0px 40px 40px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid red;
  > nav {
    display: flex;
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: 36px;
  padding: 8px 16px;
  text-decoration: none;
  color: red;
  font-weight: 800;
  &.active {
    text-decoration: underline;
    text-underline-position: 2px;
  }
`;

export const ErrorInfo = styled.p`
  text-align: left;
  color: tomato;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 500;
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid grey;
  text-decoration: none;
  color: black;
  font-size: 12px;
  font-weight: 500;
  :hover {
    background-color: lightblue;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;
