import styled from 'styled-components'

export const Wrapper = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary500};
  display: flex;
  height: 56px;
`

export const Container = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 53px 1fr;
  width: 100%;
`
