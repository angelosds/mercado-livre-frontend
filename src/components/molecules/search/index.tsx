import React, { FormEvent, useState } from 'react'
import { useTranslation } from 'next-i18next'

import * as S from './style'

import Input from '../../atoms/input'
import SearchIcon from '../../../assets/icons/search.svg'

export type Props = {
  onSubmit: (value: string) => void;
}

const Search = ({ onSubmit }: Props) => {
  const [query, setQuery] = useState('')
  const { t } = useTranslation('common')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (onSubmit && query.length >= 3) {
      onSubmit(query)
    }
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <Input radius="left" placeholder={t('searchPlaceholder')} type="search" value={query} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)} />
      <S.Submit type="submit">
        <SearchIcon height={18} width={18} />
      </S.Submit>
    </S.Form>
  )
}

export default Search
