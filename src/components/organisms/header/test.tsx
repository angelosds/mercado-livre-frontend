import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../theme';

import Header, { Props } from '.'

describe('Header', () => {
  const build = ({ onSubmit }: Props) => {
    const { container } = render(<ThemeProvider theme={theme}><Header onSubmit={onSubmit} /></ThemeProvider>)

    return { container }
  }

  it('should render the component', () => {
    const { container } = build({ onSubmit: () => {} })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should call onSubmit when user do a form submit', () => {
    const onSubmit = jest.fn()

    build({ onSubmit })

    fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'hello world' } })
    fireEvent.click(screen.getByRole('button'))

    expect(onSubmit).toHaveBeenCalled()
  })
})
