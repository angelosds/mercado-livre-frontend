import type { GetServerSideProps, NextPage } from 'next'

import api from '../../api';

import ProductsListTemplate from '../../components/templates/products-list';
import ProductDetailed from '../../models/product-detailed';

export type Props = {
  categories?: Array<string>;
  items?: Array<ProductDetailed>;
}

const Items: NextPage<Props> = ({ categories, items }) => {
  return (
    <ProductsListTemplate breadcrumbsItems={categories} items={items?.map(item => ({ ...item, price: item.price.amount }))} />
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { search } = query
  const { data } = await api.get('items', { params: { search } })

  return { props: { ...data } }
}

export default Items
