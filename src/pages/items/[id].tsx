import type { GetServerSideProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

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

export const getServerSideProps: GetServerSideProps = async ({ locale = 'es', params }) => {
  const translations = await serverSideTranslations(locale, ['common'])

  if (params) {
    const { id } = params
    const { data } = await api.get(`items/${id}`)

    return { props: { data, ...translations } }
  }

  return { props: { ...translations} }
}

export default Item
