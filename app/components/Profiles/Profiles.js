import React, { PureComponent } from 'react';
import { shape, string, arrayOf, func } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import classNames from 'classnames';
import size from 'lodash/size';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import moment from 'moment';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import pluralize from 'pluralize';
import profilePropType from '../../../shared/props/profile';
import styles from './styles';
import Profile from '../Profile/Profile';

class Profiles extends PureComponent {
  static propTypes = {
    classes: shape({ root: string.isRequired }).isRequired,
    profiles: arrayOf(profilePropType).isRequired,
    toggleProfile: func.isRequired,
    deleteProfile: func.isRequired
  }

  static defaultProps = {
    activeProfile: undefined,
  }

  constructor(props) {
    super(props);
    this.state = {
      profiles: props.profiles,
    };
  }

  onToggle = (event) => {
    const profile = this.findProfileFromEvent(event);
    return this.props.toggleProfile({ profile, expanded: !profile.isExpanded });
  }

  onDeleteButtonClick = (event) => {
    const profile = this.findProfileFromEvent(event);
    this.setState({
      showConfirmation: true,
      profile,
      confirmationText: 'Are you sure you want to delete this profile?',
      confirmationTitle: `Delete ${profile.name}`
    });
  }

  onConfirmationClose = () => {
    this.setState({
      showConfirmation: false,
    });
  }

  onConfirmationAccept = async () => {
    await this.props.deleteProfile({ profile: this.state.profile });
    this.setState({
      showConfirmation: false,
      profile: undefined,
    });
  }

  findProfileFromEvent(event) {
    const profileId = event.currentTarget.getAttribute('data-profile-id');
    const { profiles } = this.props;
    return profiles.find(p => p.id === profileId);
  }

  render() {
    const { classes, profiles } = this.props;

    return (
      <div className={classNames(classes.root)}>
        {profiles.map(profile => (
          <ExpansionPanel key={profile.id} expanded={profile.isExpanded} onChange={this.onToggle}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} data-profile-id={profile.id} >
              <div className={classes.column}>
                <Typography className={classes.heading}>{profile.name}</Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>
                  {`${size(profile.rules)} ${pluralize('rule', size(profile.rules))}${profile.updatedAt ? `, ${moment(profile.updatedAt).fromNow()}` : ''}`}
                </Typography>
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Profile profile={profile} />
              <div className={classes.footerButtons}>
                <div className={classes.rightButtonGroup}>
                  <Button color="secondary" className={classes.button} data-profile-id={profile.id} onClick={this.onDeleteButtonClick}>
                    Delete
                    </Button>
                </div>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
        {this.state.showConfirmation && (
          <Dialog
            open
            onClose={this.onConfirmationClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{this.state.confirmationTitle}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">{this.state.confirmationText}</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.onConfirmationClose}>
                No
            </Button>
              <Button onClick={this.onConfirmationAccept} color="primary" autoFocus>
                Yes
            </Button>
            </DialogActions>
          </Dialog>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Profiles);
