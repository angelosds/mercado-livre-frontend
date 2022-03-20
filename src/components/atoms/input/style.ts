import styled from 'styled-components'

export const Wrapper = styled.input`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 0;
  color: ${({ theme }) => theme.colors.gray700};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  height: 38px;
  outline: 0;
  padding: 10px 16px;

  &:focus {
    box-shadow: 0 0 0 ${({theme}) => theme.outline.sm} ${({ theme }) => theme.colors.gray300};
  }
`
