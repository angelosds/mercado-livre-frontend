import React from 'react'
import Image from 'next/image'

import { floatToCents } from '../../../utils'

import Button from '../../atoms/button'
import Card from '../../atoms/card'

import * as S from './style'
import Product from '../../../models/product'

export type Props = {
  product: Product,
  onBuyItem: () => void;
}

const ProductDetails = ({ product: { condition, description, picture, price, title, sold_quantity }, onBuyItem }: Props) => (
  <Card>
    <S.Wrapper>
      <S.Content>
        <Image src={picture} layout="responsive" objectFit="contain" height={640} width={640} priority={true}  />

        <S.Info>
          <S.Details data-testid="details">{condition} - {sold_quantity} vendidos</S.Details>
          <S.Title>{title}</S.Title>
          <Button onClick={onBuyItem}>Comprar</Button>
          <S.Price data-testid="price">
            $ {Math.floor(price || 0).toLocaleString()}
            <S.Cents>{floatToCents(price)}</S.Cents>
          </S.Price>
        </S.Info>
      </S.Content>

      <S.Content>
        <div>
          <S.DescriptionTitle>Descrição do produto</S.DescriptionTitle>
          <S.Description data-testid="description" dangerouslySetInnerHTML={{ __html: description }}></S.Description>
        </div>
      </S.Content>
    </S.Wrapper>
  </Card>
)

export default ProductDetails
