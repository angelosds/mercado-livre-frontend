import React from 'react'

import { SizeTypes } from '../../../types/size-types'

import * as S from './style'

export type Props = {
  children: React.ReactNode;
  padding?: SizeTypes;
}

const Card = ({ children, padding = SizeTypes.sm }: Props) => (
  <S.Wapper data-testid="card-wrapper" padding={padding}>
    {children}
  </S.Wapper>
)

export default Card
