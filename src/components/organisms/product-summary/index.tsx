import React from 'react'
import Image from 'next/image'

import * as S from './style'

import Truck from '../../../assets/icons/truck.svg'
import Link from 'next/link'
import Product from '../../../models/product'

export type Props = {
  product: Product
}

const ProductSummary = ({ product: { free_shipping, id, picture, state_name, price, title } }: Props) => (
  <Link href={'/items/[id]'} as={`/items/${id}`}>
    <a>
      <S.Wrapper>
        <S.ImageWrapper>
          <Image src={picture} alt={title} layout="fixed" objectFit="contain" height={180} width={180} priority={true} />
        </S.ImageWrapper>
        <S.Container>
          <S.InfoContainer>
            <S.Price data-testid="price">
              $ {price.toLocaleString()}
              {free_shipping ?
                <S.TruckIcon data-testid="truck">
                  <Truck height={12} width={12} />
                </S.TruckIcon>
                : null
              }
            </S.Price>
            <S.Place>{state_name}</S.Place>
          </S.InfoContainer>
          <S.Title>{title}</S.Title>
        </S.Container>
      </S.Wrapper>
    </a>
  </Link>
)

export default ProductSummary
