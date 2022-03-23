import styled from 'styled-components'

export const Wrapper = styled.main`
  display: grid;
  grid-gap: ${({ theme }) => theme.space.lg};
`

export const ContainerWrapper = styled.div`
  min-height: calc(100vh - 154px);
`

export const Footer = styled.footer`
  color: ${({ theme }) => theme.colors.gray500};
  margin: ${({ theme }) => theme.space.lg} 0  ${({ theme }) => theme.space.xl} 0;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.xs};
`
