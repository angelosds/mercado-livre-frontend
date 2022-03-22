import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../theme';

import HomeTemplate from '.'

describe('HomeTemplate', () => {
  const build = () => {
    const { container } = render(<ThemeProvider theme={theme}><HomeTemplate /></ThemeProvider>)

    return { container }
  }

  it('should render the component', () => {
    const { container } = build()

    expect(container.firstChild).toMatchSnapshot()
  })
})
