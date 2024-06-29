import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0px 40px 40px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid red;
  > nav {
    display: flex;
    gap: 8px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: 24px;
  padding: 8px 8px;
  text-decoration: none;
  color: ${(props) => props.theme.textColorPrimary};
  font-weight: 600;
  &.active {
    text-decoration: underline;
    text-underline-position: 2px;
  }
`;
