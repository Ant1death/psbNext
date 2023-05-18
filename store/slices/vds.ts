import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { TVds } from '../../types';

interface vdsState {
  vds: TVds | null;
}

const initialState: vdsState = {
  vds: null,
}

export const vdsSlice = createSlice({
  name: 'vds',
  initialState,
  reducers: {
    fetchVds(state, action: PayloadAction<any>) {
      if (!action.payload.__ignoreStaticProps) state.vds = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      if (action.payload.__ignoreStaticProps) {
        return state;
      }
      return {
        ...state,
        ...action.payload.vds,
      };
    });
  },
});

export const { fetchVds } = vdsSlice.actions;