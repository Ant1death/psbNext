import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { TVdsBulletproof } from '../../types';

interface vdsBulletproofState {
  vdsVpsBulletproof: TVdsBulletproof | null;
}

const initialState: vdsBulletproofState = {
  vdsVpsBulletproof: null,
}

export const vdsVpsBulletproofSlice = createSlice({
  name: 'vdsVpsBulletproof',
  initialState,
  reducers: {
    fetchVdsVpsBulletproof(state, action: PayloadAction<any>) {
      if (!action.payload.__ignoreStaticProps) state.vdsVpsBulletproof = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      if (action.payload.__ignoreStaticProps) {
        return state;
      }
      return {
        ...state,
        ...action.payload.vdsVpsBulletproof,
      };
    });
  },
});

export const { fetchVdsVpsBulletproof } = vdsVpsBulletproofSlice.actions;