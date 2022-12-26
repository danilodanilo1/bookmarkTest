import React from "react";
import LogoImage from "../../assets/images/logo.svg";
import * as S from "./styles.js";

// import { Container } from './styles';

function Logo() {
  return (
    <S.Header>
      <S.LogoImg src={LogoImage} />
      <h1>Travel Book Agenda.</h1>
      <h2>Your travels very simple. By Danilo Nascimento</h2>
    </S.Header>
  );
}

export default Logo;
