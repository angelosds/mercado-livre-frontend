import React from 'react'
import Product from '../../../models/product';

import Breadcrumbs from '../../atoms/breadcrumbs'
import Card from '../../atoms/card';
import ProductSummary from '../../organisms/product-summary';

import * as S from './style'

export type Props = {
  breadcrumbsItems: Array<string> | null;
  items: Array<Product> | null;
}

const ProductsListTemplate = ({ breadcrumbsItems, items }: Props) => (
  <div>
    {breadcrumbsItems && breadcrumbsItems.length ?
      <div data-testid="breadcrumbs">
        <Breadcrumbs  items={breadcrumbsItems} />
      </div>
      : null
    }

    <Card>
      <S.ListWrapper>
        {items?.map(item => (
          <div data-testid="item">
            <ProductSummary key={item.id} {...item} price={item.price} />
          </div>
        ))}
      </S.ListWrapper>
    </Card>
  </div>
)

export default ProductsListTemplate
