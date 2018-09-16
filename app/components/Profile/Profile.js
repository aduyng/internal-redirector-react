import React, { PureComponent } from 'react';
import { shape, string } from 'prop-types';
import map from 'lodash/map';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddRuleIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import profilePropType from '../../../shared/props/profile';
import generateUniqueId from '../../utils/generateUniqueId';
import Rule from '../Rule';

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

  onPanelChange = rule => (event, expanded) => {
    const { profile: existingProfile } = this.state;
    const { rules: existingRules } = existingProfile;
    const rules = map(existingRules, (existingRule) => {
      if (existingRule.id !== rule.id) {
        return existingRule;
      }

      return { ...existingRule, isExpanded: expanded };
    });

    const profile = { ...existingProfile, rules };
    this.setState({ profile });
  }

  onAddRuleClick = () => {
    const { profile: existingProfile } = this.state;
    const { rules: existingRules = [] } = existingProfile;
    const rules = [...existingRules, {
      id: generateUniqueId(),
      isExpanded: true
    }];
    const profile = { ...existingProfile, rules };
    this.setState({ profile });
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
        <FormControlLabel
          control={
            <Switch
              checked={this.state.checkedB}
              onChange={this.handleChange('isActive')}
              value="true"
              color="primary"
            />
          }
          label="Active"
        />

        <TextField
          label="Name (*)"
          fullWidth
          className={classes.textField}
          value={profile.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />

        <FormControl className={classes.rules} component="fieldset">
          <FormLabel component="legend">Rules (*)</FormLabel>
          <Button variant="contained" color="primary" size="small" className={classes.button} onClick={this.onAddRuleClick}>
            <AddRuleIcon className={classes.leftIcon} />
            Add Rule
          </Button>
          <div className={classes.listOfRules}>
            {map(profile.rules, rule => (
              <ExpansionPanel expanded={rule.isExpanded} onChange={this.onPanelChange(rule)}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>General settings</Typography>
                  <Typography className={classes.secondaryHeading}>I am an </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Rule rule={rule} />
                </ExpansionPanelDetails>
              </ExpansionPanel>
            ))}
          </div>
        </FormControl>
      </form>
    );
  }
}

export default withStyles(styles)(Profile);
