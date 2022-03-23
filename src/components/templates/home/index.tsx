import React from 'react'
import { useTranslation } from 'next-i18next';

import * as S from './style'

const HomeTemplate = () => {
  const { t } = useTranslation('common')

  return (
    <S.Wrapper>
      {t('searchHint')}
    </S.Wrapper>
  )
}

export default HomeTemplate
