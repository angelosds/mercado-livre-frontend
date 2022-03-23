import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../theme';

import ProductsListTemplate, { Props } from '.'

const defaultProps: Props = {
  breadcrumbsItems: ['item 1', 'item 2'],
  items: [
    {
      condition: 'Novo',
      description: 'Descrição',
      free_shipping: true,
      id: 'MLA902237011',
      picture: 'https://http2.mlstatic.com/D_NQ_NP_974179-MLB43818784989_102020-W.webp',
      price: 1200,
      sold_quantity: 30,
      state_name: 'São Paulo',
      title: 'Nome produto',
    },
    {
      condition: 'Novo',
      description: 'Descrição',
      free_shipping: true,
      id: 'MLA902237012',
      picture: 'https://http2.mlstatic.com/D_NQ_NP_974179-MLB43818784989_102020-W.webp',
      price: 1200,
      sold_quantity: 30,
      state_name: 'São Paulo',
      title: 'Nome produto',
    }
  ]
}

describe('ProductsListTemplate', () => {
  const build = ({ breadcrumbsItems, items }: Props) => {
    const { container } = render(<ThemeProvider theme={theme}><ProductsListTemplate breadcrumbsItems={breadcrumbsItems} items={items} /></ThemeProvider>)

    return { container }
  }

  it('should render the component', () => {
    const { container } = build(defaultProps)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render breadrumbs', () => {
    build(defaultProps)

    expect(screen.queryByTestId('breadcrumbs')).toBeTruthy()
  })

  it('should not render breadrumbs', () => {
    build({ ...defaultProps, breadcrumbsItems: null })

    expect(screen.queryByTestId('breadcrumbs')).toBeFalsy()
  })

  it('should render items lits', () => {
    build({ ...defaultProps, breadcrumbsItems: null })

    expect(screen.queryAllByTestId('item').length).toEqual(2)
  })

  it('should not render items lits', () => {
    build({ items: null, breadcrumbsItems: null })

    expect(screen.queryAllByTestId('item').length).toEqual(0)
  })
})
