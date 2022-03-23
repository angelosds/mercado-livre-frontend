import React from 'react'

import Product from '../../../models/product'

import ProductDetails from '../../organisms/product-details'

export type Props = {
  product: Product,
  onBuyItem: () => void;
}

const ProductDetailsTemplate = ({ product, onBuyItem }: Props) => (
  <ProductDetails product={product} onBuyItem={onBuyItem} />
)

export default ProductDetailsTemplate
