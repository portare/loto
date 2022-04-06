import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Layout from './Layout';

import './assets/scss/style.scss';


ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

