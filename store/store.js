import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { rootReducer } from './slices';

const makeStore = () => configureStore({
  reducer: rootReducer,
});

export const wrapper = createWrapper(makeStore);