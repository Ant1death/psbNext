import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { TVds } from '../../types';

interface vdsVpsState {
  vdsVps: TVds | null;
}

const initialState: vdsVpsState = {
  vdsVps: null,
}

export const vdsVpsSlice = createSlice({
  name: 'vdsVps',
  initialState,
  reducers: {
    fetchVdsVps(state, action: PayloadAction<any>) {
      if (!action.payload.__ignoreStaticProps) state.vdsVps = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      if (action.payload.__ignoreStaticProps) {
        return state;
      }
      return {
        ...state,
        ...action.payload.vdsVps,
      };
    });
  },
});

export const { fetchVdsVps } = vdsVpsSlice.actions;