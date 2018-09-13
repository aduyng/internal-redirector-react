import React, { Component, Fragment } from 'react';
import { shape, string, func, arrayOf } from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Input from '@material-ui/core/Input';
import Logo from '../../components/Logo';
import Profiles from '../../components/Profiles';
import styles from './styles';
import profile from '../../../shared/props/profile';

class Options extends Component {
  static propTypes = {
    classes: shape().isRequired,
    version: string.isRequired,
    addNewProfile: func.isRequired,
    toggleProfile: func.isRequired,
    deleteProfile: func.isRequired,
    profiles: arrayOf(profile)
  };

  static defaultProps = {
    profiles: []
  };

  onAddButtonClick = async () => {
    const newlyAddedProfile = await this.props.addNewProfile();
    this.props.toggleProfile({ profile: newlyAddedProfile, expanded: true });
  }

  onInputChange = () => {
    this.performSearch();
  }

  performSearch() {
    console.log('here');
  }

  render() {
    const { classes, version, profiles } = this.props;

    return (
      <Fragment>
        <CssBaseline />
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Logo version={version} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <Input
                placeholder="Search profiles…"
                disableUnderline
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onChange={this.onInputChange}
              />
            </div>
            <Button className={classes.button} color="inherit" onClick={this.onAddButtonClick}>
              <AddIcon className={classes.leftIcon} />
              New Profile
            </Button>
            <Button className={classes.button} color="inherit">
              <ArrowUpwardIcon className={classes.leftIcon} />
              Import...
            </Button>
            <Button className={classes.button} color="inherit">
              <ArrowDownwardIcon className={classes.leftIcon} />
              Export
            </Button>
          </Toolbar>
        </AppBar>
        <main>
          <Profiles
            profiles={profiles}
            toggleProfile={this.props.toggleProfile}
            deleteProfile={this.props.deleteProfile}
          />
        </main>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Options);
