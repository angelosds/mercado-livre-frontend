import { pixelToRem } from '.';

describe('Utils', () => {
  it('should convert a pixel unit value to a relative unit value', () => {
    expect(pixelToRem(10)).toEqual('0.625rem')
    expect(pixelToRem(16)).toEqual('1rem')
    expect(pixelToRem(24)).toEqual('1.5rem')
    expect(pixelToRem(32)).toEqual('2rem')
  })
})
