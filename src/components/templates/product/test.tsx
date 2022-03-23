import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../theme';

import ProductDetailsTemplate, { Props } from '.'

const defaultProps: Props = {
  product: {
    condition: 'Novo',
    description: 'Descrição',
    free_shipping: true,
    id: 'MLA902237011',
    picture: 'https://http2.mlstatic.com/D_NQ_NP_974179-MLB43818784989_102020-W.webp',
    price: 1200.99,
    sold_quantity: 30,
    state_name: 'São Paulo',
    title: 'Nome produto',
  },
  onBuyItem: () => {}
}

describe('ProductDetailsTemplate', () => {
  const build = ({ product, onBuyItem }: Props) => {
    const { container } = render(<ThemeProvider theme={theme}><ProductDetailsTemplate product={product} onBuyItem={onBuyItem} /></ThemeProvider>)

    return { container }
  }

  it('should render the component', () => {
    const { container } = build(defaultProps)

    expect(container.firstChild).toMatchSnapshot()
  })
})
