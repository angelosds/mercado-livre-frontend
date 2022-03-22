import styled from 'styled-components'

export const Wrapper = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.gray500};
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.space.xl};
`
