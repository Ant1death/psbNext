import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { TOrders } from '../../types';

interface ordersState {
  orders: TOrders | [];
}

const initialState: ordersState = {
  orders: [],
}

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    fetchOrders(state, action: PayloadAction<any>) {
      state.orders = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      const nextState = {
        ...state,
        ...action.payload.orders,
      }

      if (state.orders) nextState.orders = state.orders;

      return nextState;
    });
  },
});

export const { fetchOrders } = ordersSlice.actions;