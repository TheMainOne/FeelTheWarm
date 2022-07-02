import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 31px;
  padding-right: 31px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 40px;
    padding-right: 40px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1024px;
    padding-left: 55px;
    padding-right: 55px;
  }
`;

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}
body {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-size: 16px;
  letter-spacing: 0.03em;
  background-color: #f7f7f7;
  color: #ffffff;
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}
ul,
ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
}
img {
  display: block;
  width: 100%;
  height: 100%;
}
a {
  text-decoration: none;
  color: inherit;
}
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
`;
