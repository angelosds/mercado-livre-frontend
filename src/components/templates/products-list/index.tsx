import React from 'react'
import Product from '../../../models/product';

import Breadcrumbs from '../../atoms/breadcrumbs'
import Card from '../../atoms/card';
import ProductSummary from '../../organisms/product-summary';

import * as S from './style'

export type Props = {
  breadcrumbsItems?: Array<string>;
  items?: Array<Product>;
}

const ProductsListTemplate = ({ breadcrumbsItems, items }: Props) => (
  <div>
    {breadcrumbsItems && breadcrumbsItems.length ?
      <div data-testid="breadcrumbs">
        <Breadcrumbs items={breadcrumbsItems} />
      </div>
      : null
    }

    <Card>
      <S.ListWrapper>
        {items?.map(item => (
          <div data-testid="item" key={item.id}>
            <ProductSummary product={item} />
          </div>
        ))}
      </S.ListWrapper>
    </Card>
  </div>
)

export default ProductsListTemplate
