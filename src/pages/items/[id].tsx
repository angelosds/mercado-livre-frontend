import type { GetServerSideProps, NextPage } from 'next'

import api from '../../api';

import ProductDetailsTemplate from '../../components/templates/product';

export type Props = {
  data: any;
}

const Item: NextPage<Props> = ({ data }) => {
  return (
    <ProductDetailsTemplate onBuyItem={() => {}} product={data} />
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params) {
    const { id } = params
    const { data } = await api.get(`items/${id}`)

    return { props: { data } }
  }

  return { props: {} }
}

export default Item
