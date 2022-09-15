import { SWRConfig } from 'swr';


import "../styles/resetCss.css";
import '../styles/globals.css'
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig>
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default MyApp
