import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, Subscribe } from 'unstated';

import './index.css';

import ErrorBoundary from './containers/errorboundary';

import Lang from 'contexts/lang';
import Login, { ILogin } from 'contexts/login';

import App from './App';

// Login
// Filter
// Cart
// Pagination

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider inject={[Lang, Login]}>
        <Subscribe to={[Login]}>
          {(login) => {
            // @ts-ignore
            return <App login={login} />;
          }}
        </Subscribe>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
