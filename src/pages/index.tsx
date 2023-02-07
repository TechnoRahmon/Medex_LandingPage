import type { NextPage } from 'next'
import Head from 'next/head'

import { useGetHomeApiQuery , getHomeApi, getRunningQueriesThunk } from '../features/home/HomeSlice'
import { wrapper } from '../lib/store'
import styles from '../styles/Home.module.css'

const IndexPage: NextPage = () => {
  const { data } = useGetHomeApiQuery();
  console.log(data)
  return (
    <div className={styles.container}>
      <Head>
        <title>MedexSepeti - Medikal Artık Dijital</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      <section>
        <h1>Home Page</h1>
      
      </section>
    </div>
  )
}

export default IndexPage

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {

    store.dispatch(getHomeApi.initiate());
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  }
);