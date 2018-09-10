import { ADD_NEW_PROFILE } from './consts';
import generateUniqueId from '../utils/generateUniqueId';

export default () => async (dispatch) => {
  const profile = {
    id: generateUniqueId(),
    name: 'New Profile'
  };

  return dispatch({
    type: ADD_NEW_PROFILE,
    payload: profile
  });
};
