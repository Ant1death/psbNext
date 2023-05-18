import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { TVpn } from '../../types';

interface vpnState {
  vpn: TVpn | null;
}

const initialState: vpnState = {
  vpn: null,
}

export const vpnSlice = createSlice({
  name: 'vpn',
  initialState,
  reducers: {
    fetchVpn(state, action: PayloadAction<any>) {
      if (!action.payload.__ignoreStaticProps) state.vpn = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      if (action.payload.__ignoreStaticProps) {
        return state;
      }
      return {
        ...state,
        ...action.payload.vpn,
      };
    });
  },
});

export const { fetchVpn } = vpnSlice.actions;