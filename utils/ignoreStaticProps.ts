/* export const ignoreStaticProps = (store: any) => (next: (arg0: any) => void) => (action: { payload: { __ignoreStaticProps: any; }; }) => {
  if (action.payload?.__ignoreStaticProps) {
    delete action.payload.__ignoreStaticProps;
  } else {
    const currentState = store.getState();
    if (currentState.vds.vds !== null) {
      action.payload = { ...action.payload, __ignoreStaticProps: true };
    }
    next(action);
  }
}; */


/* export const ignoreStaticProps = (store: any) => (next: (arg0: any) => void) => (action: { payload: { __ignoreStaticProps: any; }; }) => {
  const currentState = store.getState();
  const { vds, vps, vpn } = currentState;

  if (action.payload?.__ignoreStaticProps) {
    delete action.payload.__ignoreStaticProps;
  } else {
    const shouldIgnoreVds = vds !== null;
    const shouldIgnoreVps = vps !== null; // add other parameters if needed
    const shouldIgnoreVpn = vpn !== null;

    if (shouldIgnoreVds || shouldIgnoreVps || shouldIgnoreVpn) {
      action.payload = { ...action.payload, __ignoreStaticProps: true };
    }

    next(action);
  }
}; */