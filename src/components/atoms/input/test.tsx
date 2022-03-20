import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect'

import { theme } from '../../../theme';

import Input, { Props } from '.'

describe('Input', () => {
  const build = ({ placeholder, value, onChange }: Props) => {
    const { container } = render(<ThemeProvider theme={theme}><Input placeholder={placeholder} value={value} onChange={onChange} /></ThemeProvider>)

    return { container }
  }

  it('should render the component', () => {
    const { container } = build({ value: '', onChange: () => {} })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a placeholder text', () => {
    const placeholder = 'hello world'

    build({ placeholder, onChange: () => {} })

    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', placeholder)
  })

  it('should add a value to the input', () => {
    const value = 'hello world'

    build({ value, onChange: () => {} })

    expect(screen.getByRole('textbox')).toHaveValue(value)
  })

  it('should emit onChange when input value changes', () => {
    const onChange = jest.fn()

    build({ onChange })

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'hello world' } })

    expect(onChange).toHaveBeenCalled()
  })
})
