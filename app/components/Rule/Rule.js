import React, { PureComponent } from 'react';
import { shape, string } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import rulePropType from '../../../shared/props/rule';

import styles from './styles';

class Rule extends PureComponent {
  static propTypes = {
    classes: shape({ root: string.isRequired }).isRequired,
    rule: rulePropType.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      rule: props.rule
    };
  }

  handleChange = name => (event) => {
    const { rule: existingRule } = this.state;
    const rule = { ...existingRule, [name]: event.target.value };
    this.setState({ rule });
  };

  render() {
    const { classes } = this.props;
    const { rule } = this.state;

    return (
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Search"
          helperText="Full width!"
          fullWidth
          value={rule.search}
          margin="dense"
        />

        <TextField
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Replace"
          helperText="Full width!"
          fullWidth
          value={rule.replace}
          margin="dense"
        />
      </form>
    );
  }
}

export default withStyles(styles)(Rule);
