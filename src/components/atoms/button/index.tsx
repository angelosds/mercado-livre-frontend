import React from 'react'

import * as S from './style'

export type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

const Button = ({ children, onClick }: Props) => (
  <S.Wrapper type="button" onClick={onClick}>{children}</S.Wrapper>
)

export default Button
