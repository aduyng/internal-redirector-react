import React, { PureComponent } from 'react';
import { shape, string } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import styles from './styles';

class Logo extends PureComponent {
  static propTypes = {
    classes: shape({ root: string.isRequired }).isRequired,
    version: string.isRequired
  }

  render() {
    const { classes: { root, logo, version: versionClassName, name }, version } = this.props;

    return (
      <div className={root}>
        <Typography component="sup" className={versionClassName} variant="caption">v{version}</Typography>
        <img className={logo} src="./img/32.png" alt="logo" />
        <Typography variant="title" color="inherit" noWrap className={name}>
          Internal Redirector
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Logo);
