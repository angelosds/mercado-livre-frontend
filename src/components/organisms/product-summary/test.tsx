import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect'

import { theme } from '../../../theme';

import ProductSummary, { Props } from '.'

const defaultProps: Props = {
  free_shipping: true,
  picture: 'https://http2.mlstatic.com/D_NQ_NP_721876-MLA46114648081_052021-O.webp',
  title: 'iPhone',
  place: 'São Paulo',
  price: 20000,
}

describe('ProductSummary', () => {
  const build = ({ free_shipping, picture, title, place, price }: Props) => {
    const { container } = render(<ThemeProvider theme={theme}><ProductSummary free_shipping={free_shipping} picture={picture} title={title} place={place} price={price} /></ThemeProvider>)

    return { container }
  }

  it('should render the component', () => {
    const { container } = build(defaultProps)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a image', () => {
    build(defaultProps)

    expect(screen.getByRole('img')).toHaveAttribute('src')
  })

  it('should render a product title', () => {
    build(defaultProps)

    expect(screen.getByText(defaultProps.title).firstChild?.textContent).toEqual(defaultProps.title)
  })

  it('should render a product place', () => {
    build(defaultProps)

    expect(screen.getByText(defaultProps.place).firstChild?.textContent).toEqual(defaultProps.place)
  })

  it('should render a product price', () => {
    build(defaultProps)

    expect(screen.getByText(defaultProps.price).firstChild?.textContent).toEqual(defaultProps.price.toString())
  })

  it('should render a truck icon', () => {
    build(defaultProps)

    expect(screen.getByTestId('truck')).toBeVisible()
  })

  it('should render a truck icon', () => {
    build(defaultProps)

    expect(screen.queryByTestId('truck')).toBeTruthy()
  })

  it('should not render a truck icon', () => {
    build({ ...defaultProps, free_shipping: false })

    expect(screen.queryByTestId('truck')).not.toBeTruthy()
  })
})
