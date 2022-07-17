import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Component/Store/store';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();


history.listen(console.log)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <Router history={history}>
    <App />
  </Router>
  </Provider>
);
