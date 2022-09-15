import { SWRConfig } from 'swr';


import "../styles/resetCss.css";
import '../styles/globals.css'
import 'antd/dist/antd.css';

import GoToTop from '../components/GoToTop/GoToTop';

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig>
      <Component {...pageProps} />
      <GoToTop />
    </SWRConfig>
  )
}

export default MyApp
