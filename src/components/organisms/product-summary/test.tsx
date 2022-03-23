import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect'

import { theme } from '../../../theme';

import ProductSummary, { Props } from '.'

const defaultProps: Props = {
  product: {
    condition: 'new',
    description: '',
    free_shipping: true,
    id: 'MLA902237011',
    picture: 'https://http2.mlstatic.com/D_NQ_NP_721876-MLA46114648081_052021-O.webp',
    price: 20000,
    sold_quantity: 10,
    state_name: 'São Paulo',
    title: 'iPhone',
  }
}

describe('ProductSummary', () => {
  const build = ({ product }: Props) => {
    const { container } = render(<ThemeProvider theme={theme}><ProductSummary product={product} /></ThemeProvider>)

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

    expect(screen.getByText(defaultProps.product.title).firstChild?.textContent).toEqual(defaultProps.product.title)
  })

  it('should render a product state name', () => {
    build(defaultProps)

    expect(screen.getByText(defaultProps.product.state_name).firstChild?.textContent).toEqual(defaultProps.product.state_name)
  })

  it('should render a product price', () => {
    build(defaultProps)

    expect(screen.getByTestId('price').textContent).toContain(defaultProps.product.price.toLocaleString())
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
    build({ product: { ...defaultProps.product, free_shipping: false } })

    expect(screen.queryByTestId('truck')).not.toBeTruthy()
  })
})
