import React from 'react'

import * as S from './style'

export type Props = {
  placeholder?: string;
  value?: string;
  onChange: () => void;
}

const Input = ({ placeholder, value, onChange }: Props) => (
  <S.Wrapper placeholder={placeholder} value={value} onChange={onChange} />
)

export default Input
