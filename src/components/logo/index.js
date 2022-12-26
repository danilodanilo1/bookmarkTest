import React from 'react';
import LogoImage from '../../assets/images/logo.svg'
import { LogoImg } from './styles';
import * as S from './styles.js'

// import { Container } from './styles';

function Logo() {
  return (
    <S.Header>
      <S.LogoImg src={LogoImage} />
      <h1>Travel Book Agenda.</h1>
      <h2>Here you can book all your travels very simple.</h2>
    </S.Header>
  );
}

export default Logo;