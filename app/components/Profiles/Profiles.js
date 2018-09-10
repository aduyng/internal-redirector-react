import React, { PureComponent } from 'react';
import { shape, string, arrayOf } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import classNames from 'classnames';
import size from 'lodash/size';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import moment from 'moment';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import pluralize from 'pluralize';
import styles from './styles';

class Profiles extends PureComponent {
  static propTypes = {
    classes: shape({ root: string.isRequired }).isRequired,
    profiles: arrayOf(shape()).isRequired
  }

  render() {
    const { classes, profiles } = this.props;

    return (
      <div className={classNames(classes.root)}>
        {profiles.map(profile => (
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
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
              <Typography>
                sit amet blandit leo lobortis eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(Profiles);
