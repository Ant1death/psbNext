import { Provider } from 'react-redux';

import { wrapper } from '../store/store';

import '../styles/globals.css';

export default function App({ Component, ...pageProps }) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      {getLayout(<Component {...props} />)}
    </Provider>
  );


}
