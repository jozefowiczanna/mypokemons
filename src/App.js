import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main/Main';

function App() {

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;