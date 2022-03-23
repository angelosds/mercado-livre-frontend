import type { GetServerSideProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

import api from '../../api';

import ProductDetailsTemplate from '../../components/templates/product';

import Product from '../../models/product';

export type Props = {
  data: Product;
}

const Item: NextPage<Props> = ({ data }) => {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{data.title} - {t('appName')}</title>
      </Head>
      <ProductDetailsTemplate onBuyItem={() => {}} product={data} />
    </>
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
