import { TOGGLE_PROFILE } from './consts';

export default ({ profile, expanded }) => async (dispatch) => {
  dispatch({
    type: TOGGLE_PROFILE,
    payload: { profile, expanded }
  });

  return profile;
};
