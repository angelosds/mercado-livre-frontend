import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../theme';

import Breadcrumbs, { Props } from '.'

describe('Breadcrumbs', () => {
  const build = ({ items }: Props) => {
    const { container } = render(<ThemeProvider theme={theme}><Breadcrumbs items={items} /></ThemeProvider>)

    return { container }
  }

  it('should render the component', () => {
    const { container } = build({ items: [] })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders all items', () => {
    const items = ['item 1', 'item 2', 'item 3']

    build({ items })

    expect(screen.getAllByRole('listitem')).toHaveLength(items.length)
  })

  it('renders a chevron in all items, except the last one', () => {
    const items = ['item 1', 'item 2', 'item 3']

    build({ items })

    expect(screen.getAllByRole('listitem').at(0)?.getElementsByTagName('div').length).toEqual(1)
    expect(screen.getAllByRole('listitem').at(1)?.getElementsByTagName('div').length).toEqual(1)
    expect(screen.getAllByRole('listitem').at(2)?.getElementsByTagName('div').length).toEqual(0)
  })

  it('renders last item as strong text', () => {
    const items = ['item 1', 'item 2', 'item 3']

    build({ items })

    expect(screen.getAllByRole('listitem').at(0)?.getElementsByTagName('strong').length).toEqual(0)
    expect(screen.getAllByRole('listitem').at(1)?.getElementsByTagName('strong').length).toEqual(0)
    expect(screen.getAllByRole('listitem').at(2)?.getElementsByTagName('strong').length).toEqual(1)
  })
})
