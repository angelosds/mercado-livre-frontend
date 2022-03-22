import React from 'react'

import Container from '../../atoms/container';
import Header from '../../organisms/header'

import * as S from './style';

export type Props = {
  children: React.ReactNode;
  onSearch: (query: string) => void
}

const LayoutTemplate = ({ children, onSearch }: Props) => (
  <S.Wrapper>
    <Header onSubmit={onSearch} />
    <Container data-testid="container">
      {children}
    </Container>
  </S.Wrapper>
)

export default LayoutTemplate
