import { configureStore, ThunkAction, Action, ActionCreator, AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { rootReducer } from './slices/index';
import { ignoreStaticProps } from '../utils/ignoreStaticProps';

const middleware = [ignoreStaticProps];

const makeStore = () => configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ActionCreator<ThunkAction<ReturnType, RootState, any, AnyAction>>;
export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;

export const wrapper = createWrapper<AppStore>(makeStore);