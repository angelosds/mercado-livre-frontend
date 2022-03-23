import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import api from '../../api';

import ProductsListTemplate from '../../components/templates/products-list';
import ProductDetailed from '../../models/product-detailed';

export type Props = {
  categories?: Array<string>;
  items?: Array<ProductDetailed>;
  search: string;
}

const Items: NextPage<Props> = ({ categories, items, search }) => {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('searchResults', { term: search, appName: t('appName') })}</title>
      </Head>

      <ProductsListTemplate breadcrumbsItems={categories} items={items?.map(item => ({ ...item, price: item.price.amount }))} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale = 'es', query }) => {
  const { search } = query
  const { data } = await api.get('items', { params: { search } })

  return { props: { ...data, search , ...(await serverSideTranslations(locale, ['common'])),} }
}

export default Items
