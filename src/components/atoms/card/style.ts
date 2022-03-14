import styled from 'styled-components'

import standardizedPadding from '../../../styles/standardized-padding'

export const Wapper = styled.div`
  ${standardizedPadding}
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.sm};
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%);
`
