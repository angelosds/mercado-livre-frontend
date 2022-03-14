import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../theme';

import Button, { Props } from '.'

describe('Button', () => {
  const build = ({ children, onClick }: Props) => {
    const { container } = render(<ThemeProvider theme={theme}><Button onClick={onClick}>{children}</Button></ThemeProvider>)

    return { container }
  }

  it('should render the component', () => {
    const { container } = build({ children: '', onClick: () => {} })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render button text', () => {
    const children = 'hello world'

    build({ children, onClick: () => {} })

    expect(screen.getByRole('button').textContent).toEqual(children)
    expect(screen.getByRole('button')).toMatchSnapshot()
  })

  it('should call onClick prop when user clicks the button', () => {
    const onClick = jest.fn()

    build({ children: '', onClick })

    screen.getByRole('button').click()

    expect(onClick).toHaveBeenCalled()
  })
})
