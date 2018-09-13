import ADD_NEW_PROFILE from './handlers/ADD_NEW_PROFILE';
import TOGGLE_PROFILE from './handlers/TOGGLE_PROFILE';
import DELETE_PROFILE from './handlers/DELETE_PROFILE';

const HANDLERS = {
  ADD_NEW_PROFILE,
  TOGGLE_PROFILE,
  DELETE_PROFILE,
};

const initialState = {};

export default (state = initialState, action) => {
  const reduceFn = HANDLERS[action.type];
  if (!reduceFn) {
    return state;
  }
  return reduceFn(state, action);
};
