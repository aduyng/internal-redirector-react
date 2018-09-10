import ADD_NEW_PROFILE from './handlers/ADD_NEW_PROFILE';

const HANDLERS = {
  ADD_NEW_PROFILE,
};

const initialState = {};

export default (state = initialState, action) => {
  const reduceFn = HANDLERS[action.type];
  if (!reduceFn) {
    return state;
  }
  return reduceFn(state, action);
};
