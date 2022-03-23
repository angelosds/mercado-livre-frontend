import React from 'react'

import Container from '../../atoms/container'
import Logo from '../../../assets/icons/mercado-livre-logo.svg'
import Search from '../../molecules/search'

import * as S from './style'
import Link from 'next/link'

export type Props = {
  onSubmit: (query: string) => void
}

const Header = ({ onSubmit }: Props) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <Link href="/">
          <a>
            <Logo height={36} width={53} />
          </a>
        </Link>
        <Search onSubmit={onSubmit} />
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default Header
