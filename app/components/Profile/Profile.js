import React, { PureComponent } from 'react';
import { shape, string } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import profilePropType from '../../../shared/props/profile';

import styles from './styles';

class Profile extends PureComponent {
  static propTypes = {
    classes: shape({ root: string.isRequired }).isRequired,
    profile: profilePropType.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      profile: props.profile
    };
  }

  handleChange = name => (event) => {
    const { profile: existingProfile } = this.state;
    const profile = { ...existingProfile, [name]: event.target.value };
    this.setState({ profile });
  };


  render() {
    const { classes } = this.props;
    const { profile } = this.state;

    return (
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          label="Name"
          className={classes.textField}
          value={profile.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
      </form>
    );
  }
}

export default withStyles(styles)(Profile);
