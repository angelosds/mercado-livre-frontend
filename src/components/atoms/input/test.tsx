import renderer from 'react-test-renderer'
import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

import { theme } from '../../../theme';

import Input, { Props } from '.'

describe('Input', () => {
  const build = ({ placeholder, radius, value, onChange }: Props) => {
    const { container } = render(<ThemeProvider theme={theme}><Input placeholder={placeholder} radius={radius} value={value} onChange={onChange} /></ThemeProvider>)
    const styleContainer = renderer.create(<ThemeProvider theme={theme}><Input placeholder={placeholder} radius={radius} value={value} onChange={onChange} /></ThemeProvider>).toJSON()

    return { container, styleContainer }
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

  it('adds a full border radius', () => {
    const { styleContainer } = build({ onChange: () => {} })

    expect(styleContainer).toHaveStyleRule('border-bottom-left-radius', '4px')
    expect(styleContainer).toHaveStyleRule('border-bottom-right-radius', '4px')
    expect(styleContainer).toHaveStyleRule('border-top-left-radius', '4px')
    expect(styleContainer).toHaveStyleRule('border-top-right-radius', '4px')
  })

  it('adds a left border radius', () => {
    const { styleContainer } = build({ onChange: () => {}, radius: 'left' })

    expect(styleContainer).toHaveStyleRule('border-bottom-left-radius', '4px')
    expect(styleContainer).toHaveStyleRule('border-bottom-right-radius', '0')
    expect(styleContainer).toHaveStyleRule('border-top-left-radius', '4px')
    expect(styleContainer).toHaveStyleRule('border-top-right-radius', '0')
  })

  it('adds a right border radius', () => {
    const { styleContainer } = build({ onChange: () => {}, radius: 'right' })

    expect(styleContainer).toHaveStyleRule('border-bottom-left-radius', '0')
    expect(styleContainer).toHaveStyleRule('border-bottom-right-radius', '4px')
    expect(styleContainer).toHaveStyleRule('border-top-left-radius', '0')
    expect(styleContainer).toHaveStyleRule('border-top-right-radius', '4px')
  })

  it('removes border radius', () => {
    const { styleContainer } = build({ onChange: () => {}, radius: 'none' })

    expect(styleContainer).toHaveStyleRule('border-bottom-left-radius', '0')
    expect(styleContainer).toHaveStyleRule('border-bottom-right-radius', '0')
    expect(styleContainer).toHaveStyleRule('border-top-left-radius', '0')
    expect(styleContainer).toHaveStyleRule('border-top-right-radius', '0')
  })
})
