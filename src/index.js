import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Global, css } from '@emotion/core';

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
        body {
          margin: ;
          line-height: ;
          color: ;
        }

        button {
          cursor: ;
        }

        p {
          color: ;
          font-size: ;
        }

        h1 {
          font-weight: ;
        }
      `}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
