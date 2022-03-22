import styled from 'styled-components'

import { pixelToRem } from '../../../utils'

export const Wrapper = styled.section`
  color: ${({ theme }) => theme.colors.gray700};
  display: grid;
  grid-gap: ${({ theme }) => theme.space.xl};
  padding: ${({ theme }) => theme.space.lg};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.space.xl};
  }
`

export const Content = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.space.xl};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 2fr 1fr;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 640px 1fr;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`

export const Details = styled.p`
  margin: 0 0 12px 0;
  font-size: ${({ theme }) => theme.fontSizes.xs};
`

export const Title = styled.h1`
  margin: 0 0 24px 0;
  font-size: ${({ theme }) => theme.fontSizes.md};
`

export const Price = styled.p`
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 300;
  line-height: 1;
  margin: 24px 0 0 0;
`

export const Cents = styled.span`
  font-size: ${pixelToRem(20)};
  line-height: ${pixelToRem(28)};
  margin-left: 4px;
`

export const DescriptionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin: 0 0 32px 0;
`

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray500};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin: 0;
`
