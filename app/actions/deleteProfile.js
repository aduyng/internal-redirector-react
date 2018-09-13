import { DELETE_PROFILE } from './consts';

export default ({ profile }) => dispatch => dispatch({
  type: DELETE_PROFILE,
  payload: { profile }
});
