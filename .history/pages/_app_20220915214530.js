import { SWRConfig } from 'swr';
import { QueryClient, QueryClientProvider } from 'react-query';


import "../styles/resetCss.css";
import '../styles/globals.css'
import 'antd/dist/antd.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig>
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default MyApp
