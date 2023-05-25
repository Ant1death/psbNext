import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { diff } from 'jsondiffpatch';

import { TVpn } from '../../types';

interface vpnState {
  vpn: TVpn[] | [];
}

const initialState: vpnState = {
  vpn: [],
}

export const vpnSlice = createSlice({
  name: 'vpn',
  initialState,
  reducers: {
    fetchVpn(state, action: PayloadAction<any>) {
      state.vpn = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      const nextState = {
        ...state,
        ...action.payload.vpn,
      }

      if (state.vpn) nextState.vpn = state.vpn;

      return nextState;
    });
  },
});

export const { fetchVpn } = vpnSlice.actions;