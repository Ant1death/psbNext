import { combineReducers } from 'redux';

import { vpsSlice } from './vps';
import { vdsSlice } from './vds';

export const rootReducer = combineReducers({
  vps: vpsSlice.reducer,
  vds: vdsSlice.reducer,
});