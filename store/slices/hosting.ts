import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { THosting } from '../../types';

interface hostingState {
  hosting: THosting | null;
}

const initialState: hostingState = {
  hosting: null,
}

export const hostingSlice = createSlice({
  name: 'hosting',
  initialState,
  reducers: {
    fetchHosting(state, action: PayloadAction<any>) {
      if (!action.payload.__ignoreStaticProps) state.hosting = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      if (action.payload.__ignoreStaticProps) {
        return state;
      }
      return {
        ...state,
        ...action.payload.hosting,
      };
    });
  },
});

export const { fetchHosting } = hostingSlice.actions;