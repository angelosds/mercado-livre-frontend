import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../theme';

import Search, { Props } from '.'

describe('Search', () => {
  const build = ({ onSubmit }: Props) => {
    const { container } = render(<ThemeProvider theme={theme}><Search onSubmit={onSubmit} /></ThemeProvider>)

    return { container }
  }

  it('should render the component', () => {
    const { container } = build({ onSubmit: () => {} })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should call onSubmit', () => {
    const onSubmit = jest.fn()

    build({ onSubmit })

    fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'hello world' } })
    fireEvent.click(screen.getByRole('button'))

    expect(onSubmit).toHaveBeenCalled()
  })

  it('should not call onSubmit when input value length is lower then 3', () => {
    const onSubmit = jest.fn()

    build({ onSubmit })

    fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'he' } })
    fireEvent.click(screen.getByRole('button'))

    expect(onSubmit).not.toHaveBeenCalled()
  })
})
