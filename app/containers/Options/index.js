import { connect } from 'react-redux';
import mapDispatchToProps from './mapDispatchToProps';
import mapStateToProps from './mapStateToProps';
import Options from './Options';

export default connect(mapStateToProps, mapDispatchToProps)(Options);
