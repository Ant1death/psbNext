import { combineReducers } from 'redux';

import { vdsVpsSlice } from './vdsVps';
import { vpnSlice } from './vpn';
import { vdsVpsBulletproofSlice } from './vdsVpsBulletproof';
import { hostingSlice } from './hosting';

export const rootReducer = combineReducers({
  vdsVps: vdsVpsSlice.reducer,
  vpn: vpnSlice.reducer,
  vdsVpsBulletproof: vdsVpsBulletproofSlice.reducer,
  hosting: hostingSlice.reducer,
});