import renderer from 'react-test-renderer'
import styled from 'styled-components'
import 'jest-styled-components'

import { SizeTypes } from '../types/size-types'

import standardizedPadding, { Props } from './standardized-padding'

const PaddingComponent = styled.div`
  ${standardizedPadding}
`

describe('Styles', () => {
  describe('PaddingComponent', () => {
    const build = ({ padding }: Props) => {
      const container = renderer.create(<PaddingComponent padding={padding} />).toJSON()

      return { container }
    }

    it('should add a xs padding value to the component', () => {
      const { container } = build({ padding: SizeTypes.xs })

      expect(container).toHaveStyleRule('padding', '4px')
    })

    it('should add a sm padding value to the component', () => {
      const { container } = build({ padding: SizeTypes.sm })

      expect(container).toHaveStyleRule('padding', '8px')
    })

    it('should add a md padding value to the component', () => {
      const { container } = build({ padding: SizeTypes.md })

      expect(container).toHaveStyleRule('padding', '16px')
    })

    it('should add a lg padding value to the component', () => {
      const { container } = build({ padding: SizeTypes.lg })

      expect(container).toHaveStyleRule('padding', '24px')
    })

    it('should add a xl padding value to the component', () => {
      const { container } = build({ padding: SizeTypes.xl })

      expect(container).toHaveStyleRule('padding', '32px')
    })
  })
})
