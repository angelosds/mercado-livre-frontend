import React from 'react'
import Image from 'next/image'

import * as S from './style'

import Truck from '../../../assets/icons/truck.svg'

export type Props = {
  free_shipping: boolean;
  picture: string;
  place: string;
  price: number;
  title: string;
}

const ProductSummary = ({ free_shipping, picture, place, price, title }: Props) => (
  <S.Wrapper>
    <S.ImageWrapper>
      <Image src={picture} layout="fixed" objectFit="contain" height={180} width={180} priority={true} />
    </S.ImageWrapper>
    <S.Container>
      <S.InfoContainer>
        <S.Price>
          {price}
          {free_shipping ?
            <S.TruckIcon data-testid="truck">
              <Truck height={12} width={12} />
            </S.TruckIcon>
            : null
          }
        </S.Price>
        <S.Place>{place}</S.Place>
      </S.InfoContainer>
      <S.Title>{title}</S.Title>
    </S.Container>
  </S.Wrapper>
)

export default ProductSummary
