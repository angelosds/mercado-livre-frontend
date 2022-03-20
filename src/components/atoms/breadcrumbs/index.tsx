import React from 'react'

import * as S from './style'

export type Props = {
  items: Array<string>;
}

const Breadcrumbs = ({ items }: Props) => (
  <S.Wrapper>
    <S.List>
      {items.map((item, index) => {
        const isLastIndex = index === items.length - 1
        const value = isLastIndex ? <strong>{item}</strong> : item

        return (<S.Item key={item}>{value}{isLastIndex ? null : <S.Chevron />}</S.Item>)
      })}
    </S.List>
  </S.Wrapper>
)

export default Breadcrumbs
