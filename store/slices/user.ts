import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { TUser } from '../../types';

interface userState {
  user: TUser | {};
}

const initialState: userState = {
  user: {},
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUser(state, action: PayloadAction<any>) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      const nextState = {
        ...state,
        ...action.payload.user,
      }

      if (state.user) nextState.user = state.user;

      return nextState;
    });
  },
});

export const { fetchUser } = userSlice.actions;