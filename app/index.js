/* eslint-disable import/imports-first */
require('../shared/libs/chorme/promisifyChromeExtensionAPIs');

import React from 'react';
import ReactDOM from 'react-dom';
import { createHashHistory } from 'history';
import Root from './containers/Root';
import setupStorePersistentHandler from './utils/setupStorePersistentHandler';
import getManifest from './utils/getManifest';

async function start() {
  const obj = await chrome.storage.local.getAsync(['state']);
  const manifest = await getManifest();

  const initialState = (obj || {}).state || {};
  initialState.manifest = manifest;


  const createStore = require('./store/configureStore');

  const history = createHashHistory();

  const store = createStore({ initialState, history });
  setupStorePersistentHandler({ store });

  ReactDOM.render(
    <Root store={store} history={history} />,
    document.querySelector('#root')
  );
}

start();
