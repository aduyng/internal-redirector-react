import { bindActionCreators } from 'redux';
import addNewProfile from '../../actions/addNewProfile';
import cancelLogin from '../../actions/cancelLogin';

export default dispatch => bindActionCreators({ addNewProfile, cancelLogin }, dispatch);
