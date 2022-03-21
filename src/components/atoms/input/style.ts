import styled from 'styled-components'
import { Props } from '.'

export const Wrapper = styled.input<Props>`
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom-left-radius: ${({ radius, theme }) => radius === 'full' || radius === 'left' ? theme.radius.sm : 0};
  border-bottom-right-radius: ${({ radius, theme }) => radius === 'full' || radius === 'right' ? theme.radius.sm : 0};
  border-top-left-radius: ${({ radius, theme }) => radius === 'full' || radius === 'left' ? theme.radius.sm : 0};
  border-top-right-radius: ${({ radius, theme }) => radius === 'full' || radius === 'right' ? theme.radius.sm : 0};
  border: 0;
  color: ${({ theme }) => theme.colors.gray700};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  height: 38px;
  outline: 0;
  padding: 10px 16px;
`
