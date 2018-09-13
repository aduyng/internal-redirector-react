
export default (state, { payload: { profile, expanded = true } }) => {
  let { profiles = [] } = state;
  profiles = profiles.map(p => ({
    ...p,
    isExpanded: p.id === profile.id && expanded
  }));

  return Object.assign({}, state, { profiles });
};
