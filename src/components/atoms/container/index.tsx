import React from 'react'

import * as S from './style'

export type Props = {
  children: React.ReactNode
}

const Container = ({ children }: Props) => (<S.Wrapper>{children}</S.Wrapper>)

export default Container
