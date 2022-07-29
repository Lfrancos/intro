import { NextPage } from 'next'
import { AppProps } from 'next/app';
import { ReactNode } from 'react'
import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: ( page: JSX.Element ) => ReactNode;
}

type NextPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: NextPropsWithLayout) {
  return <Component {...pageProps} />
}

export default MyApp
