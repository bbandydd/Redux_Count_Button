import React from 'react';
import ReactDOM from 'react-dom';

// import redux packages
import { Provider } from 'react-redux';

// import store
import configureStore from './store/configureStore';

// import container
import Panel from './containers/Panel';

ReactDOM.render(
  <Provider store={configureStore}>
      <Panel />
  </Provider>
, document.getElementById('app'));