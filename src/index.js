import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import contactReducer from './redux/reducers/contactReducer'
import { Provider } from 'react-redux';

const store = createStore(contactReducer, composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
