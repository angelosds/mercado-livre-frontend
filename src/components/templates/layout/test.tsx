import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../theme';

import LayoutTemplate, { Props } from '.'

describe('LayoutTemplate', () => {
  const build = ({ children, onSearch }: Props) => {
    const { container } = render(<ThemeProvider theme={theme}><LayoutTemplate onSearch={onSearch}>{children}</LayoutTemplate></ThemeProvider>)

    return { container }
  }

  it('should render the component', () => {
    const { container } = build({ children: '', onSearch: () => {} })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a children value', () => {
    const children = 'hello world'

    build({ children, onSearch: () => {} })

    expect(screen.getByText(children).firstChild?.textContent).toEqual(children)
  })

  it('should call onSearch when user do a form submit', () => {
    const onSearch = jest.fn()

    build({ children: '', onSearch })

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'hello world' } })
    fireEvent.click(screen.getByRole('button'))

    expect(onSearch).toHaveBeenCalled()
  })
})
