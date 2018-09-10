
export default (state, { payload: profile }) => {
  let { profiles = [] } = state;
  profiles = [].concat(profiles, [profile]);

  return Object.assign({}, state, { profiles });
};
