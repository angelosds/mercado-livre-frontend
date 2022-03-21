import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 42px;
`

export const Submit = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray100};
  border-bottom-right-radius: ${({ theme }) => theme.radius.sm};
  border-top-right-radius: ${({ theme }) => theme.radius.sm};
  border: 0;
  color: ${({ theme }) => theme.colors.gray900};
  display: flex;
  height: 38px;
  justify-content: center;
  outline: 0;
  transition: .2s background-color linear;
  width: 42px;

  &:focus {
    box-shadow: 0 0 0 ${({ theme }) => theme.outline.sm} ${({ theme }) => theme.colors.gray300};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray200};
  }
`
