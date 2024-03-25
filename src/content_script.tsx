import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'webext-redux';
import Content from './components/content';

const proxyStore = new Store();

const anchor = document.createElement('div');
anchor.id = 'app';

document.body.insertBefore(anchor, document.body.childNodes[0]);

proxyStore.ready().then(() => {
  render(
    <Provider store={proxyStore}>
      <Content />
    </Provider>,
    document.getElementById('app'),
  );
});
