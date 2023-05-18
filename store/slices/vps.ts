import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { TVps } from '../../types';

interface vpsState {
  vps: TVps | null;
}

const initialState: vpsState = {
  vps: null,
}

export const vpsSlice = createSlice({
  name: 'vps',
  initialState,
  reducers: {
    fetchVps(state, action: PayloadAction<any>) {
      if (!action.payload.__ignoreStaticProps) state.vps = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      if (action.payload.__ignoreStaticProps) {
        return state;
      }
      return {
        ...state,
        ...action.payload.vps,
      };
    });
  },
});

export const { fetchVps } = vpsSlice.actions;