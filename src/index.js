import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Global, jsx, css } from '@emotion/core';
import MyFont from './fonts/Gilroy-Light.otf';

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          line-height: 1.3em;
        }

        }
        body {
          
          margin: 0;
        }

        button {
          border-style: none;
          background-color: #ff6661;
          border-color: #ff6661;
          color: white;
          cursor: pointer;
        }

        p {
          color: #474747;
          font-size: 22px;
          text-align: center;
        }

        h1 {
          font-size: 42px;
          text-align: center;
          line-height: 50px;
          font-weight: 900;
        }

        h2 {
          font-size: 32px;
          margin-top: 90px;
          text-align: center;
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
