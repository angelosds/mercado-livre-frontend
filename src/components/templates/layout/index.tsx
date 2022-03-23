import React from 'react'
import { useTranslation } from 'next-i18next';

import Container from '../../atoms/container';
import Header from '../../organisms/header'

import * as S from './style';

export type Props = {
  children: React.ReactNode;
  onSearch: (query: string) => void
}

const LayoutTemplate = ({ children, onSearch }: Props) => {
  const { t } = useTranslation('common')

  return (
    <S.Wrapper>
      <Header onSubmit={onSearch} />

      <S.ContainerWrapper>
        <Container data-testid="container">
          {children}
        </Container>
      </S.ContainerWrapper>

      <S.Footer>
        <Container>
          {t('copyright', { appName: t('appName') })}
        </Container>
      </S.Footer>
    </S.Wrapper>
  )
}

export default LayoutTemplate
