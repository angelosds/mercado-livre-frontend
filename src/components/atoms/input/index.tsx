import React from 'react'

import * as S from './style'

export type Props = {
  placeholder?: string;
  radius?: 'full' | 'left' | 'right' | 'none';
  value?: string;
  type?: string;
  onChange: React.ChangeEventHandler;
}

const Input = ({ placeholder, radius = 'full', type = 'text', value, onChange }: Props) => (
  <S.Wrapper placeholder={placeholder} radius={radius} type={type} value={value} onChange={onChange} />
)

export default Input
