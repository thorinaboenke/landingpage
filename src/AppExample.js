/** @jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import React from 'react';
//import images:
import logo from './images/logo.png';

const CenteredContainerStyles = css`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const headerStyles = css``;
//can be reused in other blocks
const headerInnerStlyes = css`
  ${CenteredContainerStyles}
  padding: 15px, 0;
  position: fixed;
  display: flex;
  justify-content: space-between;

  nav a {
    margin-right: 10px;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
    }
  }
`;

const LogoStyles = css`
  width: 80px;
  height: auto;
`;

const SignupButtonStyles = css`
  border: 2px solid #ddd;
  border-radius: 40px;
  background: #fff;
  transition: background-color color 0.2s;

  &:hover {
    color: #fff;
    background-color: #ddd;
  }
`;
cursor: pointer;

background-image: url(${triangle});
background-repeat: no-repeat

responsiveness/media queries
//adjust things according to screen size
@media(min-width: 800px) {
  min-height: 720px
}

@media(min-width: 1400px ) {

  min-height: 1009px
}

const SectionStyle
const FirstSectionStyle
const SecondSectionStyle// and extend on prev sections

function App() {
  return (
    <>
      <header>
        <img css={LogoStyles} src={logo} alt={''} />
      </header>

      <main>
        <section>
          <h1>Hi</h1>
          <p></p>
          <input></input>
          <button></button>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
