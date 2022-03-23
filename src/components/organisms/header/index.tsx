import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'next-i18next';

import Container from '../../atoms/container'
import Logo from '../../../assets/icons/mercado-livre-logo.svg'
import Search from '../../molecules/search'

import * as S from './style'

export type Props = {
  onSubmit: (query: string) => void
}

const Header = ({ onSubmit }: Props) => {
  const { t } = useTranslation('common')

  return (
    <S.Wrapper>
      <Container>
        <S.Container>
          <Link href="/">
            <a title={t('appName')}>
              <Logo height={36} width={53} />
            </a>
          </Link>
          <Search onSubmit={onSubmit} />
        </S.Container>
      </Container>
    </S.Wrapper>
  )
}

export default Header
