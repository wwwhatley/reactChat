import styled, { css } from "styled-components";

export const Title1 = styled.h1`
  font-family: "Karla", sans-serif;
  color: #fff;
  font-weight: 600;
`;

export const Li = styled.li`
  font-family: "Karla", sans-serif;
  font-weight: 300;
  text-decoration: none;
  list-style: none;
  padding: 0.2em 0;
  font-size: 1.4em;
`;

export const Text = styled.p`
  font-family: "Karla", sans-serif;
  color: ${props => props.color};
  margin: ${props => props.margin || ".5em 0"};
`;

export const Wrapper = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 60px;
  grid-template-areas:
    "r m m m m m"
    "r m m m m m"
    "r m m m m m"
    "r m m m m m"
    "r m m m m m"
    "n f f f f f";
`;
