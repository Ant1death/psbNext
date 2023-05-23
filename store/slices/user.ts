import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { TUser } from '../../types';

interface userState {
  user: TUser | null;
}

const initialState: userState = {
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUser(state, action: PayloadAction<any>) {
      state.user = action.payload;
    },
    increaseBalance(state, action: PayloadAction<any>) {
      state.user.balance = Number(state.user.balance) + Number(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      const nextState = {
        ...state,
        ...action.payload.user,
      }

      if (state.user) nextState.hosting = state.user;

      return nextState;
    });
  },
});

export const { fetchUser, increaseBalance } = userSlice.actions;