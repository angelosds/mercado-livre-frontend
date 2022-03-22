import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect'

import { theme } from '../../../theme';

import ProductDetails, { Props } from '.'

const defaultProps: Props = {
  condition: 'Novo',
  description: 'Descrição',
  picture: 'https://http2.mlstatic.com/D_NQ_NP_974179-MLB43818784989_102020-W.webp',
  price: 1200.99,
  sold_quantity: 30,
  title: 'Nome produto',
  onBuyItem: () => {}
}

describe('ProductDetails', () => {
  const build = ({ condition, description, picture, price, sold_quantity, title, onBuyItem }: Props) => {
    const { container } = render(<ThemeProvider theme={theme}><ProductDetails condition={condition} description={description} picture={picture} price={price} sold_quantity={sold_quantity} title={title} onBuyItem={onBuyItem} /></ThemeProvider>)

    return { container }
  }

  it('should render the component', () => {
    const { container } = build(defaultProps)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a product title', () => {
    build(defaultProps)

    expect(screen.getByText(defaultProps.title).firstChild?.textContent).toEqual(defaultProps.title)
  })

  it('should render a image', () => {
    build(defaultProps)

    expect(screen.getByRole('img')).toHaveAttribute('src')
  })

  it('should render a product title', () => {
    build(defaultProps)

    expect(screen.getByText(defaultProps.title).textContent).toEqual(defaultProps.title)
  })

  it('should render a product condition', () => {
    build(defaultProps)

    expect(screen.getByTestId('details').textContent).toContain(defaultProps.condition)
  })

  it('should render a product sold quantity', () => {
    build(defaultProps)

    expect(screen.getByTestId('details').textContent).toContain(defaultProps.sold_quantity.toString())
  })

  it('should render a product price without cents', () => {
    build(defaultProps)

    expect(screen.getByTestId('price').textContent?.substring(2, 7)).toEqual(Math.floor(1200).toLocaleString())
  })

  it('should render a product price without cents when price is 0', () => {
    build({ ...defaultProps, price: 0 })

    expect(screen.getByTestId('price').textContent?.substring(2, 3)).toEqual('0')
  })

  it('should render a product price cents', () => {
    build(defaultProps)

    expect(screen.getByTestId('price').textContent?.substring(7, 9)).toEqual((99).toLocaleString())
  })

  it('should render a product price cents when price is 0', () => {
    build({ ...defaultProps, price: 0 })

    expect(screen.getByTestId('price').textContent?.substring(3, 5)).toEqual('00')
  })

  it('should render a product description', () => {
    build(defaultProps)

    expect(screen.getByTestId('description').textContent).toEqual(defaultProps.description)
  })
})
