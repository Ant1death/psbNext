import { combineReducers } from 'redux';

import { vpsSlice } from './vps';
import { vdsSlice } from './vds';
import { vpnSlice } from './vpn';

export const rootReducer = combineReducers({
  vps: vpsSlice.reducer,
  vds: vdsSlice.reducer,
  vpn: vpnSlice.reducer,
});