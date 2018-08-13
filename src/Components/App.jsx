import React from 'react';
import {Provider} from 'react-redux';
import store from '../Redux/store';
import Routes from './Routes/Routes';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
