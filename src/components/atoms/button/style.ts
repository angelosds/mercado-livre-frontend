import styled from 'styled-components'

export const Wrapper = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary500};
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  height: 44px;
  outline: 0;
  padding: 0 ${({ theme }) => theme.space.xl};
  transition: .2s background-color linear;

  &:focus {
    box-shadow: 0 0 0 ${({theme}) => theme.outline.sm} ${({theme}) => theme.colors.secondary100};
  }

  &:hover {
    background-color: ${({theme}) => theme.colors.secondary700};
  }
`
