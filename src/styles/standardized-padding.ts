import { css } from 'styled-components'

import { SizeTypes } from '../types/size-types'

export type Props = {
  padding: SizeTypes
}

const sizeTypesToPixels = (padding: SizeTypes) => {
  switch (padding) {
    case SizeTypes.xs: return '4px';
    case SizeTypes.sm: return '8px';
    case SizeTypes.md: return '16px';
    case SizeTypes.lg: return '24px';
    case SizeTypes.xl: return '32px';
  }
}

const standardizedPadding = css<Props>`
  padding: ${({ padding }) => sizeTypesToPixels(padding)};
`

export default standardizedPadding
