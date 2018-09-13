import { bindActionCreators } from 'redux';
import addNewProfile from '../../actions/addNewProfile';
import toggleProfile from '../../actions/toggleProfile';
import deleteProfile from '../../actions/deleteProfile';

export default dispatch => bindActionCreators({
  addNewProfile,
  toggleProfile,
  deleteProfile
}, dispatch);
