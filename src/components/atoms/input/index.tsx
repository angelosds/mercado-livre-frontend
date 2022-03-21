import React from 'react'

import * as S from './style'

export type Props = {
  placeholder?: string;
  radius?: 'full' | 'left' | 'right' | 'none';
  value?: string;
  onChange: React.ChangeEventHandler;
}

const Input = ({ placeholder, radius = 'full', value, onChange }: Props) => (
  <S.Wrapper placeholder={placeholder} radius={radius} value={value} onChange={onChange} />
)

export default Input
