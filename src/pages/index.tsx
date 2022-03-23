import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import HomeTemplate from '../components/templates/home'

const Home: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('appName')}</title>
      </Head>

      <HomeTemplate />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale = 'es' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Home
