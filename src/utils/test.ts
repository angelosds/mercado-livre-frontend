import { floatToCents, pixelToRem } from '.';

describe('Utils', () => {
  it('should convert a pixel unit value to a relative unit value', () => {
    expect(pixelToRem(10)).toEqual('0.625rem')
    expect(pixelToRem(16)).toEqual('1rem')
    expect(pixelToRem(24)).toEqual('1.5rem')
    expect(pixelToRem(32)).toEqual('2rem')
  })

  it('should convert a float number to cents', () => {
    expect(floatToCents(1)).toEqual('00')
    expect(floatToCents(100)).toEqual('00')
    expect(floatToCents(100.99)).toEqual('99')
    expect(floatToCents(100.14)).toEqual('14')
    expect(floatToCents(100.63)).toEqual('63')
    expect(floatToCents(0)).toEqual('00')
    expect(floatToCents()).toEqual('00')
  })
})
