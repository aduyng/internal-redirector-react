
export default (state, { payload: { profile } }) => {
  let { profiles = [] } = state;
  profiles = profiles.filter(p => p.id !== profile.id);

  return Object.assign({}, state, { profiles });
};
