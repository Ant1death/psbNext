import '../styles/globals.css';
import { Rubik } from '@next/font/google';

const rubik = Rubik({
  subsets: ['latin']
});

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}