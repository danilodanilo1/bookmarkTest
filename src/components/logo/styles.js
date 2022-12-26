import styled from "styled-components";

export const LogoImg = styled.img`
  width: 5vw;
  height: 5vw;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  font-family: sans-serif;
  line-height: 0.1;

  > h1 {
    font-size: 3vw;
  }

  > h2 {
    font-size: 2vw;
    color: #939393;
  }
`;
