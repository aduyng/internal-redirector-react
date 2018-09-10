import React, { Component, Fragment } from 'react';
import { shape, string, func, arrayOf } from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Logo from '../../components/Logo';
import Profiles from '../../components/Profiles';
import styles from './styles';

class Options extends Component {
  static propTypes = {
    classes: shape().isRequired,
    version: string.isRequired,
    addNewProfile: func.isRequired,
    profiles: arrayOf(shape()).isRequired
  };

  onAddButtonClick = () => {
    this.props.addNewProfile();
  }

  render() {
    const { classes, version, profiles } = this.props;

    return (
      <Fragment>
        <CssBaseline />
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Logo version={version} />
          </Toolbar>
        </AppBar>
        <main>
          <Profiles profiles={profiles} />
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="title" align="center" gutterBottom>
            Footer
        </Typography>
          <Typography variant="subheading" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
        </Typography>
        </footer>
        {/* End footer */}
        <Button variant="fab" className={classes.fab} color="primary" onClick={this.onAddButtonClick}>
          <AddIcon />
        </Button>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Options);
