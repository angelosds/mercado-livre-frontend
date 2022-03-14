import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../theme';

import Card, { Props } from '.'

describe('Card', () => {
  const build = ({ children, padding }: Props) => {
    const { container, getByTestId } = render(<ThemeProvider theme={theme}><Card padding={padding}>{children}</Card></ThemeProvider>)

    return { container, getByTestId }
  }

  it('should render the component', () => {
    const { container } = build({ children: '' })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render inner content', () => {
    const children = 'hello world'

    const { getByTestId } = build({ children })

    expect(getByTestId('card-wrapper').textContent).toEqual(children)
  })
})
