import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Options from './Options/index';

class App extends Component {
  static propTypes = {
  };

  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Switch>
          <Route path="/options" component={Options} />
          <Route render={() => (<div>Miss</div>)} />
        </Switch>
      </Fragment>
    );
  }
}

export default connect(undefined, undefined)(App);
