import styled from 'styled-components'

export const Wrapper = styled.nav`
  color: ${({ theme }) => theme.colors.gray500};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`

export const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`

export const Item = styled.li`
  display: flex;
  list-style: none;
`

export const Chevron = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray500};
  border-right: 1px solid ${({ theme }) => theme.colors.gray500};
  height: 6px;
  margin: 0 6px;
  transform: rotate(-45deg) translateY(3px) translateX(-5px);
  width: 6px;
`
