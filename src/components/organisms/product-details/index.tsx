import React from 'react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next';

import { floatToCents } from '../../../utils'

import Button from '../../atoms/button'
import Card from '../../atoms/card'

import * as S from './style'
import Product from '../../../models/product'

export type Props = {
  product: Product,
  onBuyItem: () => void;
}

const ProductDetails = ({ product: { condition, description, picture, price, title, sold_quantity }, onBuyItem }: Props) => {
  const { t } = useTranslation('common')

  return (
    <Card>
      <S.Wrapper>
        <S.Content>
          <Image src={picture} layout="responsive" objectFit="contain" height={640} width={640} priority={true}  />

          <S.Info>
            <S.Details data-testid="details">{t(`productCondition.${condition}`)} - {t('selled', { count: sold_quantity })}</S.Details>
            <S.Title>{title}</S.Title>
            <Button onClick={onBuyItem}>{t('buy')}</Button>
            <S.Price data-testid="price">
              $ {Math.floor(price || 0).toLocaleString()}
              <S.Cents>{floatToCents(price)}</S.Cents>
            </S.Price>
          </S.Info>
        </S.Content>

        <S.Content>
          <div>
            <S.DescriptionTitle>{t('productDescription')}</S.DescriptionTitle>
            <S.Description data-testid="description" dangerouslySetInnerHTML={{ __html: description }}></S.Description>
          </div>
        </S.Content>
      </S.Wrapper>
    </Card>
  )
}

export default ProductDetails
