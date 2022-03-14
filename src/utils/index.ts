import { ROOT_RELATIVE_SIZE } from '../constants/theme';

/**
 * Converts a pixel based unit value to a root relative unit value
 * @param size : pixel unit value;
 * @returns root relative unit value
 */
export const pixelToRem = (size: number) => `${size / ROOT_RELATIVE_SIZE}rem`
