import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
body {
  background-color: ${(props) => props.theme.body};
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    color: ${(props) => props.theme.title};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

 h1,
 h2,
 h3,
 h4,
 h5,
 h6,
 p,
 ul,
 ol {
   margin: 0;
   padding: 0;
 }

 ul {
   list-style: none;
 }

 img {
   display: block;
   max-width: 100%;
   height: auto;
 }

 a{
  text-decoration:none;
      color: white;
 }
`;
