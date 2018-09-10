import omit from 'lodash/omit';

export default ({ store }) => {
  store.subscribe(() => {
    const state = store.getState();
    const stateToPersist = omit(state, 'router');
    return chrome.storage.local.setAsync({ state: stateToPersist });
  });
};
