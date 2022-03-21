import styled from 'styled-components'

import { pixelToRem } from '../../../utils'

export const Wrapper = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.colors.border200};
  color: ${({ theme }) => theme.colors.gray900};
  padding: 16px 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 180px 1fr;
  }
`

export const ImageWrapper = styled.div`
  border-radius: ${({ theme }) => theme.radius.sm};
  height: 180px;
  margin: 0 auto;
  overflow: hidden;
  width: 180px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0;
  }
`

export const Container = styled.div``

export const InfoContainer = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 32px;
  }
`

export const Title = styled.h1`
  font-size: ${pixelToRem(18)};
  font-weight: 500;
  margin: 0;
  max-width: 400px;
`

export const Price = styled.span`
  align-items: center;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.md};
`

export const Place = styled.span`
  color: ${({ theme }) => theme.colors.gray500};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`

export const TruckIcon = styled.span`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.success};
  border-radius: 18px;
  display: flex;
  height: 18px;
  justify-content: center;
  margin-left: 10px;
  width: 18px;
`
