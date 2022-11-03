import { AppProps } from 'next/app'
import Layout from '../components/Layaut/Layaut'
// import '../style.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
