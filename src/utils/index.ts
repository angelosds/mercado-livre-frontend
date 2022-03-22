import { ROOT_RELATIVE_SIZE } from '../constants/theme';

/**
 * Converts a pixel based unit value to a root relative unit value
 * @param size : pixel unit value;
 * @returns root relative unit value
 */
export const pixelToRem = (size: number) => `${size / ROOT_RELATIVE_SIZE}rem`

/**
 * Converts a float number to cents
 * @param value : float number
 * @returns cents value based on float numbers
 */
export const floatToCents = (value?: number) => {
  const floatValue = (value || 0) % 1
  const roundedValue = Math.round(floatValue * 100)

  return `${roundedValue}0`.substring(0, 2)
}
