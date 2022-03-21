import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../theme';

import Container, { Props } from '.'

describe('Container', () => {
  const build = ({ children }: Props) => {
    const { container } = render(<ThemeProvider theme={theme}><Container>{children}</Container></ThemeProvider>)

    return { container }
  }

  it('should render the component', () => {
    const { container } = build({ children: '' })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render inner content', () => {
    const children = 'test'
    const { container } = build({ children })

    expect(container.firstChild?.textContent).toEqual(children)
  })
})
