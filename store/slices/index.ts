import { combineReducers } from 'redux';

import { vdsVpsSlice } from './vdsVps';
import { vpnSlice } from './vpn';
import { vdsVpsBulletproofSlice } from './vdsVpsBulletproof';

export const rootReducer = combineReducers({
  vdsVps: vdsVpsSlice.reducer,
  vpn: vpnSlice.reducer,
  vdsVpsBulletproof: vdsVpsBulletproofSlice.reducer,
});